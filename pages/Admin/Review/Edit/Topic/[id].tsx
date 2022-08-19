import React, { ReactNode, useContext, useEffect } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { prisma } from '../../../../../db/prisma';
import InputTextMui from '../../../../../components/tools/InputTextMui';
import SelectMiu from '../../../../../components/tools/SelectMui';
import axios from 'axios';
import { useState } from 'react';
import Styles from '../../../../../styles/createNotes.module.scss';
import { useRouter } from 'next/router';
import toast, { Toaster } from 'react-hot-toast';
import { NavContext } from '../../../../../components/context/StateContext';
const url = process.env.MAIN_URL;
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
	let id = context.params?.id as string;
	let Id = parseInt(id);

	const topicServer = await prisma.topicReview.findUnique({
		where: {
			id: Id,
		},
		select: {
			id: true,
			topicName: true,
			topicDefinition: true,
			formId: true,
			subjectId: true,
			published: true,
		},
	});

	const topic = JSON.parse(JSON.stringify(topicServer));

	const formsFromServer = await prisma.formReview.findMany({
		select: {
			id: true,
			formName: true,
		},
	});
	const formsList = JSON.parse(JSON.stringify(formsFromServer));

	const subjectsFromServer = await prisma.subjectReview.findMany({
		select: {
			id: true,
			subjectName: true,
		},
	});
	const subjects = JSON.parse(JSON.stringify(subjectsFromServer));
	await prisma.$disconnect();
	return {
		props: {
			topic,
			formsList,
			subjects,
			userfound,
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

const EditSubject = ({
	topic,
	formsList,
	subjects,
	userfound,
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
		id: topic.id,
		userId: '',
	});

	const [formOptions, setFormOptions] = useState<formData>([]);
	const [subjectOptions, setSubjectOptions] = useState<formData>([]);
	const notify = (message: string) => toast(message);
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);
	const router = useRouter();

	useEffect(() => {
		setsubjectDetails({
			...subjectDetails,
			topicName: topic.topicName,
			topicDefinition: topic.topicDefinition,
			subjectId: topic.subjectId,
			formId: topic.formId,
			userId: userfound.id,
		});

		let subjectFromServer: formData = [];
		subjects.map((subject: { subjectName: string; id: number }) => {
			subjectFromServer.push({
				label: subject.subjectName,
				value: subject.id as unknown as string,
			});
		});
		setSubjectOptions(subjectFromServer);

		let topicFromServer: formData = [];
		formsList.map((form: { formName: string; id: number }) => {
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
		console.log(subjectDetails);
	};

	let handleSelectForm = (value: string) => {
		setsubjectDetails({ ...subjectDetails, formId: value });
		console.log(subjectDetails);
	};

	let sendToDatabase = () => {
		axios({
			method: 'post',
			url: url + '/api/updateTopicReview',
			data: subjectDetails,
		})
			.then(function (response) {
				// handle success
				setsubjectDetails({
					topicName: '',
					topicDefinition: '',
					subjectId: '',
					formId: '',
					id: topic.id,
					userId: '',
				});
				let jibu: string = response.data.message;
				notifySuccess(jibu);
				delayRedirect();
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Error has occured, try later.');
			})
			.then(function () {
				// always executed
			});
	};

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

	let handleCreateTopic = () => {
		if (
			subjectDetails.topicName != '' &&
			subjectDetails.topicDefinition != '' &&
			subjectDetails.formId != '' &&
			subjectDetails.subjectId != ''
		) {
			//!Call save to database
			sendToDatabase();
		} else {
			//!return error
			notifyError('Fill in all fields including topic relations.');
		}
	};

	return (
		<div className={Styles.container}>
			<Toaster position='top-center' reverseOrder={false} />
			<div className={Styles.innerContainer}>
				<div className={Styles.rightInnercontainerBody}>
					<div className={Styles.mainMain}>
						<div className={Styles.formHeader}>Topic Details.</div>
						<InputTextMui
							label='Topic Name'
							content={subjectDetails.topicName}
							name='topicName'
							handleChange={handleTextInput}
						/>
						<InputTextMui
							label='Topic Definition'
							content={subjectDetails.topicDefinition}
							name='topicDefinition'
							handleChange={handleTextInput}
						/>
					</div>
					<div className={Styles.mainLeft}>
						<div className={Styles.formHeader}>Topic Relations.</div>
						<SelectMiu
							displayLabel='Select Subject'
							value={subjectDetails.subjectId}
							show={true}
							forms={subjectOptions}
							handlechange={handleSelectSubject}
						/>
						<SelectMiu
							displayLabel='Select Form'
							value={subjectDetails.formId}
							show={true}
							forms={formOptions}
							handlechange={handleSelectForm}
						/>
					</div>
				</div>
				<div onClick={handleCreateTopic} className={Styles.imageSelect}>
					Update Topic
				</div>
			</div>
		</div>
	);
};

export default EditSubject;

//*Removing default search bar :)
EditSubject.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};
