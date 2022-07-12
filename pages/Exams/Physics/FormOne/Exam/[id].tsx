import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import { prisma } from '../../../../../db/prisma';
import { examType } from '@prisma/client';
import React, { useContext, useEffect, useState } from 'react';
import Styles from '../../../../../styles/reviewDisplay.module.scss';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Head from 'next/head';
import { NavContext } from '../../../../../components/context/StateContext';
import useMediaQuery from '@mui/material/useMediaQuery';
import Link from 'next/link';

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
			exam: true,
			examType: {
				select: {
					name: true,
				},
			},
			examDownloadable: {
				where: {
					published: true,
				},
				select: {
					id: true,
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
		fallback: 'blocking',
	};
};

type tableKey = {
	keys: string[];
};

const Index = ({
	thisexam,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);
	const matches300 = useMediaQuery('(min-width:345px)');
	const [keyInTable, setKeyInTable] = useState<tableKey>({
		keys: [],
	});

	const [hideContent, setHideContent] = useState(false);

	useEffect(() => {
		setNavActive('Exams');
	}, [navActive]);

	if (thisexam == 'undefined') {
		return (
			<div className={Styles.notFound}>
				Cant find Exam, will be resolved soon.
			</div>
		);
	}

	useEffect(() => {
		setNavActive('Exams');
		console.log(thisexam.hasAnswers);
		if (thisexam.hasAnswers) {
			setHideContent(true);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	function truncateCustom(str: string, size: number) {
		return str.length > size ? str.slice(0, size) + '...' : str;
	}

	//!mambo yanaanza

	let truncateLimit = 20;
	function truncate(str: string) {
		return str.length > truncateLimit
			? str.slice(0, truncateLimit) + '...'
			: str;
	}

	let showMore = () => {
		setHideContent(!hideContent);
	};

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
				<div className={Styles.rightInnercontainerBody}>
					{/* <div className={Styles.mobile}>
						
					</div> */}
					<div className={Styles.BodyHeader}>
						<div className={Styles.statusBar}>
							{subjectLocator} <ChevronRightOutlinedIcon /> {formLocator}{' '}
							<ChevronRightOutlinedIcon />{' '}
							{matches300
								? truncate(thisexam.examType.name)
								: truncateCustom(thisexam.examType.name, 10)}
						</div>
						{thisexam.examDownloadable.length > 0 ? (
							<Link href={`/Exams/Download/${thisexam.id}`} passHref>
								<a>
									<div className={Styles.download}>Download Notes</div>
								</a>
							</Link>
						) : (
							''
						)}
					</div>
					<div className={Styles.BodyContent}>
						<div className={hideContent ? Styles.hiddenExam : ''}>
							<div
								className='ckContent'
								dangerouslySetInnerHTML={{ __html: thisexam.exam }}
							/>
						</div>
						{hideContent && (
							<div className={Styles.showMoreContainer}>
								<div onClick={showMore} className={Styles.more}>
									Show More
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
