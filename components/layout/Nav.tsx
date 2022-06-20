import React, { useContext } from 'react';
import Styles from '../../styles/navigation.module.scss';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import Link from 'next/link';
import { NavContext } from '../../components/context/StateContext';

const Nav = () => {
	const { setNavActive, navActive } = useContext(NavContext);
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
							</ul>
						</div>
						<div className={Styles.buttonsNav}>
							{/* <div className={Styles.Sign}></div> */}
							<div className={Styles.Register}>Sign In</div>
						</div>
					</nav>
				</div>
			</div>
		</div>
	);
};

export default Nav;
