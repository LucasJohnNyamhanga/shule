import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import { prisma } from '../../../../db/prisma';
import { review, topic, topicReview } from '@prisma/client';
import React, { useContext, useEffect } from 'react';
import Styles from '../../../../styles/reviewDisplay.module.scss';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import parse from 'html-react-parser';
import Head from 'next/head';
import Link from 'next/link';
import Drawer from '../../../../components/tools/Drawer';
import { NavContext } from '../../../../components/context/StateContext';
import Modal from '../../../../components/tools/modal';

const subjectLocator = 'Physics';
const formLocator = 'Form Four';
const subjectLocatorLink = 'Physics';
const formLocatorLink = 'FormFour';

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id;
	let Id = parseInt(String(id));
	// ...
	const topicData = await prisma.topicReview.findUnique({
		where: {
			id: Id,
		},
		select: {
			id: true,
			topicName: true,
			topicDefinition: true,
			subject: {
				select: {
					subjectName: true,
				},
			},
			form: {
				select: {
					formName: true,
				},
			},
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

	const thisTopicData = JSON.parse(JSON.stringify(topicData));

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
			subject: {
				select: {
					subjectName: true,
				},
			},
			form: {
				select: {
					formName: true,
				},
			},
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
	const topics = JSON.parse(JSON.stringify(topicsFromServer));

	return {
		props: {
			topics,
			thisTopicData,
		},
		revalidate: 15,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	// ...
	const notesServer = await prisma.topicReview.findMany({
		select: {
			id: true,
		},
	});

	type dataNote = {
		id: number;
	};
	const notesData = JSON.parse(JSON.stringify(notesServer));
	const paths = notesData.map((note: dataNote) => {
		let id = String(note.id);
		return {
			params: {
				id: `${id}`,
			},
		};
	});
	return {
		paths,
		fallback: 'blocking',
	};
};

const Index = ({
    	topics,
    	thisTopicData,
    }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);

	useEffect(() => {
		setNavActive('Review');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	if (thisTopicData?.review == null || thisTopicData?.review == 'undefined') {
		return (
			<div className={Styles.notFound}>
				Reviews for ${thisTopicData?.topicName} topic will be available soon.
			</div>
		);
	}

	type dataTopic = {
		id: number;
		topicName: string;
		topicDefinition: string;
		subject: {
			subjectName: string;
		};
		form: {
			formName: string;
		};
	};

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
				<title>{thisTopicData.topicName}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content={thisTopicData.topicDefinition} />
				{/* //!add keywords */}
				<meta name='keywords' content={thisTopicData.topicName} />
			</Head>
			<div className={Styles.innerContainer}>
				<div className={Styles.leftInnercontainerBody}>
					<div className={Styles.sticky}>
						<div className={Styles.topicHeader}>Topics list</div>

						<div className={Styles.titleList}>
							{topics.map((topic: dataTopic) => (
								<div key={topic.id}>
									<Link
										passHref
										href={`/Review/${subjectLocatorLink}/${formLocatorLink}/${topic.id}`}>
										<a>
											<div
												key={topic.id}
												className={
													topic.id == thisTopicData.id
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
							active={thisTopicData.id}
							link={'Review'}
						/>
					</div>
					<div className={Styles.BodyHeader}>
						<div className={Styles.statusBar}>
							{thisTopicData.subject.subjectName} <ChevronRightOutlinedIcon />{' '}
							{thisTopicData.form.formName} <ChevronRightOutlinedIcon />{' '}
							{truncate(thisTopicData.topicName)}
						</div>
					</div>
					<div className={Styles.BodyContent}>
						<div className={Styles.modal}>
							{thisTopicData.review.map((review: review) => (
								<Modal
									key={review.id}
									name={review.name}
									id={review.id}
									subject={thisTopicData.subject.subjectName}
									topic={thisTopicData.topicName}
									form={thisTopicData.form.formName}
								/>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
