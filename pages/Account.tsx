/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/react-in-jsx-scope */
import { ChangeEvent, useRef } from 'react';
import Styles from '../styles/account.module.scss';
import Avatar from '@mui/material/Avatar';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Loader from '../components/tools/loader';
import bcrypt from 'bcryptjs';

import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { prisma } from '../db/prisma';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';

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
			id: true,
			isAdmin: true,
			name: true,
			username: true,
			password: true,
			vifurushi: {
				select: {
					name: true,
					value: true,
				},
			},
		},
	});
	const userfound = await JSON.parse(JSON.stringify(userFromServer));

	await prisma.$disconnect();
	return {
		props: { userfound },
	};
};

const Notes = ({
    	userfound,
    }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const password = useRef<HTMLInputElement>(null!);
	const password1 = useRef<HTMLInputElement>(null!);
	const password2 = useRef<HTMLInputElement>(null!);
	const [resetPassword, setResetPassword] = useState(false);
	const [loadingDisplay, setLoadingDisplay] = useState(false);
	const [onlyOnce, setONlyOnce] = useState(true);
	const [passChange, setPassChange] = useState({
		password: '',
		password1: '',
		password2: '',
		id: userfound.id,
	});
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);

	const handletextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		const name = e.target.name;
		setPassChange({ ...passChange, [name]: value });
		password.current.style.color = 'black';
		password1.current.style.color = 'black';
		password2.current.style.color = 'black';
	};
	const togglePasswordSignUp = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			password1.current.type = 'text';
			password2.current.type = 'text';
			password.current.type = 'text';
		} else {
			password1.current.type = 'password';
			password2.current.type = 'password';
			password.current.type = 'password';
		}
	};
	const reset = () => {
		setResetPassword(!resetPassword);
	};
	const sendToDatabase = (hash: string) => {
		const database = {
			password: hash,
			id: userfound.id,
		};
		axios({
			method: 'post',
			url: 'http://localhost:3000/api/updatePassword',
			data: database,
		})
			.then(function (response) {
				// handle success
				setPassChange({
					password: '',
					password1: '',
					password2: '',
					id: userfound.id,
				});
				setLoadingDisplay(false);
				if (response.data.type == 'success') {
					notifySuccess(response.data.message);
					setResetPassword(!resetPassword);
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
	const resetPasswordNow = async () => {
		if (
			passChange.password1 != '' &&
			passChange.password2 != '' &&
			passChange.password != ''
		) {
			//
			const comaparison = await bcrypt.compare(
				passChange.password,
				userfound.password
			);
			if (comaparison) {
				if (passChange.password1 == passChange.password2) {
					setLoadingDisplay(true);
					bcrypt.hash(passChange.password1, 10, function (err, hash) {
						sendToDatabase(hash);
					});
				} else {
					password1.current.focus();
					password1.current.style.color = 'red';
					password2.current.style.color = 'red';
					notifyError('Password does not match.');
				}
			} else {
				notifyError('Enter Correct Password');
				password.current.focus();
				password.current.style.color = 'red';
			}
		} else {
			notifyError('Enter all details.');
		}
	};
	return (
		<div className={Styles.container}>
			<Toaster position='bottom-left' reverseOrder={false} />
			<div className={Styles.innerContainer}>
				{!resetPassword && (
					<>
						<div className={Styles.header}>
							<Avatar className={Styles.avatar}>
								{userfound.name.charAt(0).toUpperCase()}
							</Avatar>
							<div className={Styles.list}>
								<ul>
									<li className={Styles.userName}>{userfound.username}</li>
									<li>{userfound.name}</li>
									<li>{userfound.isAdmin ? 'Administrator' : ''}</li>
									{userfound.password != 'googleHasIt' && (
										<li className={Styles.edit} onClick={reset}>
											Edit Password
										</li>
									)}
								</ul>
							</div>
						</div>
						<div className={Styles.account}>
							<div className={Styles.header}>Account Details</div>
							<div className={Styles.list}>
								<div className={Styles.table}>
									<table>
										<thead>
											<tr>
												<th>Package Name</th>
												<th>Amount</th>
											</tr>
										</thead>
										<tbody>
											{userfound.vifurushi.map(
												(furushi: { name: string; value: number }) => (
													<tr key={furushi.name}>
														<td>
															{furushi.name
																.replace(/([A-Z])/g, ' $1')
																// uppercase the first character
																.replace(/^./, function (str) {
																	return str.toUpperCase();
																})}
														</td>
														<td>{furushi.value}</td>
													</tr>
												)
											)}
										</tbody>
									</table>
								</div>
							</div>
						</div>
					</>
				)}
				<div className={Styles.resetPassword}>
					{resetPassword && (
						<form className={Styles.form}>
							<div className={Styles.logInHeader}>
								<div>
									<AutoStoriesIcon className={Styles.icon} />
								</div>
								<div className={Styles.text}>Reset Password</div>
							</div>
							<div className={Styles.credential}>
								<input
									ref={password}
									type='password'
									value={passChange.password}
									placeholder={'Current Password'}
									name={'password'}
									onChange={(event) => {
										handletextChange(event);
									}}
									autoComplete='off'
									autoCorrect='off'
									spellCheck={false}
								/>
								<input
									ref={password1}
									type='password'
									value={passChange.password1}
									placeholder={'New Password'}
									name={'password1'}
									onChange={(event) => {
										handletextChange(event);
									}}
									autoComplete='off'
									autoCorrect='off'
									spellCheck={false}
								/>
								<input
									ref={password2}
									type='password'
									value={passChange.password2}
									placeholder={'Retype New Password'}
									name={'password2'}
									onChange={(event) => {
										handletextChange(event);
									}}
									autoComplete='off'
									autoCorrect='off'
									spellCheck={false}
								/>
								<div className={Styles.check}>
									<input
										type='checkbox'
										onChange={(e) => {
											togglePasswordSignUp(e);
										}}
									/>
									Show Password
								</div>
							</div>
							<div onClick={resetPasswordNow} className={Styles.button}>
								Reset Password
							</div>
							<div className={Styles.separator}>
								<hr className={Styles.line} />
								<hr className={Styles.line} />
							</div>
							<div className={Styles.buttonSignUp} onClick={reset}>
								<div>Back to Account</div>
							</div>
						</form>
					)}
				</div>
				<div className={Styles.loader}>{loadingDisplay && <Loader />}</div>
			</div>
		</div>
	);
};

export default Notes;

//*Removing default search bar :)
Notes.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};
