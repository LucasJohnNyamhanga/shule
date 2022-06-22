import FileUpload from '../../../../components/tools/FileUpload';
import InputTextMui from '../../../../components/tools/InputTextMui';
import { type } from 'os';
import DisplayChip from '../../../../components/tools/displayChip';
import { subjectReference } from '@prisma/client';
import { prisma } from '../../../../db/prisma';
import SelectMiu from '../../../../components/tools/SelectMui';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Styles from '../../../../styles/createNotes.module.scss';
import { ReactNode } from 'react';
import SnackBar from '../../../../components/tools/SnackBar';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Progress from '../../../../components/tools/progressFileUpload';
import { NavContext } from '../../../../components/context/StateContext';
import dynamic from 'next/dynamic';
//load when browser kicks in, on page load
const CkEditor = dynamic(() => import('../../../../components/tools/Ck'), {
	ssr: false,
});

export const getServerSideProps: GetServerSideProps = async () => {
	const formsFromServer = await prisma.formReference.findMany({
		select: {
			id: true,
			formName: true,
		},
	});
	const forms = JSON.parse(JSON.stringify(formsFromServer));

	const subjectsFromServer = await prisma.subjectReference.findMany({
		select: {
			id: true,
			subjectName: true,
			forms: {
				select: {
					formName: true,
					id: true,
				},
			},
		},
	});
	const subjects = JSON.parse(JSON.stringify(subjectsFromServer));

	let deactiveteImage = true;
	await prisma.$disconnect();
	return {
		props: {
			forms,
			deactiveteImage,
			subjects,
		},
	};
};

type dataTypeSelect = {
	id: string;
	label: string;
}[];

type formData = {
	label: string;
	value: string;
}[];

type templateType = {
	id: string;
	label: string;
};

type selectFormType = {
	value: string;
	label: string;
}[];

