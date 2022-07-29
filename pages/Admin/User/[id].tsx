import Styles from '../../../styles/accountAdmin.module.scss';
import Avatar from '@mui/material/Avatar';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { prisma } from '../../../db/prisma';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import SelectMiu from '../../../components/tools/SelectMui';
import { NavContext } from '../../../components/context/StateContext';

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
					id: true,
					name: true,
					value: true,
				},
			},
		},
	});
	const userfound = await JSON.parse(JSON.stringify(userFromServer));

	const vifurushiFromServer = await prisma.vifurushiPackage.findMany({
		select: {
			id: true,
			name: true,
			description: true,
			price: true,
			booksDownload: true,
			examAccess: true,
			examsSolvedDownload: true,
			examsUnsolvedDownload: true,
			notesDownload: true,
			quizExcercises: true,
		},
	});
	const vifurushi = await JSON.parse(JSON.stringify(vifurushiFromServer));

	await prisma.$disconnect();
	return {
		props: {
			userfound,
			vifurushi,
		},
	};
};

type formData = {
	label: string;
	value: string;
}[];

const EditExam = ({
	userfound,
	vifurushi,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);

	const { navActive, setNavActive, userData } = useContext(NavContext);

	useEffect(() => {
		setNavActive('Admin');
	}, []);

	const [packageSelected, setPackageSelected] = useState({
		packageId: '',
	});

	const [role, setRole] = useState({
		role: '',
	});
	const [activateRole, setActivateRole] = useState(false);

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

	let options: { label: string; value: string }[] = [];

	for (const kifurushi of vifurushi) {
		options.push({
			label: `${kifurushi.name} ${kifurushi.description}`,
			value: kifurushi.id,
		});
	}

	let optionsRole: { label: string; value: string }[] = [];
	optionsRole.push(
		{
			label: `Super`,
			value: 'super',
		},
		{
			label: `Admin`,
			value: 'admin',
		},
		{
			label: `User`,
			value: 'user',
		}
	);

	let handleSelect = (value: string) => {
		setPackageSelected({ packageId: value });
	};

	let handleSelectRole = (value: string) => {
		setRole({ role: value });
	};

	let handleKifurushiUpdate = () => {};
	let reset = () => {
		setActivateRole(!activateRole);
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
							<li className={Styles.edit} onClick={reset}>
								Edit Role
							</li>
						</ul>
					</div>
				</div>
				{activateRole && (
					<div>
						<div className={Styles.divSelector}>
							<SelectMiu
								displayLabel='Select Role'
								forms={optionsRole}
								handlechange={handleSelectRole}
								value={role.role}
							/>
						</div>
						<div onClick={handleKifurushiUpdate} className={Styles.imageSelect}>
							Update Role
						</div>
					</div>
				)}
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
					<div className={Styles.headerUpdate}>Update User Package</div>
					<div className={Styles.divSelector}>
						<SelectMiu
							displayLabel='Select Kifurushi'
							forms={options}
							handlechange={handleSelect}
							value={packageSelected.packageId}
						/>
					</div>
					<div onClick={handleKifurushiUpdate} className={Styles.imageSelect}>
						Update Package
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
