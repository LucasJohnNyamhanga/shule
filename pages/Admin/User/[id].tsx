import { ChangeEvent, useRef } from 'react';
import Styles from '../../../styles/accountAdmin.module.scss';
import Avatar from '@mui/material/Avatar';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Loader from '../../../components/tools/loader';
import bcrypt from 'bcryptjs';

import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { prisma } from '../../../db/prisma';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { NavContext } from '../../../components/context/StateContext';
import InputTextMui from '../../../components/tools/InputTextMui';

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
	let id = context.params?.id as string;
	let Id = parseInt(id);

	const userFromServer = await prisma.users.findUnique({
		where: {
			id: Id,
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
		props: {
			userfound,
		},
	};
};

type formData = {
	label: string;
	value: string;
}[];

const EditExam = ({
	userfound,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);

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

	return (
		<div className={Styles.container}>
			<Toaster position='bottom-left' reverseOrder={false} />
			<div className={Styles.innerContainer}>
				<div className={Styles.header}>
					<Avatar className={Styles.avatar}>
						{userfound.name.charAt(0).toUpperCase()}
					</Avatar>
					<div className={Styles.list}>
						<ul>
							<li className={Styles.userName}>{userfound.username}</li>
							<li>{userfound.name}</li>
							<li>{userfound.isAdmin ? 'Administrator' : ''}</li>
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
				{/* <div className={Styles.loader}>{loadingDisplay && <Loader />}</div> */}
			</div>
		</div>
	);
};

export default EditExam;

//*Removing default search bar :)
EditExam.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};