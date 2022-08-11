import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import { prisma } from '../../../../db/prisma';
import { reference } from '@prisma/client';
import React, { useContext, useEffect } from 'react';
import Styles from '../../../../styles/reviewDisplay.module.scss';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Head from 'next/head';
import { NavContext } from '../../../../components/context/StateContext';

const subjectLocator = 'Physics';
import PdfViewer from '../../../../components/tools/PdfViewer';
import Link from 'next/link';
const formLocator = 'Form Four';
const subjectLocatorLink = 'Physics';
const formLocatorLink = 'FormFour';

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id;
	let Id = parseInt(String(id));
	// ...
	const referenceServer = await prisma.reference.findUnique({
		where: {
			id: Id,
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
			data: true,
		},
	});

	const reference = JSON.parse(JSON.stringify(referenceServer));

	return {
		props: {
			reference,
		},
		revalidate: 15,
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	// ...
	const referencesServer = await prisma.reference.findMany({
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
		},
	});
	const references = JSON.parse(JSON.stringify(referencesServer));

	const paths = references.map((ref: reference) => {
		let id = String(ref.id);
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
    	reference,
    }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);

	useEffect(() => {
		setNavActive('References');

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	//!mambo yanaanza

	return (
		<div className={Styles.container}>
			<Head>
				<title>{reference.name}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content={reference.description} />
				{/* //!add keywords */}
				<meta name='keywords' content={reference.description} />
			</Head>
			<div className={Styles.innerContainer}>
				<div className={Styles.rightInnercontainerBody}>
					<div className={Styles.BodyHeader}>
						<div className={Styles.statusBar}>
							{reference.subjectReference.subjectName}{' '}
							<ChevronRightOutlinedIcon /> {reference.name}
						</div>
						{reference.isPdf && (
							<>
								<Link href={`/References/Download?id=${reference.id}`} passHref>
									<a>
										<div className={Styles.download}>Download</div>
									</a>
								</Link>
							</>
						)}
					</div>
					<div className={Styles.BodyContent}>
						{reference.isPdf && (
							<div className={Styles.headerHead}>
								<div className={Styles.header}>Book Description</div>
								<div className={Styles.description}>
									{reference.description}
								</div>
							</div>
						)}
						<div>
							{reference.isPdf ? (
								<PdfViewer url={`/min.pdf`} />
							) : (
								<div
									className='ckContent'
									dangerouslySetInnerHTML={{ __html: reference.data }}
								/>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
