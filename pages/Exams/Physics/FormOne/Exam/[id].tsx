import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import { prisma } from '../../../../../db/prisma';
import { exam, examType, review, topic, topicReview } from '@prisma/client';
import React, { useContext, useEffect, useState } from 'react';
import Styles from '../../../../../styles/reviewDisplay.module.scss';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import parse from 'html-react-parser';
import Head from 'next/head';
import Link from 'next/link';
import Drawer from '../../../../../components/tools/Drawer';
import { NavContext } from '../../../../../components/context/StateContext';
import Modal from '../../../../../components/tools/modal';
import Table from '../../../../../components/tools/Table';

const subjectLocator = 'Physics';
const formLocator = 'Form One';
const subjectLocatorLink = 'Physics';
const formLocatorLink = 'FormOne';

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id;
	let Id = parseInt(String(id));
	// ...
	const examServer = await prisma.exam.findUnique({
		where: {
			id: Id,
		},
		select: {
			id: true,
			description: true,
			year: true,
			hasAnswers: true,
			examType: {
				select: {
					subjectExams: {
						select: {
							subjectName: true,
						},
					},
					formExams: {
						select: {
							formName: true,
						},
					},
				},
			},
		},
	});

	const thisexam = JSON.parse(JSON.stringify(examServer));

	return {
		props: {
			thisexam,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	// ...
	const examServer = await prisma.exam.findMany({
		where: {
			published: true,
			examType: {
				subjectExams: {
					subjectName: subjectLocator,
				},
				formExams: {
					formName: formLocator,
				},
			},
		},
		select: {
			id: true,
		},
	});
	const examType = JSON.parse(JSON.stringify(examServer));

	const paths = examType.map((type: examType) => {
		let id = String(type.id);
		return {
			params: {
				id: `${id}`,
			},
		};
	});
	return {
		paths,
		fallback: false,
	};
};

type tableKey = {
	keys: string[];
};

const Index = ({
	thisexam,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);

	const [keyInTable, setKeyInTable] = useState<tableKey>({
		keys: [],
	});

	useEffect(() => {
		setNavActive('Exams');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	if (thisexam == 'undefined') {
		return (
			<div className={Styles.notFound}>
				Cant find Exam, will be resolved soon.
			</div>
		);
	}

	//!mambo yanaanza

	return (
		<div className={Styles.container}>
			<Head>
				<title>{thisexam.name}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content={thisexam.description} />
				{/* //!add keywords */}
				<meta name='keywords' content={thisexam.description} />
			</Head>
			<div className={Styles.innerContainer}>
				{/* <div className={Styles.leftInnercontainerBody}>
					<div className={Styles.sticky}>
						<div className={Styles.topicHeader}>Exam Category List</div>

						<div className={Styles.titleList}>
							{examTypeAll.map((topic: examType) => (
								<div key={topic.id}>
									<Link
										passHref
										href={`/Exams/${subjectLocatorLink}/${formLocatorLink}/${topic.id}`}>
										<a>
											<div
												key={topic.id}
												className={
													topic.id == thisexam.id
														? `${Styles.topicTittle} ${Styles.Active}`
														: Styles.topicTittle
												}>
												{topic.name}
											</div>
										</a>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div> */}
				<div className={Styles.rightInnercontainerBody}>
					<div className={Styles.mobile}>
						{/* <Drawer
							textHeader={'LIST OF examTypeAll'}
							topic={examTypeAll}
							active={thisexam.id}
							link={'Review'}
						/> */}
					</div>
					<div className={Styles.BodyHeader}>
						{thisexam.examType.subjectExams.subjectName}{' '}
						<ChevronRightOutlinedIcon /> {thisexam.examType.formExams.formName}{' '}
						<ChevronRightOutlinedIcon /> {thisexam.description}
					</div>
					<div className={Styles.BodyContent}>
						<div className={Styles.table}>
							{/* {thisexam.exam.map()} */}
							{/* <Table header={keyInTable.keys} body={thisexam.exam} /> */}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
