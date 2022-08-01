import InputTextMui from '../../../../components/tools/InputTextMui';
import { form, subject } from '@prisma/client';
import { prisma } from '../../../../db/prisma';
import SelectMiu from '../../../../components/tools/SelectMui';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Styles from '../../../../styles/topic.module.scss';
import { ReactNode } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import FileUpload from '../../../../components/tools/FileUploadAny';
import toast, { Toaster } from 'react-hot-toast';
import { NavContext } from '../../../../components/context/StateContext';
import Progress from '../../../../components/tools/progressFileUpload';

import { getSession } from 'next-auth/react';
export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);
	if (!session) {
		return {
			redirect: {
				destination: `/Auth/SignIn?callbackUr=/`,
				permanent: false,
			},
		};
	} else {
		const userFromServer = await prisma.users.findFirst({
			where: {
				username: session.user.email,
			},
			select: {
				isAdmin: true,
			},
		});
		const userfound = await JSON.parse(JSON.stringify(userFromServer));

		if (!userfound.isAdmin) {
			return {
				redirect: {
					destination: '/',
					permanent: false,
				},
			};
		}
	}
	const formsFromServer: userData = await prisma.form.findMany({
		select: {
			id: true,
			formName: true,
		},
	});
	const forms = JSON.parse(JSON.stringify(formsFromServer));
	const subjectsFromServer = await prisma.subject.findMany({
		select: {
			id: true,
			subjectName: true,
		},
	});
	const subjects = JSON.parse(JSON.stringify(subjectsFromServer));
	let deactiveteImage = true;
	await prisma.$disconnect();
	return {
		props: {
			forms,
			subjects,
		},
	};
};

type userData = {
	id: number;
	formName: string;
}[];

type formData = {
	label: string;
	value: string;
}[];

const Create = ({
    	forms,
    	subjects,
    	deactiveteImage,
    }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { navActive, setNavActive, userData } = useContext(NavContext);

	useEffect(() => {
		setNavActive('Admin');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	const [details, setDetails] = useState({
		name: '',
		link: '',
		fileExtension: '',
		formId: '',
		subjectId: '',
	});

	const [formOptions, setFormOptions] = useState<formData>([]);
	const [subjectOptions, setSubjectOptions] = useState<formData>([]);
	const notify = (message: string) => toast(message);
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);
	const [image, setImage] = useState<string | Blob>('');
	const [clearData, setclearData] = useState(false);
	const [uploadData, setUploadData] = useState(0);
	const [showUpload, setShowUpload] = useState(false);
	const [ext, setExt] = useState('');

	useEffect(() => {
		let subjectFromServer: formData = [];
		subjects.map((subject: subject) => {
			subjectFromServer.push({
				label: subject.subjectName,
				value: subject.id as unknown as string,
			});
		});
		setSubjectOptions(subjectFromServer);

		let topicFromServer: formData = [];
		forms.map((form: form) => {
			topicFromServer.push({
				label: form.formName,
				value: form.id as unknown as string,
			});
		});
		setFormOptions(topicFromServer);

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	let handleTextInput = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		name: string
	) => {
		let value = event.currentTarget.value;
		setDetails({ ...details, name: value });
		console.log(details);
	};

	let handleSelectSubject = (value: string) => {
		setDetails({ ...details, subjectId: value });
	};

	let handleSelectForm = (value: string) => {
		setDetails({ ...details, formId: value });
	};

	let sendToDatabase = (location: string) => {
		let databaseData = {
			name: details.name,
			link: location,
			fileExtension: ext,
			formId: details.formId,
			subjectId: details.subjectId,
			userId: userData.id,
		};

		console.log(databaseData);

		axios({
			method: 'post',
			url: 'http://localhost:3000/api/addNotesDownloadable',
			data: databaseData,
		})
			.then(function (response) {
				// handle success
				setDetails({
					fileExtension: '',
					name: '',
					link: '',
					formId: '',
					subjectId: '',
				});

				setImage('');
				setShowUpload(false);
				setUploadData(0);
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

	let handleCreateDownloadable = () => {
		if (details.name != '' && details.formId != '' && details.subjectId != '') {
			//!Call save to database
			if (image != '') {
				uploadToServer();
			} else {
				notifyError('No file detected. Attach file.');
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
		console.log(details);
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

	return (
		<div className={Styles.container}>
			<Toaster position='top-center' reverseOrder={false} />
			<div className={Styles.innerContainer}>
				<div className={Styles.rightInnercontainerBody}>
					<div className={Styles.mainMain}>
						<div className={Styles.formHeader}>Downloadable Details.</div>
						<InputTextMui
							label='File Name'
							content={details.name}
							name='name'
							handleChange={handleTextInput}
						/>
						<FileUpload
							deactiveteImage={deactiveteImage}
							clear={clearData}
							clearData={clearDataProcess}
							uploadToServer={uploadForServer}
							image={''}
							extension={(value) => {
								setExt(value);
								console.log(value);
							}}
						/>
					</div>
					<div className={Styles.mainLeft}>
						<div className={Styles.formHeader}>Downloadable Relations.</div>
						<SelectMiu
							displayLabel='Select Subject'
							show={true}
							forms={subjectOptions}
							handlechange={handleSelectSubject}
							value={details.subjectId}
						/>
						<SelectMiu
							displayLabel='Select Form'
							show={true}
							forms={formOptions}
							handlechange={handleSelectForm}
							value={details.formId}
						/>
					</div>
				</div>
				{showUpload && <Progress data={uploadData} />}
				{showUpload ? (
					<div className={Styles.imageSelect}>Please wait...</div>
				) : (
					<div
						onClick={handleCreateDownloadable}
						className={Styles.imageSelect}>
						Create Subject
					</div>
				)}
			</div>
		</div>
	);
};

export default Create;

//*Removing default search bar :)
Create.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};
