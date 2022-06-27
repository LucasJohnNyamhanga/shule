import { useRouter } from 'next/router';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { exam, examType, form, subject, topic } from '@prisma/client';
import Styles from '../../../../../styles/notesMaker.module.scss';
import SelectMiu from '../../../../../components/tools/SelectMui';
import toast, { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import axios from 'axios';
import { NavContext } from '../../../../../components/context/StateContext';
import { prisma } from '../../../../../db/prisma';
import InputTextMui from '../../../../../components/tools/InputTextMui';
import FileUpload from '../../../../../components/tools/FileUploadAny';
import Progress from '../../../../../components/tools/progressFileUpload';

//load when browser kicks in, on page load
const CkEditor = dynamic(() => import('../../../../../components/tools/Ck'), {
	ssr: false,
});

export const getServerSideProps: GetServerSideProps = async (context) => {
	let id = context.params?.id as string;
	let Id = parseInt(id);

	const examServer = await prisma.examDownloadable.findUnique({
		where: {
			id: Id,
		},
		select: {
			id: true,
			name: true,
			link: true,
			fileExtension: true,
			examId: true,
			exam: {
				select: {
					id: true,
					description: true,
					examType: {
						select: {
							id: true,
							name: true,
							formId: true,
							subjectId: true,
						},
					},
				},
			},
		},
	});

	const exam = JSON.parse(JSON.stringify(examServer));

	const formsFromServer = await prisma.formExams.findMany({
		select: {
			id: true,
			formName: true,
		},
	});
	const forms = JSON.parse(JSON.stringify(formsFromServer));

	const subjectsFromServer = await prisma.subjectExams.findMany({
		select: {
			id: true,
			subjectName: true,
		},
	});
	const subjects = JSON.parse(JSON.stringify(subjectsFromServer));

	await prisma.$disconnect();
	return {
		props: {
			exam,
			forms,
			subjects,
		},
	};
};

type formData = {
	label: string;
	value: string;
}[];

const Notes = ({
	exam,
	forms,
	subjects,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);

	const router = useRouter();

	//!delay redirect
	function delay(ms: number) {
		return new Promise((resolve) => setTimeout(resolve, ms));
	}

	let delayRedirect = async () => {
		await new Promise((f) =>
			setTimeout(() => {
				router.back();
			}, 1000)
		);
	};

	const [image, setImage] = useState<string | Blob>('');
	const [clearData, setclearData] = useState(false);
	const [check, setCheck] = useState(true);
	const [uploadData, setUploadData] = useState(0);
	const [showUpload, setShowUpload] = useState(false);
	const [ext, setExt] = useState('');
	const [formOptions, setFormOptions] = useState<formData>([]);
	const [subjectOptions, setSubjectOptions] = useState<formData>([]);
	const [topicOptions, setTopicOptions] = useState<formData>([]);
	const [topicOptionsExam, setTopicOptionsExam] = useState<formData>([]);
	const [change, setChange] = useState(0);
	const [hideShow, setHideShow] = useState(false);
	const [hideShowExam, setHideShowExam] = useState(false);
	const [examDetails, setExamDetails] = useState({
		formId: '',
		subjectId: '',
		examTypeId: '',
	});

	const [examSelectValue, setExamSelectValue] = useState({
		name: '',
		link: '',
		fileExtension: '',
		examId: '',
	});

	const notify = (message: string) => toast(message);
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);

	useEffect(() => {
		setNavActive('Admin');

		let subjectFromServer: formData = [];
		subjects.map((subject: subject) => {
			subjectFromServer.push({
				label: subject.subjectName,
				value: subject.id as unknown as string,
			});
		});
		setSubjectOptions(subjectFromServer);

		let formFromServer: formData = [];
		forms.map((form: form) => {
			formFromServer.push({
				label: form.formName,
				value: `${form.id}`,
			});
		});
		setFormOptions(formFromServer);

		setExamDetails({
			formId: exam.exam.examType.formId,
			subjectId: exam.exam.examType.subjectId,
			examTypeId: exam.exam.examType.id,
		});
		setExamSelectValue({
			name: exam.name,
			link: exam.link,
			fileExtension: exam.fileExtension,
			examId: exam.examId,
		});

		if (check) {
			preloader();
			setCheck(false);
		}

		setHideShow(true);
		setHideShowExam(true);

		if (!check) {
			if (examDetails.formId != '' && examDetails.subjectId != '') {
				retriaveExamTypeData();
			}

			if (
				examDetails.formId != '' &&
				examDetails.subjectId != '' &&
				examDetails.examTypeId != ''
			) {
				retriaveExamData();
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive, change]);

	let retriaveExamTypeData = () => {
		console.log('retriaveExamTypeData called');
		axios({
			method: 'post',
			url: 'http://localhost:3000/api/examType',
			data: examDetails,
		})
			.then(function (response) {
				const exams: [] = JSON.parse(JSON.stringify(response.data));
				// handle success
				if (exams.length > 0) {
					let examFromServer: formData = [];
					exams.map((exam: examType) => {
						examFromServer.push({
							label: exam.name,
							value: exam.id as unknown as string,
						});
					});
					setTopicOptions(examFromServer);
					setHideShow(true);
				} else {
					notifyError('No topics available for your selection.');
					setHideShow(false);
					setHideShowExam(false);
				}
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Something went wrong.');
				setHideShow(false);
				setHideShowExam(false);
			})
			.then(function () {
				// always executed
			});
	};

	const preloader = () => {
		const examDetails = {
			formId: exam.exam.examType.formId,
			subjectId: exam.exam.examType.subjectId,
			examTypeId: exam.exam.examType.id,
		};

		console.log(examDetails);

		axios({
			method: 'post',
			url: 'http://localhost:3000/api/examList',
			data: examDetails,
		})
			.then(function (response) {
				const exams = JSON.parse(JSON.stringify(response.data));
				// handle success
				if (exams.exam.length > 0) {
					let examFromServer: formData = [];
					exams.exam.map((exam: exam) => {
						examFromServer.push({
							label: `${exam.description} ${exam.year}`,
							value: exam.id as unknown as string,
						});
					});

					setTopicOptionsExam(examFromServer);
				} else {
					notifyError('No topics available for your selection.');
					setHideShowExam(false);
				}
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Something went wrong.');
				setHideShowExam(false);
			})
			.then(function () {
				// always executed
			});

		axios({
			method: 'post',
			url: 'http://localhost:3000/api/examType',
			data: examDetails,
		})
			.then(function (response) {
				const exams: [] = JSON.parse(JSON.stringify(response.data));
				// handle success
				if (exams.length > 0) {
					let examFromServer: formData = [];
					exams.map((exam: examType) => {
						examFromServer.push({
							label: exam.name,
							value: exam.id as unknown as string,
						});
					});
					setTopicOptions(examFromServer);
					setHideShow(true);
				} else {
					notifyError('No topics available for your selection.');
					setHideShow(false);
					setHideShowExam(false);
				}
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Something went wrong.');
				setHideShow(false);
				setHideShowExam(false);
			})
			.then(function () {
				// always executed
			});
	};

	let retriaveExamData = () => {
		console.log('retriaveExamData called');
		axios({
			method: 'post',
			url: 'http://localhost:3000/api/examList',
			data: examDetails,
		})
			.then(function (response) {
				const exams = JSON.parse(JSON.stringify(response.data));
				// handle success
				if (exams.exam.length > 0) {
					let examFromServer: formData = [];
					exams.exam.map((exam: exam) => {
						examFromServer.push({
							label: `${exam.description} ${exam.year}`,
							value: exam.id as unknown as string,
						});
					});

					setTopicOptionsExam(examFromServer);
					if (hideShow) {
						setHideShowExam(true);
					} else {
						setHideShowExam(false);
					}
				} else {
					notifyError('No topics available for your selection.');
					setHideShowExam(false);
				}
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Something went wrong.');
				setHideShowExam(false);
			})
			.then(function () {
				// always executed
			});
	};

	let handleSelectSubject = (value: string) => {
		setExamDetails({ ...examDetails, subjectId: value, examTypeId: '' });
		setChange(change + 1);
	};

	let handleSelectForm = (value: string) => {
		setExamDetails({ ...examDetails, formId: value, examTypeId: '' });
		setChange(change + 1);
		console.log(value);
	};

	let handleSelectTopic = (value: string) => {
		setExamDetails({ ...examDetails, examTypeId: value });
		setExamSelectValue({ ...examSelectValue, examId: '' });
		setChange(change + 1);
	};

	let handleSelectExam = (value: string) => {
		setExamSelectValue({ ...examSelectValue, examId: value });
	};

	let sendToDatabase = (location: string) => {
		let databaseData = {
			id: exam.id,
			name: examSelectValue.name,
			link: location != '' ? location : exam.link,
			fileExtension: location != '' ? ext : exam.fileExtension,
			examId: examSelectValue.examId,
		};

		axios({
			method: 'post',
			url: 'http://localhost:3000/api/updateExamDownloadable',
			data: databaseData,
		})
			.then(function (response) {
				// handle success
				setExamDetails({
					formId: '',
					subjectId: '',
					examTypeId: '',
				});

				setExamSelectValue({
					name: '',
					link: '',
					fileExtension: '',
					examId: '',
				});

				setImage('');
				setShowUpload(false);
				setUploadData(0);
				if (response.data.type == 'success') {
					notifySuccess(response.data.message);
				} else {
					notifyError(response.data.message);
				}
				delayRedirect();
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};

	let handleCreateDownloadable = () => {
		if (examSelectValue.name != '' && examSelectValue.examId != '') {
			//!Call save to database
			if (image != '') {
				uploadToServer();
			} else {
				notify('No file change detected. Sytem file will be used!.');
				sendToDatabase('');
			}
		} else {
			//!return error
			notifyError('Fill in all fields including topic relations.');
		}
	};

	let clearDataProcess = () => {
		setclearData(false);
	};

	let uploadForServer = (image: string | Blob) => {
		setImage(image);
		//!TO BE CALLED FOR UPLOAD
		// uploadToServer();
	};

	//! for uploading
	const uploadToServer = async () => {
		if (typeof image != 'string') {
			setShowUpload(true);
			const body = new FormData();
			body.append('file', image);
			axios
				.post('/api/upload', body, {
					onUploadProgress: (progressEvent) => {
						// console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + "%");
						setUploadData(
							Math.round((progressEvent.loaded / progressEvent.total) * 100)
						);
					},
				})
				.then(
					(res) => {
						let location = res.data.file;
						setclearData(true);
						clearDataProcess();
						sendToDatabase(location);
					},
					(err) => {
						//some error
					}
				);
		} else {
			notifyError('No file selected');
		}
	};

	let handleOnReady = () => {
		console.log('Editor is ready');
	};

	let handleTextInput = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		name: string
	) => {
		let value = event.currentTarget.value;
		setExamSelectValue({ ...examSelectValue, name: value });
	};

	return (
		<div className={Styles.container}>
			<Toaster position='bottom-left' />
			<div className={Styles.innerContainer}>
				<div className={Styles.content}>
					<div className={Styles.mainContent}>
						<InputTextMui
							label='Exam Name'
							content={examSelectValue.name}
							name='name'
							handleChange={handleTextInput}
						/>
						<FileUpload
							deactiveteImage={false}
							clear={clearData}
							clearData={clearDataProcess}
							uploadToServer={uploadForServer}
							image={`${exam.link.replace(/(.*)\//g, '')}`}
							extension={(value) => {
								setExt(value);
								console.log(value);
							}}
						/>
					</div>
					<div className={Styles.controlContent}>
						<SelectMiu
							show={true}
							displayLabel='Select Subject'
							forms={subjectOptions}
							handlechange={handleSelectSubject}
							value={examDetails.subjectId}
						/>
						<SelectMiu
							show={true}
							displayLabel='Select Form'
							forms={formOptions}
							handlechange={handleSelectForm}
							value={examDetails.formId}
						/>
						{hideShow && (
							<SelectMiu
								show={true}
								displayLabel='Select Exam Type'
								forms={topicOptions}
								handlechange={handleSelectTopic}
								value={examDetails.examTypeId}
							/>
						)}
						{hideShowExam && (
							<SelectMiu
								show={true}
								displayLabel='Select Exam'
								forms={topicOptionsExam}
								handlechange={handleSelectExam}
								value={examSelectValue.examId}
							/>
						)}
					</div>
				</div>
				<div>
					{showUpload && <Progress data={uploadData} />}
					{showUpload ? (
						<div className={Styles.imageSelect}>Please wait...</div>
					) : (
						<div
							onClick={handleCreateDownloadable}
							className={Styles.imageSelect}>
							Update Downloadable
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Notes;

//*Removing default search bar :)
Notes.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};
