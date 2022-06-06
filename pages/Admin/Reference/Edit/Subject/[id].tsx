import React, { ReactNode, useContext, useEffect } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { PrismaClient } from '@prisma/client';
import ImageUpload from '../../../../../components/tools/ImageUpload';
import InputTextMui from '../../../../../components/tools/InputTextMui';
import { type } from 'os';
import DisplayChip from '../../../../../components/tools/displayChip';
import SelectMiu from '../../../../../components/tools/SelectMui';
import axios from 'axios';
import { useState } from 'react';
import Styles from '../../../../../styles/createNotes.module.scss';
import SnackBar from '../../../../../components/tools/SnackBar';
import { useRouter } from 'next/router';
import { NavContext } from '../../../../../components/context/StateContext';

export const getServerSideProps: GetServerSideProps = async (context) => {
	// const { params } = context;
	// const { id } = params;
	let id = context.params?.id as string;
	let Id = parseInt(id);

	const prisma = new PrismaClient();
	const subjectServer = await prisma.subjectReference.findUnique({
		where: {
			id: Id,
		},
		select: {
			id: true,
			subjectName: true,
			subjectDefinition: true,
			imageLocation: true,
			published: true,
			forms: {
				select: {
					formName: true,
					id: true,
				},
			},
		},
	});

	const subject = JSON.parse(JSON.stringify(subjectServer));

	const formsFromServer = await prisma.formReference.findMany({
		select: {
			id: true,
			formName: true,
		},
	});
	const formsList = JSON.parse(JSON.stringify(formsFromServer));
	await prisma.$disconnect();
	return {
		props: {
			subject,
			formsList,
		},
	};
};

type dataTypeSelect = {
	id: string;
	label: string;
}[];

const EditSubject = ({
	subject,
	formsList,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);

	useEffect(() => {
		setNavActive('Admin');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	const [selectOption, setSelectOption] = useState<dataTypeSelect>([]);
	const [open, setOpen] = useState(false);
	const [action, setAction] = useState(false);
	const [formValue, setformValue] = useState('');
	const [ToastMessage, setToastMessage] = useState('');
	const [image, setImage] = useState<string | Blob>('');
	const router = useRouter();
	const [subjectDetails, setsubjectDetails] = useState({
		subjectName: '',
		subjectDefinition: '',
	});

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

	let handleTextInput = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		name: string
	) => {
		let value = event.currentTarget.value;
		setsubjectDetails({ ...subjectDetails, [name]: value });
		console.log(subjectDetails);
	};

	type templateType = {
		id: string;
		label: string;
	};

	let options: { label: string; value: string }[] = [];

	//!errror

	for (const form of formsList) {
		options.push({
			label: form.formName,
			value: form.id,
		});
	}

	let handleSelect = (value: string) => {
		setformValue(value);
		let template: templateType = {
			id: '',
			label: '',
		};
		for (const form of options) {
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
		const found = arrName.some((item) => item.id === tamplate.id);
		if (!found) {
			setSelectOption([...selectOption, tamplate]);
		}
	}

	let handleDeleteFormDisplay = (label: string) => {
		let filtered = selectOption.filter((data) => {
			return data.label != label;
		});

		setSelectOption(filtered);
	};

	let uploadForServer = (image: string | Blob, action: boolean) => {
		setImage(image);
		setAction(action);
		//!TO BE CALLED FOR UPLOAD
		// uploadToServer();
	};

	//! for uploading
	const uploadToServer = async () => {
		console.log(action);
		if (action) {
			const body = new FormData();
			body.append('file', image);
			axios
				.post('/api/upload', body, {
					onUploadProgress: (progressEvent) => {
						console.log(
							'Upload Progress: ' +
								Math.round((progressEvent.loaded / progressEvent.total) * 100) +
								'%'
						);
					},
				})
				.then(
					(res) => {
						let location = res.data.file;
						sendToDatabase(location);
						console.log(location);
					},
					(err) => {
						//some error
					}
				);
		} else {
			let location = image as string;
			sendToDatabase(location);
			console.log(location);
		}
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
			id: subject.id,
			subjectName: subjectDetails.subjectName,
			subjectDefinition: subjectDetails.subjectDefinition,
			imageLocation: location,
			forms,
		};

		axios({
			method: 'post',
			url: 'http://localhost:3000/api/updateSubjectReference',
			data: databaseData,
		})
			.then(function (response) {
				// handle success
				console.log(databaseData);
				setToastMessage(response.data.message);
				setOpen(true);

				setSelectOption([]);
				setsubjectDetails({
					subjectName: '',
					subjectDefinition: '',
				});
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

	let handleCreateSubject = () => {
		if (
			subjectDetails.subjectDefinition != '' &&
			subjectDetails.subjectName != '' &&
			image != '' &&
			selectOption.length > 0
		) {
			//!handle upload
			setToastMessage('Saving to database. Please wait..');
			setOpen(true);
			uploadToServer();
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

	type dataTemplate = {
		id: string;
		label: string;
	};

	useEffect(() => {
		let templateData = [];
		for (const form of subject.forms) {
			let template = {
				id: form.id,
				label: form.formName,
			};
			templateData.push(template);
		}
		setSelectOption(templateData);
		setsubjectDetails({
			subjectName: subject.subjectName,
			subjectDefinition: subject.subjectDefinition,
		});
		setImage(subject.imageLocation);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div className={Styles.container}>
			<div className={Styles.innerContainer}>
				<div className={Styles.rightInnercontainerBody}>
					<div className={Styles.mainMain}>
						<div className={Styles.formHeader}>Subject Details.</div>
						<InputTextMui
							label='Subject Name'
							content={subjectDetails.subjectName}
							name='subjectName'
							handleChange={handleTextInput}
						/>
						<InputTextMui
							label='Subject Definition'
							content={subjectDetails.subjectDefinition}
							name='subjectDefinition'
							handleChange={handleTextInput}
						/>

						<ImageUpload
							image={image as string}
							uploadToServer={uploadForServer}
						/>
					</div>
					<div className={Styles.mainLeft}>
						<div className={Styles.formHeader}>Forms for this subject.</div>
						<SelectMiu
							displayLabel='Select Form'
							forms={options}
							handlechange={handleSelect}
							value={formValue}
						/>
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
				<div onClick={handleCreateSubject} className={Styles.imageSelect}>
					Update Subject
				</div>
				<SnackBar
					textMessage={ToastMessage}
					opener={open}
					handleClearToast={handleClearToast}
				/>
			</div>
		</div>
	);
};

export default EditSubject;

//*Removing default search bar :)
EditSubject.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};
