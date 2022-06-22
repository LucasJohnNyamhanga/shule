import InputTextMui from '../../../../components/tools/InputTextMui';
import { type } from 'os';
import { form, subject } from '@prisma/client';
import { prisma } from '../../../../db/prisma';
import SelectMiu from '../../../../components/tools/SelectMui';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Styles from '../../../../styles/topic.module.scss';
import { ReactNode } from 'react';
import SnackBar from '../../../../components/tools/SnackBar';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import FileUpload from '../../../../components/tools/FileUpload';
import toast, { Toaster } from 'react-hot-toast';
import { NavContext } from '../../../../components/context/StateContext';
import Progress from '../../../../components/tools/progressFileUpload';

export const getServerSideProps: GetServerSideProps = async () => {
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
	const { navActive, setNavActive } = useContext(NavContext);

	useEffect(() => {
		setNavActive('Admin');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	const [subjectDetails, setsubjectDetails] = useState({
		topicName: '',
		topicDefinition: '',
		subjectId: '',
		formId: '',
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
		setsubjectDetails({ ...subjectDetails, [name]: value });
		console.log(subjectDetails);
	};

	let handleSelectSubject = (value: string) => {
		setsubjectDetails({ ...subjectDetails, subjectId: value });
	};

	let handleSelectForm = (value: string) => {
		setsubjectDetails({ ...subjectDetails, formId: value });
	};

	let sendToDatabase = (location: string) => {
		let databaseData = {};

		axios({
			method: 'post',
			url: 'http://localhost:3000/api/addReference',
			data: databaseData,
		})
			.then(function (response) {
				// handle success

				setImage('');
				setShowUpload(false);
				setUploadData(0);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};

	let handleCreateTopic = () => {
		if (
			subjectDetails.topicName != '' &&
			subjectDetails.topicDefinition != '' &&
			subjectDetails.formId != '' &&
			subjectDetails.subjectId != ''
		) {
			//!Call save to database
			uploadToServer();
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
	};

	return (
		<div className={Styles.container}>
			<Toaster position='bottom-left' reverseOrder={false} />
			<div className={Styles.innerContainer}>
				<div className={Styles.rightInnercontainerBody}>
					<div className={Styles.mainMain}>
						<div className={Styles.formHeader}>Topic Details.</div>
						<InputTextMui
							label='File Name'
							content={subjectDetails.topicName}
							name='fileName'
							handleChange={handleTextInput}
						/>
						<FileUpload
							deactiveteImage={deactiveteImage}
							clear={clearData}
							clearData={clearDataProcess}
							uploadToServer={uploadForServer}
							image={''}
						/>
					</div>
					<div className={Styles.mainLeft}>
						<div className={Styles.formHeader}>Topic Relations.</div>
						<SelectMiu
							displayLabel='Select Subject'
							show={true}
							forms={subjectOptions}
							handlechange={handleSelectSubject}
							value={subjectDetails.subjectId}
						/>
						<SelectMiu
							displayLabel='Select Form'
							show={true}
							forms={formOptions}
							handlechange={handleSelectForm}
							value={subjectDetails.formId}
						/>
					</div>
				</div>
				{showUpload && <Progress data={uploadData} />}
				{showUpload ? (
					<div className={Styles.imageSelect}>Please wait...</div>
				) : (
					<div onClick={handleCreateTopic} className={Styles.imageSelect}>
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
