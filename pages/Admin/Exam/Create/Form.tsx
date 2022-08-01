import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { prisma } from '../../../../db/prisma';
import Styles from '../../../../styles/notesMaker.module.scss';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { NavContext } from '../../../../components/context/StateContext';
import InputTextMui from '../../../../components/tools/InputTextMui';

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

	await prisma.$disconnect();
	return {
		props: {},
	};
};

const Notes = ({}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { navActive, setNavActive, userData } = useContext(NavContext);
	const [formData, setFormData] = useState({
		formName: '',
		userId: '',
	});
	useEffect(() => {
		setNavActive('Admin');
		setFormData({
			formName: '',
			userId: userData.id,
		});
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [userData]);
	const notify = (message: string) => toast(message);
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);
	let handleTextInput = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		name: string
	) => {
		let value = event.currentTarget.value;
		setFormData({ ...formData, formName: value });
	};
	let handleCreateNotes = () => {
		if (formData.formName != '') {
			verifyForm();
		} else {
			notifyError('Fill in form name to proceed.');
		}
	};
	let sendToDatabase = () => {
		axios({
			method: 'post',
			url: 'http://localhost:3000/api/addFormExam',
			data: formData,
		})
			.then(function (response) {
				// handle success
				setFormData({
					formName: '',
					userId: userData.id,
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
	let verifyForm = () => {
		axios({
			method: 'post',
			url: 'http://localhost:3000/api/formsExamVerify',
			data: formData,
		})
			.then(function (response) {
				const FormsFromServer = JSON.parse(JSON.stringify(response.data));
				// handle success
				if (FormsFromServer.length > 0) {
					notifyError('Database contain another copy of this form.');
				} else {
					sendToDatabase();
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
	return (
		<div className={Styles.container}>
			<Toaster position='top-center' />
			<div className={Styles.innerContainer}>
				<div className={Styles.content}>
					<div className={Styles.mainContent}>
						<InputTextMui
							label='Subject Name'
							content={formData.formName}
							name='formName'
							handleChange={handleTextInput}
						/>
					</div>
				</div>
				<div>
					<div onClick={handleCreateNotes} className={Styles.imageSelect}>
						Create Form
					</div>
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
