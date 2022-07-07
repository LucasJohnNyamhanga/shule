import React, { useContext, useEffect, useState } from 'react';
import Styles from '../../styles/NavMobile.module.scss';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useRef } from 'react';
import Link from 'next/link';
import DrawerMobile from '../tools/DrawerMobileMenu';
import { NavContext } from '../context/StateContext';
import { useSession, getSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import axios from 'axios';

export const NavMobile = () => {
	const { navActive, setNavActive, userData, setUserData } =
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
			if (limt <= 6) {
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
				setLimit(limt + 1);
			}
		}
	};

	useEffect(() => {
		if (session) {
			if (status === 'authenticated') {
				checkUser();
			}
		} else {
			setUserData({
				id: '',
				isAdmin: false,
				userName: '',
				image: '',
			});
		}
	}, [status, limt, session]);

	let handleMobileMenu = (linkValue: string) => {
		setNavActive(linkValue);
	};

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
							<div className={Styles.logo}>
								<div className={Styles.icon}>
									<AutoStoriesIcon />
								</div>
								<div className={Styles.shule}>Shule</div>
							</div>
						</Link>
						<div className={Styles.links}></div>
						<DrawerMobile
							handleMenu={handleMobileMenu}
							navActive={navActive}
							userData={userData}
							handleSignOut={handleLogOut}
							handleSighIn={handleSignIn}
						/>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default NavMobile;
