import React, { useContext, useEffect, useState } from 'react';
import Styles from '../../styles/navigation.module.scss';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Link from 'next/link';
import { NavContext } from '../../components/context/StateContext';
import { useSession, getSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import User from '../layout/User';

const Nav = () => {
	const { setNavActive, navActive } = useContext(NavContext);
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

	useEffect(() => {}, [navActive]);

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
							{status == 'loading' ? (
								<div className={Styles.validating}>Validating...</div>
							) : session ? (
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
