import { ChangeEvent, ReactNode, useContext, useRef, useState } from 'react';
import Styles from '../styles/account.module.scss';
import { useRouter } from 'next/router';
import { NavContext } from '../components/context/StateContext';
import Avatar from '@mui/material/Avatar';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { getSession } from 'next-auth/react';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Loader from '../components/tools/loader';

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
				username: true,
				name: true,
				vifurushi: {},
			},
		});
		const userfound = await JSON.parse(JSON.stringify(userFromServer));

		return {
			props: {
				userfound,
			},
		};
	}
};

function Pricing({
	userfound,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	console.log(userfound.vifurushi);

	const password = useRef<HTMLInputElement>(null!);
	const password1 = useRef<HTMLInputElement>(null!);
	const password2 = useRef<HTMLInputElement>(null!);
	const [resetPassword, setResetPassword] = useState(false);
	const [loadingDisplay, setLoadingDisplay] = useState(false);

	let handletextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value;
		let name = e.target.name;
	};

	let togglePasswordSignUp = (e: ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			password1.current.type = 'text';
			password2.current.type = 'text';
		} else {
			password1.current.type = 'password';
			password2.current.type = 'password';
		}
	};

	let reset = () => {
		setResetPassword(!resetPassword);
		setResetPassword(!resetPassword);
	};

	let resetPasswordNow = () => {};

	return (
		<div className={Styles.container}>
			<div className={Styles.innerContainer}>
				{!resetPassword && (
					<>
						<div className={Styles.header}>
							<Avatar className={Styles.avatar}>
								{userfound.name.charAt(0).toUpperCase()}
							</Avatar>
							<div className={Styles.list}>
								<ul>
									<li>{userfound.name}</li>
									<li>{userfound.username}</li>
									<li>{userfound.isAdmin ? 'Administrator' : ''}</li>
									<li className={Styles.edit} onClick={reset}>
										Edit Password
									</li>
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
											<tr>
												<td>Notes Download </td>
												<td>0</td>
											</tr>
											<tr>
												<td>Quiz Exercise </td>
												<td>0</td>
											</tr>
											<tr>
												<td>UnSolved Exam Download </td>
												<td>0</td>
											</tr>
											<tr>
												<td>Solved Exam Download </td>
												<td>0</td>
											</tr>
											<tr>
												<td>Books Download </td>
												<td>0</td>
											</tr>
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
									value={''}
									placeholder={`Current Password`}
									name={'firstName'}
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
									value={''}
									placeholder={`New Password`}
									name={'lastName'}
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
									value={''}
									placeholder={`Retype New Password`}
									name={'username'}
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
}

export default Pricing;

//*Removing default search bar :)
Pricing.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};
