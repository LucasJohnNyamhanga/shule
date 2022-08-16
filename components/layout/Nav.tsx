import React, { useContext, useEffect, useState } from 'react';
import Styles from '../../styles/navigation.module.scss';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Link from 'next/link';
import { NavContext } from '../../components/context/StateContext';
import { useSession, getSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import axios from 'axios';
import User from '../layout/User';

const Nav = () => {
	const { setNavActive, navActive, userData, setUserData } =
		useContext(NavContext);
	const { data: session, status } = useSession();
	const [limt, setLimit] = useState(0);

	const { push, asPath } = useRouter();

	let handleSignIn = () => {
		push(`/Auth/SignIn?callbackUrl=${asPath}`);
	};

	let handleLogOut = () => {
		signOut({ redirect: false }).then(() => {
			setLimit(0);
			push('/');
		});
	};

	let checkUser = async () => {
		const session = await getSession();
		if (session) {
			if (limt <= 5) {
				let data = session.user.email;
				axios
					.post('http://localhost:3000/api/getUser', { username: data })
					.then(function (response) {
						//responce
						const userData = JSON.parse(JSON.stringify(response.data));
						setUserData({
							id: userData.id,
							isAdmin: userData.isAdmin,
							userName: userData.username,
							image: userData.image,
							isSuperUser: userData.isSuperUser,
						});
					})
					.catch(function (error) {
						// handle error
						console.log('Something went wrong');
						setUserData({
							id: '',
							isAdmin: false,
							userName: '',
							image: '',
							isSuperUser: false,
						});
					});
				setLimit(limt + 1);
			}
		}
	};

	useEffect(() => {
		if (session) {
			if (status === 'authenticated') {
				checkUser();
			} else {
				setLimit(0);
			}
		} else {
			setUserData({
				id: '',
				isAdmin: false,
				userName: '',
				image: '',
				isSuperUser: false,
			});
		}
	}, [session]);

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
												Quiz
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
												Library
											</li>
										</div>
									</a>
								</Link>
							</ul>
						</div>
						<div className={Styles.buttonsNav}>
							{session ? (
								<>
									<User signOut={handleLogOut} />
								</>
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
