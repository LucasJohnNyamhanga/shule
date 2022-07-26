import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
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
import FileSaver from 'file-saver';
import axios from 'axios';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const id = context.query.id!.toString();
	let Id = parseInt(String(id));
	// ...
	const examServer = await prisma.exam.findUnique({
		where: {
			id: Id,
		},
		select: {
			description: true,
			year: true,
			hasAnswers: true,
			examDownloadable: {
				select: {
					name: true,
					link: true,
					id: true,
					fileExtension: true,
				},
			},
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

	const downloads = JSON.parse(JSON.stringify(examServer));

	return {
		props: {
			downloads,
		},
	};
};

type tableKey = {
	keys: string[];
};

const Index = ({
    	downloads,
    }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
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
		if (userData.id != '') {
			checkUser(link);
		} else {
			push(`/Auth/SignIn?callbackUrl=${asPath}`);
		}
	};

	let checkUser = async (link: string) => {
		let data = { username: userData.userName };
		axios
			.post('http://localhost:3000/api/getUser', data)
			.then(function (response) {
				//responce
				const userData = JSON.parse(JSON.stringify(response.data));

				if (downloads.hasAnswers) {
					userData.vifurushi.find(
						({ name, value }: { name: string; value: number }) => {
							if (name === 'examsSolvedDownload') {
								if (value > 0) {
									FileSaver.saveAs(link, link.replace(/(.*)\//g, ''));

									//!call decrement code
									decrementData({
										name: 'examsSolvedDownload',
										id: userData.id,
									});
								} else {
									push(`/Pricing?callbackUrl=${asPath}`);
								}
							}
						}
					);
				} else {
					userData.vifurushi.find(
						({ name, value }: { name: string; value: number }) => {
							if (name === 'examsUnsolvedDownload') {
								if (value > 0) {
									FileSaver.saveAs(link, link.replace(/(.*)\//g, ''));

									//!call decrement code
									decrementData({
										name: 'examsUnsolvedDownload',
										id: userData.id,
									});
								} else {
									push(`/Pricing?callbackUrl=${asPath}`);
								}
							}
						}
					);
				}
			})
			.catch(function (error) {
				// handle error
				console.log('Something went wrong');
			});
	};

	let decrementData = (databaseData: { name: string; id: string }) => {
		axios({
			method: 'post',
			url: 'http://localhost:3000/api/updateKifurushiUse',
			data: databaseData,
		})
			.then(function (response) {
				// handle success

				if (response.data.type == 'success') {
					notifySuccess(response.data.message);
				} else {
					notifyError(response.data.message);
				}
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};

	//!mambo yanaanza

	return (
		<div className={Styles.container}>
			<Toaster position='bottom-left' />
			<div className={Styles.innerContainer}>
				<div className={Styles.rightInnercontainerBody}>
					<div className={Styles.BodyHeader}>
						<div className={Styles.statusBar}>
							{downloads.examType.subjectExams.subjectName}{' '}
							<ChevronRightOutlinedIcon />{' '}
							{downloads.examType.formExams.formName}{' '}
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
