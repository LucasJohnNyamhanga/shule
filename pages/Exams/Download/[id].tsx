import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import { prisma } from '../../../db/prisma';
import { examType, notesDownloadable } from '@prisma/client';
import React, { useContext, useEffect, useState } from 'react';
import Styles from '../../../styles/notesDisplay.module.scss';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Head from 'next/head';
import { NavContext } from '../../../components/context/StateContext';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';

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
			description: true,
			year: true,
			examDownloadable: {
				select: {
					name: true,
					link: true,
					id: true,
					fileExtension: true,
				},
			},
		},
	});

	const downloads = JSON.parse(JSON.stringify(examServer));

	return {
		props: {
			downloads,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	// ...
	const examServer = await prisma.exam.findMany({
		where: {
			published: true,
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
	downloads,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const notify = (message: string) => toast(message);
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);
	const { navActive, setNavActive, userData } = useContext(NavContext);
	const { data: session, status } = useSession();
	const { push, asPath } = useRouter();

	useEffect(() => {
		setNavActive('Exams');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	let handleDownload = (link: string) => {
		if (session) {
			push(`/Pricing?callbackUrl=${asPath}`);
			//FileSaver.saveAs(link, link.replace(/(.*)\//g, ''));
		} else {
			push(`/Auth/SignIn?callbackUrl=${asPath}`);
		}
	};

	//!mambo yanaanza

	return (
		<div className={Styles.container}>
			<Toaster position='bottom-left' />
			<Head>
				<title>{`${subjectLocator} ${formLocator} Notes Download`}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta
					name='description'
					content={`${subjectLocator} ${subjectLocator} Notes Download`}
				/>
				<meta
					name='keywords'
					content={`${subjectLocator} ${subjectLocator} Notes Download`}
				/>
			</Head>
			<div className={Styles.innerContainer}>
				<div className={Styles.rightInnercontainerBody}>
					<div className={Styles.BodyHeader}>
						<div className={Styles.statusBar}>
							{subjectLocator} <ChevronRightOutlinedIcon /> {formLocator}{' '}
							<ChevronRightOutlinedIcon /> {`Downloads`}
						</div>
					</div>
					<div
						className={
							Styles.downloadCenterHeader
						}>{`Download Center For ${downloads.description} ${downloads.year}.`}</div>
					<div className={Styles.BodyContent}>
						<div>
							{`Following ${downloads.length > 1 ? `Files  are` : `File is`}
							available for download.`}
						</div>
						<div>
							{downloads.examDownloadable.map((download: notesDownloadable) => (
								<div key={download.id} className={Styles.downloadCard}>
									<div className={Styles.child1}>
										<span>Name:</span> {download.name}
									</div>
									<div className={Styles.child2}>
										<span>Format:</span> {download.fileExtension.toUpperCase()}
									</div>

									<div
										className={Styles.download}
										onClick={() => {
											handleDownload(download.link);
										}}>
										Download
									</div>
								</div>
							))}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