const CreateNotes = ({
    	forms,
    	deactiveteImage,
    	subjects,
    }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);

	const [selectOption, setSelectOption] = useState<dataTypeSelect>([]);
	const [subjectOptions, setSubjectOptions] = useState<formData>([]);
	const [open, setOpen] = useState(false);
	const [ToastMessage, setToastMessage] = useState('');
	const [image, setImage] = useState<string | Blob>('');
	const [clearData, setclearData] = useState(false);
	const [uploadData, setUploadData] = useState(0);
	const [showUpload, setShowUpload] = useState(false);
	const [activateForm, setActivateForm] = useState(false);
	const [referenceDetails, setReferenceDetails] = useState({
		name: '',
		description: '',
		data: '',
		isPdf: '',
		subjectId: '',
		formReference: '',
	});

	const [trueAndFalse, setTrueAndFalse] = useState([
		{
			label: `Yes, it's PDF.`,
			value: 'True',
		},
		{
			label: `No, it's not a PDF.`,
			value: 'False',
		},
	]);

	let handleTextInput = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		name: string
	) => {
		let value = event.currentTarget.value;
		setReferenceDetails({ ...referenceDetails, [name]: value });
	};

	let handleSelectSubject = (value: string) => {
		setReferenceDetails({ ...referenceDetails, subjectId: value });

		let options: selectFormType = [];
		for (const subject of subjects) {
			if (subject.id == value) {
				for (const form of subject.forms) {
					options.push({
						label: form.formName,
						value: form.id,
					});
				}
				break;
			}
		}
		setFormOption(options);
		if (options.length > 0) {
			setActivateForm(true);
		} else {
			setActivateForm(false);
			setToastMessage(`${value} has no forms option`);
			setOpen(true);
		}
	};

	const [formOption, setFormOption] = useState<selectFormType>([]);

	useEffect(() => {
		let subjectFromServer: formData = [];
		subjects.map((subject: subjectReference) => {
			subjectFromServer.push({
				label: subject.subjectName,
				value: subject.id as unknown as string,
			});
		});
		setSubjectOptions(subjectFromServer);

		setNavActive('Admin');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive, referenceDetails.isPdf]);

	let handleSelect = (value: string) => {
		console.log(value);
		let template: templateType = {
			id: '',
			label: '',
		};
		for (const form of formOption) {
			if (form.value == value) {
				template = {
					id: value,
					label: form.label,
				};
			}
		}
		add(selectOption, template);
	};

	function add(arrName: dataTypeSelect, tamplate: templateType) {
		const { length } = arrName;
		const id = length + 1;
		const found = arrName.some((item) => item.id === tamplate.id);
		if (!found) {
			setSelectOption([...selectOption, tamplate]);
		}
	}

	let handleIsPdf = (value: string) => {
		setReferenceDetails({ ...referenceDetails, isPdf: value });
	};

	let handleDeleteFormDisplay = (label: string) => {
		let filtered = selectOption.filter((data) => {
			return data.label != label;
		});

		setSelectOption(filtered);
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

	let sendToDatabase = (location: string) => {
		let forms = [];
		for (const formData of selectOption) {
			let Id = parseInt(formData.id);
			forms.push({
				id: Id,
			});
		}

		let databaseData = {
			name: referenceDetails.name,
			description: referenceDetails.description,
			data: referenceDetails.isPdf == 'True' ? location : referenceDetails.data,
			formReference: forms,
			subjectId: referenceDetails.subjectId,
			isPdf: referenceDetails.isPdf,
		};

		axios({
			method: 'post',
			url: 'http://localhost:3000/api/addReference',
			data: databaseData,
		})
			.then(function (response) {
				// handle success
				setToastMessage(response.data.message);
				setOpen(true);

				setSelectOption([]);
				setReferenceDetails({
					name: '',
					description: '',
					subjectId: '',
					data: '',
					isPdf: '',
					formReference: '',
				});
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

	let clearDataProcess = () => {
		setclearData(false);
	};

	let handleCreateSubject = () => {
		if (
			referenceDetails.name != '' &&
			referenceDetails.description != '' &&
			referenceDetails.subjectId != '' &&
			//  &&
			selectOption.length > 0
		) {
			if (referenceDetails.isPdf == 'True') {
				if (image != '') {
					uploadToServer();
				} else {
					setToastMessage('No file detected. Select a PDF file!.');
					setOpen(true);
				}
			} else {
				if (referenceDetails.data != '') {
					sendToDatabase('');
				} else {
					setToastMessage('No data, Please write data!.');
					setOpen(true);
				}
			}
		} else {
			setToastMessage(
				'Fill in all fields including image and forms selection.'
			);
			setOpen(true);
		}
	};

	let handleClearToast = () => {
		setOpen(false);
	};

	let handleContent = (data: string) => {
		let convertedData = data.replaceAll(
			`img`,
			`Image layout="fill" objectFit="cover"`
		);
		setReferenceDetails({ ...referenceDetails, data: convertedData });
	};

	let handleOnReady = () => {};

	return (
		<div className={Styles.container}>
			<div className={Styles.innerContainer}>
				<div className={Styles.rightInnercontainerBody}>
					<div className={Styles.mainMain}>
						<div className={Styles.formHeader}>Reference Details.</div>
						<InputTextMui
							label='Reference Name'
							content={referenceDetails.name}
							name='name'
							handleChange={handleTextInput}
						/>
						<InputTextMui
							label='Reference Definition'
							content={referenceDetails.description}
							name='description'
							handleChange={handleTextInput}
						/>

						{referenceDetails.isPdf == 'True' && (
							<FileUpload
								deactiveteImage={deactiveteImage}
								clear={clearData}
								clearData={clearDataProcess}
								uploadToServer={uploadForServer}
								image={''}
							/>
						)}
						{referenceDetails.isPdf == 'False' && (
							<CkEditor
								content={handleContent}
								dataCk={''}
								onReadyToStart={handleOnReady}
							/>
						)}
					</div>
					<div className={Styles.mainLeft}>
						<div className={Styles.formHeader}>
							Relations For This Reference.
						</div>
						<SelectMiu
							show={true}
							displayLabel='Select Subject'
							forms={subjectOptions}
							handlechange={handleSelectSubject}
							value={referenceDetails.subjectId}
						/>
						<SelectMiu
							displayLabel='Is Reference PDF?'
							show={true}
							forms={trueAndFalse}
							handlechange={handleIsPdf}
							value={referenceDetails.isPdf}
						/>
						{activateForm && (
							<SelectMiu
								displayLabel='Select Form'
								forms={formOption}
								handlechange={handleSelect}
								value={''}
							/>
						)}
						<div className={Styles.chipDisplay}>
							{selectOption.map((option, index) => (
								<DisplayChip
									handleDelete={handleDeleteFormDisplay}
									label={option.label}
									key={index}
								/>
							))}
						</div>
					</div>
				</div>
				{showUpload && <Progress data={uploadData} />}
				{showUpload ? (
					<div className={Styles.imageSelect}>Please wait...</div>
				) : (
					<div onClick={handleCreateSubject} className={Styles.imageSelect}>
						Create Subject
					</div>
				)}
				<SnackBar
					textMessage={ToastMessage}
					opener={open}
					handleClearToast={handleClearToast}
				/>
			</div>
		</div>
	);
};

export default CreateNotes;

//*Removing default search bar :)
CreateNotes.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};
