import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import { prisma } from '../../../../db/prisma';
import { exam, examType, review, topic, topicReview } from '@prisma/client';
import React, { useContext, useEffect, useState } from 'react';
import Styles from '../../../../styles/reviewDisplay.module.scss';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import parse from 'html-react-parser';
import Head from 'next/head';
import Link from 'next/link';
import Drawer from '../../../../components/tools/DrawerExam';
import { NavContext } from '../../../../components/context/StateContext';
import Modal from '../../../../components/tools/modal';
import Table from '../../../../components/tools/Table';

const subjectLocator = 'Physics';
const formLocator = 'Form Four';
const subjectLocatorLink = 'Physics';
const formLocatorLink = 'FormFour';

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id;
	let Id = parseInt(String(id));
	// ...
	const examTypeServer = await prisma.examType.findUnique({
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
				where: {
					published: true,
				},
				select: {
					id: true,
					description: true,
					year: true,
					hasAnswers: true,
				},
			},
		},
	});

	const thisexamType = JSON.parse(JSON.stringify(examTypeServer));

	const examTypeAllServer = await prisma.examType.findMany({
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
				where: {
					published: true,
				},
				select: {
					id: true,
					description: true,
				},
			},
		},
	});
	const examTypeAll = JSON.parse(JSON.stringify(examTypeAllServer));

	return {
		props: {
			examTypeAll,
			thisexamType,
		},
		revalidate: 15,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	// ...
	const examTypeServer = await prisma.examType.findMany({
		select: {
			id: true,
			published: true,
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
		fallback: 'blocking',
	};
};

type tableKey = {
	keys: string[];
};

const Index = ({
    	examTypeAll,
    	thisexamType,
    }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);

	const [keyInTable, setKeyInTable] = useState<tableKey>({
		keys: [],
	});

	useEffect(() => {
		setNavActive('Exams');
	}, [navActive]);

	if (examTypeAll.length == 0) {
		return (
			<div className={Styles.notFound}>
				<h2>
					Quiz for ${subjectLocator} ${formLocator} topic will be available
					soon.
				</h2>
			</div>
		);
	}

	if (thisexamType?.exam == null) {
		return (
			<div className={Styles.notFound}>
				<h2>Quiz for ${thisexamType.name} topic will be available soon.</h2>
			</div>
		);
	}

	useEffect(() => {
		setNavActive('Exams');

		let listKey: string[] = [];

		for (const exam of thisexamType.exam) {
			listKey = Object.keys(exam);
			break;
		}
		setKeyInTable({ keys: listKey });

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive, thisexamType.exam]);

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
				<title>{thisexamType.name}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content={thisexamType.definition} />
				{/* //!add keywords */}
				<meta name='keywords' content={thisexamType.name} />
			</Head>
			<div className={Styles.innerContainer}>
				<div className={Styles.leftInnercontainerBody}>
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
												key={topic.id + 200}
												className={
													topic.id == thisexamType.id
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
						<Drawer
							textHeader={'Exam Category List'}
							topic={examTypeAll}
							active={thisexamType.id}
							link={'Exams'}
						/>
					</div>
					<div className={Styles.BodyHeader}>
						<div className={Styles.statusBar}>
							{thisexamType.subjectExams.subjectName}{' '}
							<ChevronRightOutlinedIcon /> {thisexamType.formExams.formName}{' '}
							<ChevronRightOutlinedIcon /> {truncate(thisexamType.name)}
						</div>
					</div>

					<div className={Styles.BodyContent}>
						<div className={Styles.conteinerTable}>
							<Table
								form={formLocatorLink}
								subject={subjectLocatorLink}
								header={keyInTable.keys}
								body={thisexamType.exam}
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
