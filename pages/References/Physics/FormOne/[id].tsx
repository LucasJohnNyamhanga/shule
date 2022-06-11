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
const formLocator = 'Form One';
const subjectLocatorLink = 'Physics';
const formLocatorLink = 'FormOne';

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
		fallback: false,
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
						{reference.subjectReference.subjectName}{' '}
						<ChevronRightOutlinedIcon /> {reference.name}
					</div>
					<div className={Styles.BodyContent}>
						{reference.isPdf ? (
							<PdfViewer url={reference.data} />
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
	);
};

export default Index;
