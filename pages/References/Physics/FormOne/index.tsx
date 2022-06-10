import React, { ReactNode, useContext, useEffect, useState } from 'react';
import Styles from '../../../../styles/reviewDisplay.module.scss';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { type } from 'os';
import {
	exam,
	examType,
	formExams,
	reference,
	review,
	topic,
	topicReview,
} from '@prisma/client';
import { prisma } from '../../../../db/prisma';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import parse from 'html-react-parser';
import Head from 'next/head';
import Link from 'next/link';
import Error from 'next/error';
import Drawer from '../../../../components/tools/DrawerExam';
import { NavContext } from '../../../../components/context/StateContext';
import Modal from '../../../../components/tools/modal';
import Table from '../../../../components/tools/Table';
import Book from '../../../../components/tools/Book';

const subjectLocator = 'Physics';
const formLocator = 'Form One';
const subjectLocatorLink = 'Physics';
const formLocatorLink = 'FormOne';

export const getStaticProps: GetStaticProps = async () => {
	const topicsFromServer = await prisma.examType.findMany({
		where: {
			exam: {
				some: {
					published: true,
				},
			},
			published: true,
			subjectExams: {
				subjectName: subjectLocator,
			},
			formExams: {
				formName: formLocator,
			},
		},
		select: {
			id: true,
			name: true,
			definition: true,
			formExams: {
				select: {
					formName: true,
				},
			},
			subjectExams: {
				select: {
					subjectName: true,
				},
			},
		},
	});
	const topics = JSON.parse(JSON.stringify(topicsFromServer));

	const referenceFromServer = await prisma.reference.findMany({
		where: {
			published: true,
			subjectReference: {
				subjectName: subjectLocator,
			},
			formReference: {
				some: {
					formName: formLocator,
				},
			},
		},
		select: {
			id: true,
			formReference: {
				select: {
					formName: true,
				},
			},
			subjectReference: {
				select: {
					subjectName: true,
				},
			},
			name: true,
			description: true,
			isPdf: true,
		},
	});
	const reference = JSON.parse(JSON.stringify(referenceFromServer));

	return {
		props: {
			topics,
			reference,
		},
	};
};

type tableKey = {
	keys: string[];
};

const Index = ({
	topics,
	reference,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);

	useEffect(() => {
		setNavActive('References');

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	if (topics.length < 1) {
		return <Error statusCode={404} />;
	}

	//!mambo yanaanza

	return (
		<div className={Styles.container}>
			<Head>
				<title>{reference[0].topicName}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content={reference[0].topicDefinition} />
				<meta name='keywords' content={reference[0].topicName} />
			</Head>
			<div className={Styles.innerContainer}>
				<div className={Styles.rightInnercontainerBody}>
					<div className={Styles.BodyHeader}>
						{subjectLocator} <ChevronRightOutlinedIcon /> {formLocator}
					</div>
					<div className={Styles.BodyContent}>
						<div className={Styles.conteinerTable}>
							<Book reference={reference} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;

// //*Removing default search bar :)
// Index.getLayout = function PageLayout(page:ReactNode) {
//   return (
//       <>
//           {page}
//       </>
//   )
// }
