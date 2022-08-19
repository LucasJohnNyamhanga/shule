import Styles from '../../../styles/accountAdmin.module.scss';
import Avatar from '@mui/material/Avatar';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { prisma } from '../../../db/prisma';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import SelectMiu from '../../../components/tools/SelectMui';
import { NavContext } from '../../../components/context/StateContext';
import CardBox from '../../../components/tools/cardBoxWithView';
import { getSession } from 'next-auth/react';
export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);
	const url = process.env.MAIN_URL;

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

		if (!userfound.isAdmin && !userfound.isSuperUser) {
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
			isSuperUser: true,
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
			order: {
				orderBy: {
					createdAt: 'desc',
				},
				select: {
					id: true,
					orderNumber: true,
					status: true,
					createdAt: true,
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
			url,
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
    	url,
    }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);

	type userType = {
		id: number;
		image: string | null;
		username: string;
		password: string;
		isAdmin: boolean;
		isSuperUser: boolean;
		dateJoined: Date;
		name: string;
		updatedAt: Date;
		isOnline: boolean;
		vifurushi: {
			name: string;
			value: number;
		}[];
	};

	const { navActive, setNavActive, userData } = useContext(NavContext);
	const [packageSelected, setPackageSelected] = useState({
		packageId: '',
	});

	const [role, setRole] = useState({
		role: '',
	});
	const [activateRole, setActivateRole] = useState(false);
	const [ready, setReady] = useState(false);
	const [user, setUser] = useState<userType>();

	let checkUser = async () => {
		axios
			.post(url + '/api/getUser', {
				username: userfound.username,
			})
			.then(function (response) {
				//responce
				const userData = JSON.parse(JSON.stringify(response.data));
				setUser(userData);
			})
			.catch(function (error) {
				// handle error
				console.log('Something went wrong');
			});
	};

	const updateUserStatus = (data: {
		id: number;
		isAdmin: boolean;
		isSuperUser: boolean;
	}) => {
		axios({
			method: 'post',
			url: url + '/api/updateUserStatus',
			data: data,
		})
			.then(function (response) {
				// handle success

				if (response.data.type == 'success') {
					checkUser();
					notifySuccess(response.data.message);
					setRole({ role: '' });
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

	const handleSelect = (value: string) => {
		setPackageSelected({ packageId: value });
	};

	const handleSelectRole = (value: string) => {
		setRole({ role: value });
	};

	const updateRole = () => {
		let data: { id: number; isAdmin: boolean; isSuperUser: boolean };
		switch (role.role) {
			case 'super':
				console.log(role.role);
				if (user.isSuperUser) {
					notifyError(`${user.name} is already a super admin`);
				} else {
					data = {
						id: userfound.id,
						isAdmin: true,
						isSuperUser: true,
					};
					updateUserStatus(data);
				}
				break;
			case 'admin':
				if (user.isAdmin && !user.isSuperUser) {
					notifyError(`${user.name} is already an admin`);
				} else {
					data = {
						id: userfound.id,
						isAdmin: true,
						isSuperUser: false,
					};
					updateUserStatus(data);
				}

				break;
			case 'user':
				if (!user.isAdmin) {
					notifyError(`${user.name} is already a normal user`);
				} else {
					console.log(role.role);
					data = {
						id: userfound.id,
						isAdmin: false,
						isSuperUser: false,
					};
					updateUserStatus(data);
				}
				break;

			default:
				break;
		}
	};

	const reset = () => {
		setActivateRole(!activateRole);
		setRole({ role: '' });
	};

	let sendToDatabase = (databaseData: {}) => {
		let database = { ...databaseData, id: userfound.id };
		axios({
			method: 'post',
			url: url + '/api/updateKifurushi',
			data: database,
		})
			.then(function (response) {
				// handle success
				if (response.data.type == 'success') {
					checkUser();
					notifySuccess(response.data.message);
					setPackageSelected({ packageId: '' });
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

	let handleBuy = () => {
		vifurushi.find((kifurushi) => {
			if (kifurushi.id === packageSelected.packageId) {
				sendToDatabase({
					booksDownload: kifurushi.booksDownload,
					examAccess: kifurushi.examAccess,
					examsSolvedDownload: kifurushi.examsSolvedDownload,
					examsUnsolvedDownload: kifurushi.examsUnsolvedDownload,
					notesDownload: kifurushi.notesDownload,
					quizExcercises: kifurushi.quizExcercises,
				});
			}
		});
	};

	function timeAgo(time) {
		switch (typeof time) {
			case 'number':
				break;
			case 'string':
				time = +new Date(time);
				break;
			case 'object':
				if (time.constructor === Date) time = time.getTime();
				break;
			default:
				time = +new Date();
		}
		var time_formats = [
			[60, 'seconds', 1], // 60
			[120, '1 minute ago', '1 minute from now'], // 60*2
			[3600, 'minutes', 60], // 60*60, 60
			[7200, '1 hour ago', '1 hour from now'], // 60*60*2
			[86400, 'hours', 3600], // 60*60*24, 60*60
			[172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
			[604800, 'days', 86400], // 60*60*24*7, 60*60*24
			[1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
			[2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
			[4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
			[29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
			[58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
			[2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
			[5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
			[58060800000, 'centuries', 2903040000], // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
		];
		var seconds = (+new Date() - time) / 1000,
			token = 'ago',
			list_choice = 1;

		if (seconds == 0) {
			return 'Just now';
		}
		if (seconds < 0) {
			seconds = Math.abs(seconds);
			token = 'from now';
			list_choice = 2;
		}
		var i = 0,
			format;
		while ((format = time_formats[i++]))
			if (seconds < format[0]) {
				if (typeof format[2] == 'string') return format[list_choice];
				else
					return (
						Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token
					);
			}
		return time;
	}

	function customTruncate(str: string, size) {
		return str.length > size ? str.slice(0, size) + '...' : str;
	}

	useEffect(() => {
		setNavActive('Admin');
		setUser(userfound);
		setReady(true);
	}, []);

	console.log(user);
	if (!ready) return <div className={Styles.container}></div>;
	if (ready)
		return (
			<div className={Styles.container}>
				<Toaster position='top-center' reverseOrder={false} />
				<div className={Styles.innerContainer}>
					<div className={Styles.header}>
						<Avatar className={Styles.avatar}>
							{user.name.charAt(0).toUpperCase()}
						</Avatar>
						<div className={Styles.list}>
							<ul>
								<li className={Styles.userName}>{user.username}</li>
								<li>{user.name}</li>
								<li>
									{user.isSuperUser
										? 'Super Admin'
										: user.isAdmin
										? 'Administrator'
										: ''}
								</li>
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
							<div onClick={updateRole} className={Styles.imageSelect}>
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
										{user.vifurushi.map((furushi) => (
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
										))}
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
						<div onClick={handleBuy} className={Styles.imageSelect}>
							Update Package
						</div>
					</div>
					{/* <div className={Styles.loader}>{loadingDisplay && <Loader />}</div> */}
					{userfound.order.length > 0 && (
						<>
							<div className={Styles.headerOrder}>Order List</div>

							<div className={Styles.order}>
								{userfound.order.map(
									(
										user: {
											id: number;
											orderNumber: string;
											description: string;
											status: boolean;
											createdAt: Date;
										},
										index: number
									) => (
										<CardBox
											link={'/Admin/User/Order/' + user.id}
											label={customTruncate(
												`${index + 1}. Order ${user.orderNumber}`,
												24
											)}
											id={user.id}
											key={user.id}
											published={user.status}
											time={timeAgo(user.createdAt)}
										/>
									)
								)}
							</div>
						</>
					)}
				</div>
			</div>
		);
};

export default EditExam;

//*Removing default search bar :)
EditExam.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};
