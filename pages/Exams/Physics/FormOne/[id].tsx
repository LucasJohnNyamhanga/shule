import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import { prisma } from '../../../../db/prisma';
import { exam, examType, review, topic, topicReview } from '@prisma/client';
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
const formLocator = 'Form One';
const subjectLocatorLink = 'Physics';
const formLocatorLink = 'FormOne';

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id;
	let Id = parseInt(String(id));
	// ...
	const topicData = await prisma.examType.findUnique({
		where: {
			id: Id,
		},
		select: {
			id: true,
			name: true,
			definition: true,
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
			exam: {
				select: {
					id: true,
					description: true,
				},
			},
		},
	});

	const thisTopicData = JSON.parse(JSON.stringify(topicData));

	const topicsFromServer = await prisma.examType.findMany({
		where: {
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
			exam: {
				select: {
					id: true,
					description: true,
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
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	// ...
	const examTypeServer = await prisma.examType.findMany({
		select: {
			id: true,
		},
	});
	const examType = JSON.parse(JSON.stringify(examTypeServer));

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

const Index = ({
	topics,
	thisTopicData,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);

	useEffect(() => {
		setNavActive('Exams');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	if (thisTopicData.exam == null || thisTopicData.exam == 'undefined') {
		return (
			<div className={Styles.notFound}>
				Reviews for ${thisTopicData.topicName} topic will be available soon.
			</div>
		);
	}

	//!mambo yanaanza

	return (
		<div className={Styles.container}>
			<Head>
				<title>{thisTopicData.name}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content={thisTopicData.definition} />
				{/* //!add keywords */}
				<meta name='keywords' content={thisTopicData.name} />
			</Head>
			<div className={Styles.innerContainer}>
				<div className={Styles.leftInnercontainerBody}>
					<div className={Styles.sticky}>
						<div className={Styles.topicHeader}>Topics list</div>

						<div className={Styles.titleList}>
							{topics.map((topic: examType) => (
								<div key={topic.id}>
									<Link
										passHref
										href={`/Exams/${subjectLocatorLink}/${formLocatorLink}/${topic.id}`}>
										<a>
											<div
												key={topic.id}
												className={
													topic.id == thisTopicData.id
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
				</div>
				<div className={Styles.rightInnercontainerBody}>
					<div className={Styles.mobile}>
						{/* <Drawer
							textHeader={'LIST OF TOPICS'}
							topic={topics}
							active={thisTopicData.id}
							link={'Review'}
						/> */}
					</div>
					<div className={Styles.BodyHeader}>
						{thisTopicData.subjectExams.subjectName}{' '}
						<ChevronRightOutlinedIcon /> {thisTopicData.formExams.formName}{' '}
						<ChevronRightOutlinedIcon /> {thisTopicData.name}
					</div>
					<div className={Styles.BodyContent}>
						<div className={Styles.modal}>
							{thisTopicData.exam.map((type: examType) => (
								<Modal
									key={type.id}
									name={type.name}
									id={type.id}
									subject={thisTopicData.subjectExams.subjectName}
									topic={thisTopicData.name}
									form={thisTopicData.formExams.formName}
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
