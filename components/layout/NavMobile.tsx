import React, { useContext } from 'react';
import Styles from '../../styles/NavMobile.module.scss';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import { useRef } from 'react';
import Link from 'next/link';
import DrawerMobile from '../tools/DrawerMobileMenu';
import { NavContext } from '../context/StateContext';

export const NavMobile = () => {
	const { navActive, setNavActive } = useContext(NavContext);

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
						<DrawerMobile handleMenu={handleMobileMenu} navActive={navActive} />
					</nav>
				</div>
			</div>
		</div>
	);
};

export default NavMobile;
