import InputTextMui from '../../../../components/tools/InputTextMui';
import { type } from 'os';
import { form, subject, topic } from '@prisma/client';
import { prisma } from '../../../../db/prisma';
import SelectMiu from '../../../../components/tools/SelectMui';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Styles from '../../../../styles/topic.module.scss';
import { ReactNode } from 'react';
import SnackBar from '../../../../components/tools/SnackBar';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import toast, { Toaster } from 'react-hot-toast';
import { NavContext } from '../../../../components/context/StateContext';

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
	const formsFromServer: userData = await prisma.formReview.findMany({
		select: {
			id: true,
			formName: true,
		},
	});
	const forms = JSON.parse(JSON.stringify(formsFromServer));
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
	const { navActive, setNavActive, userData } = useContext(NavContext);

	useEffect(() => {
		setNavActive('Admin');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	const [subjectDetails, setsubjectDetails] = useState({
		topicId: '',
		name: '',
		subjectId: '',
		formId: '',
		userId: '',
	});

	const [formOptions, setFormOptions] = useState<formData>([]);
	const [subjectOptions, setSubjectOptions] = useState<formData>([]);
	const [topicOptions, setTopicOptions] = useState<formData>([]);
	const notify = (message: string) => toast(message);
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);
	const [change, setChange] = useState(0);
	const [hideShow, setHideShow] = useState(false);

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
		setsubjectDetails({ ...subjectDetails, name: value });
		console.log(subjectDetails);
	};

	let handleSelectSubject = (value: string) => {
		setsubjectDetails({ ...subjectDetails, subjectId: value });
		setChange(change + 1);
	};

	let handleSelectForm = (value: string) => {
		setsubjectDetails({ ...subjectDetails, formId: value });
		setChange(change + 1);
	};

	let handleSelectTopic = (value: string) => {
		setsubjectDetails({
			...subjectDetails,
			topicId: value,
			userId: userData.id,
		});
	};

	let retriaveTopicsData = () => {
		setHideShow(false);
		axios({
			method: 'post',
			url: 'http://localhost:3000/api/topicsReview',
			data: subjectDetails,
		})
			.then(function (response) {
				const topics: [] = JSON.parse(JSON.stringify(response.data));
				// handle success
				if (topics.length > 0) {
					let topicFromServer: formData = [];
					topics.map((topic: topic) => {
						topicFromServer.push({
							label: topic.topicName,
							value: topic.id as unknown as string,
						});
					});
					setTopicOptions(topicFromServer);
					setHideShow(true);
					notifySuccess('Select topic to proceed..');
				} else {
					notifyError('No topics available for your selection.');
				}
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Something went wrong.');
			})
			.then(function () {
				// always executed
			});
	};

	let sendToDatabase = () => {
		axios({
			method: 'post',
			url: 'http://localhost:3000/api/addReview',
			data: subjectDetails,
		})
			.then(function (response) {
				// handle success
				setsubjectDetails({
					name: '',
					topicId: '',
					subjectId: '',
					formId: '',
					userId: '',
				});
				let jibu: string = response.data.message;
				let type: string = response.data.type;

				if (type == 'success') {
					notifySuccess(jibu);
				} else {
					notifyError(jibu);
				}
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

	let handleCreateTopic = () => {
		if (
			subjectDetails.name != '' &&
			subjectDetails.topicId != '' &&
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

	useEffect(() => {
		if (subjectDetails.formId != '' && subjectDetails.subjectId != '') {
			retriaveTopicsData();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [change]);

	return (
		<div className={Styles.container}>
			<Toaster position='top-center' reverseOrder={false} />
			<div className={Styles.innerContainer}>
				<div className={Styles.rightInnercontainerBody}>
					<div className={Styles.mainMain}>
						<div className={Styles.formHeader}>Review Details.</div>
						<InputTextMui
							label='Review Name'
							content={subjectDetails.name}
							name='topicName'
							handleChange={handleTextInput}
						/>
					</div>
					<div className={Styles.mainLeft}>
						<div className={Styles.formHeader}>Review Relations.</div>
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
						{hideShow && (
							<SelectMiu
								displayLabel='Select Topic'
								show={true}
								forms={topicOptions}
								handlechange={handleSelectTopic}
								value={''}
							/>
						)}
					</div>
				</div>
				<div onClick={handleCreateTopic} className={Styles.imageSelect}>
					Create Review
				</div>
			</div>
		</div>
	);
};

export default Create;

//*Removing default search bar :)
Create.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};
