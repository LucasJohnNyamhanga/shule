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
import { Topic } from '@mui/icons-material';
import toast, { Toaster } from 'react-hot-toast';
import { NavContext } from '../../../../components/context/StateContext';
const url = 'https://shule-eight.vercel.app';
import { getSession } from 'next-auth/react';
import LoaderWait from '../../../../components/tools/loaderWait';
export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);
	if (!session) {
		return {
			redirect: {
				destination: `/Auth/SignIn?callbackUr=/`,
				permanent: false,
			},
		};
	}

	const userFromServer = await prisma.users.findFirst({
		where: {
			username: session.user.email,
		},
		select: {
			isAdmin: true,
			id: true,
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

	const formsFromServer: userData = await prisma.formExams.findMany({
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
    }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);

	useEffect(() => {
		setNavActive('Admin');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);
	const [loading, setLoad] = useState(false);
	const [subjectDetails, setsubjectDetails] = useState({
		examTypeName: '',
		examTypeDefinition: '',
		subjectId: '',
		formId: '',
	});

	const [formOptions, setFormOptions] = useState<formData>([]);
	const [subjectOptions, setSubjectOptions] = useState<formData>([]);
	const notify = (message: string) => toast(message);
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);

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
	};

	let handleSelectSubject = (value: string) => {
		setsubjectDetails({ ...subjectDetails, subjectId: value });
	};

	let handleSelectForm = (value: string) => {
		setsubjectDetails({ ...subjectDetails, formId: value });
	};

	let sendToDatabase = () => {
		setLoad(true);
		let data = {
			name: subjectDetails.examTypeName,
			definition: subjectDetails.examTypeDefinition,
			formId: subjectDetails.formId,
			subjectId: subjectDetails.subjectId,
		};
		console.log(data);
		axios({
			method: 'post',
			url: url + '/api/addExamType',
			data,
		})
			.then(function (response) {
				// handle success
				setsubjectDetails({
					examTypeName: '',
					examTypeDefinition: '',
					subjectId: '',
					formId: '',
				});
				let jibu: string = response.data.message;
				let type: string = response.data.type;

				if (type == 'success') {
					notifySuccess(jibu);
				} else {
					notifyError(jibu);
				}
				setLoad(false);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Error has occured, try later.');
				setLoad(false);
			})
			.then(function () {
				// always executed
			});
	};

	let handleCreateTopic = () => {
		if (
			subjectDetails.examTypeName != '' &&
			subjectDetails.examTypeDefinition != '' &&
			subjectDetails.formId != '' &&
			subjectDetails.subjectId != ''
		) {
			//!Call save to database
			validateTopic();
			setLoad(true);
		} else {
			//!return error
			notifyError('Fill in all fields including topic relations.');
		}
	};

	let validateTopic = () => {
		let data = {
			name: subjectDetails.examTypeName,
			definition: subjectDetails.examTypeDefinition,
			formId: subjectDetails.formId,
			subjectId: subjectDetails.subjectId,
		};
		console.log(data);
		axios({
			method: 'post',
			url: url + '/api/examTypeVerify',
			data,
		})
			.then(function (response) {
				const topicsFromServer = JSON.parse(JSON.stringify(response.data));
				// handle success
				if (topicsFromServer.length > 0) {
					notifyError('Database contain another copy of this topic.');
					setLoad(false);
				} else {
					sendToDatabase();
				}
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Something went wrong.');
				setLoad(false);
			})
			.then(function () {
				// always executed
			});
	};

	return (
		<div className={Styles.container}>
			<Toaster position='top-center' reverseOrder={false} />
			<div className={Styles.innerContainer}>
				<div className={Styles.rightInnercontainerBody}>
					<div className={Styles.mainMain}>
						<div className={Styles.formHeader}>Exam Type Details.</div>
						<InputTextMui
							label='Exam Type Name'
							content={subjectDetails.examTypeName}
							name='examTypeName'
							handleChange={handleTextInput}
						/>
						<InputTextMui
							label='Exam Type Definition'
							content={subjectDetails.examTypeDefinition}
							name='examTypeDefinition'
							handleChange={handleTextInput}
						/>
					</div>
					<div className={Styles.mainLeft}>
						<div className={Styles.formHeader}>Exam Type Relations.</div>
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
				{loading ? (
					<div className={Styles.imageSelect}>
						<LoaderWait />
					</div>
				) : (
					<div onClick={handleCreateTopic} className={Styles.imageSelect}>
						Create Exam Type
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
