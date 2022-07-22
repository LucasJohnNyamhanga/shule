import React, { ReactNode, useContext, useEffect, useState } from 'react';
import Styles from '../../../../styles/reviewDisplay.module.scss';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { type } from 'os';
import { review, topic, topicReview } from '@prisma/client';
import { prisma } from '../../../../db/prisma';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import parse from 'html-react-parser';
import Head from 'next/head';
import Link from 'next/link';
import Error from 'next/error';
import Drawer from '../../../../components/tools/Drawer';
import { NavContext } from '../../../../components/context/StateContext';
import Modal from '../../../../components/tools/modal';

const subjectLocator = 'Physics';
const formLocator = 'Form Five';
const subjectLocatorLink = 'Physics';
const formLocatorLink = 'FormFive';

export const getStaticProps: GetStaticProps = async () => {
	const topicsFromServer = await prisma.topicReview.findMany({
		where: {
			published: true,
			subject: {
				subjectName: subjectLocator,
			},
			form: {
				formName: formLocator,
			},
		},
		select: {
			id: true,
			topicName: true,
			topicDefinition: true,
			form: {
				select: {
					formName: true,
				},
			},
			subject: {
				select: {
					subjectName: true,
				},
			},
		},
	});
	const topics = JSON.parse(JSON.stringify(topicsFromServer));

	const noteFromServer = await prisma.topicReview.findMany({
		take: 1,
		where: {
			published: true,
			subject: {
				subjectName: subjectLocator,
			},
			form: {
				formName: formLocator,
			},
		},
		select: {
			id: true,
			form: {
				select: {
					formName: true,
				},
			},
			subject: {
				select: {
					subjectName: true,
				},
			},
			topicName: true,
			topicDefinition: true,
			review: {
				where: {
					published: true,
				},
				select: {
					id: true,
					name: true,
				},
			},
		},
	});
	const note = JSON.parse(JSON.stringify(noteFromServer));

	return {
		props: {
			topics,
			note,
		},
		revalidate: 15,
	};
};

const Index = ({
    	topics,
    	note,
    }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);

	useEffect(() => {
		setNavActive('Review');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	if (topics.length < 1) {
		return (
			<div className={Styles.container}>
				<div className={Styles.innerContainer}>
					<div className={Styles.leftInnercontainerBody}></div>
					<div className={Styles.rightInnercontainerBody}>
						<h2>Topics will soon be available.</h2>
					</div>
				</div>
			</div>
		);
	}

	if (note[0]?.review == null || note[0]?.review == undefined) {
		return (
			<div className={Styles.notFound}>
				Quizez for ${note[0].topicName} topic will soon be available.
			</div>
		);
	}
	let truncateLimit = 12;
	function truncate(str: string) {
		return str.length > truncateLimit
			? str.slice(0, truncateLimit) + '...'
			: str;
	}

	//!mambo yanaanza

	return (
		<div className={Styles.container}>
			<Head>
				<title>{note[0].topicName}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content={note[0].topicDefinition} />
				<meta name='keywords' content={note[0].topicName} />
			</Head>
			<div className={Styles.innerContainer}>
				<div className={Styles.leftInnercontainerBody}>
					<div className={Styles.sticky}>
						<div className={Styles.topicHeader}>Topics list</div>
						<div className={Styles.titleList}>
							{topics.map((topic: topic) => (
								<div key={topic.id}>
									<Link
										passHref
										href={`/Review/${subjectLocatorLink}/${formLocatorLink}/${topic.id}`}>
										<a>
											<div
												key={topic.id}
												className={
													topic.id == note[0].id
														? `${Styles.topicTittle} ${Styles.Active}`
														: Styles.topicTittle
												}>
												{topic.topicName}
											</div>
										</a>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className={Styles.rightInnercontainerBody}>
					<div className={Styles.mobile}>
						<Drawer
							textHeader={'LIST OF TOPICS'}
							topic={topics}
							active={note[0].id}
							link={'Review'}
						/>
					</div>
					<div className={Styles.BodyHeader}>
						<div className={Styles.statusBar}>
							{note[0].subject.subjectName} <ChevronRightOutlinedIcon />{' '}
							{note[0].form.formName} <ChevronRightOutlinedIcon />{' '}
							{truncate(note[0].topicName)}
						</div>
					</div>
					<div className={Styles.BodyContent}>
						<div className={Styles.modal}>
							{note.map((topic: any) =>
								topic.review.map((review: review) => (
									<Modal
										key={review.id}
										name={review.name}
										id={review.id}
										subject={note[0].subject.subjectName}
										topic={note[0].topicName}
										form={note[0].form.formName}
									/>
								))
							)}
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
