import React, { useContext, useEffect, useState } from 'react';
import Styles from '../../styles/navigation.module.scss';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Link from 'next/link';
import { NavContext } from '../../components/context/StateContext';
import { useSession, getSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import axios from 'axios';

type userData = {
	id: number;
	isAdmin: boolean;
	userName: string;
	image: string;
};

const Nav = () => {
	const { setNavActive, navActive, userData, setUserData } =
		useContext(NavContext);
	const { data: session, status } = useSession();

	const { push, asPath } = useRouter();

	let handleSignIn = () => {
		push(`/Auth/SignIn?callbackUrl=${asPath}`);
	};

	let handleLogOut = () => {
		signOut({ redirect: false });
		push('/');
	};

	let checkUser = async () => {
		const session = await getSession();
		if (session) {
			let data = session.user.email;
			axios
				.post('http://localhost:3000/api/getUser', { username: data })
				.then(function (response) {
					//responce
					const userData = JSON.parse(JSON.stringify(response.data));
					setUserData({
						id: userData.id,
						isAdmin: userData.isAdmin,
						userName: userData.userName,
						image: userData.image,
					});
				})
				.catch(function (error) {
					// handle error
					console.log('Something went wrong');
				});
		}
	};

	useEffect(() => {
		if (status === 'authenticated') {
			checkUser();
		}
	}, [status, userData]);

	return (
		<div className={Styles.container}>
			<div className={Styles.innerContainerTop}>
				<div className={Styles.NavDetails}>
					<div className={Styles.topAdvatisment}>
						<p>This is only a demo version for developing purpose only. </p>
					</div>
				</div>
				<div className={Styles.NavHeader}>
					<nav className={Styles.nav}>
						<Link passHref href='/'>
							<a>
								<div className={Styles.logo}>
									<div className={Styles.icon}>
										<AutoStoriesIcon />
									</div>
									<div className={Styles.shule}>Shule</div>
								</div>
							</a>
						</Link>
						<div className={Styles.links}>
							<ul>
								<Link href='/'>
									<a>
										<div
											onClick={() => {
												setNavActive('Notes');
											}}>
											<li
												className={
													'Notes' == navActive ? Styles.active : Styles.links
												}>
												Notes
											</li>
										</div>
									</a>
								</Link>
								<Link href='/Review'>
									<a>
										<div
											onClick={() => {
												setNavActive('Review');
											}}>
											<li
												className={
													'Review' == navActive ? Styles.active : Styles.links
												}>
												Review
											</li>
										</div>
									</a>
								</Link>
								<Link href='/Exams'>
									<a>
										<div
											onClick={() => {
												setNavActive('Exams');
											}}>
											<li
												className={
													'Exams' == navActive ? Styles.active : Styles.links
												}>
												Exams
											</li>
										</div>
									</a>
								</Link>
								<Link href='/References'>
									<a>
										<div
											onClick={() => {
												setNavActive('References');
											}}>
											<li
												className={
													'References' == navActive
														? Styles.active
														: Styles.links
												}>
												References
											</li>
										</div>
									</a>
								</Link>
								{session && userData.isAdmin && (
									<Link href='/Admin'>
										<a>
											<div
												onClick={() => {
													setNavActive('Admin');
												}}>
												<li
													className={
														'Admin' == navActive ? Styles.active : Styles.links
													}>
													Admin
												</li>
											</div>
										</a>
									</Link>
								)}
							</ul>
						</div>
						<div className={Styles.buttonsNav}>
							{session ? (
								<div onClick={handleLogOut} className={Styles.Register}>
									Log Out
								</div>
							) : (
								<>
									{/* <div className={Styles.Sign}>
										Sign In
									</div> */}
									<div onClick={handleSignIn} className={Styles.Register}>
										Sign In
									</div>
								</>
							)}
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Nav;
