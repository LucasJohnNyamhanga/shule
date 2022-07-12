import { Drawer, Box, List, ListItemText, Divider } from '@mui/material';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import Styles from '../../styles/drawerMobile.module.scss';

type dataType = {
	handleMenu: (linkValue: string) => void;
	handleSignOut: () => void;
	handleSighIn: () => void;
	navActive: string;
	userData: {
		id: string;
		isAdmin: boolean;
		userName: string;
		image: string;
	};
};

export const MuiDrawer = ({
	handleMenu,
	navActive,
	userData,
	handleSignOut,
	handleSighIn,
}: dataType) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const humberger = useRef<HTMLDivElement>(null!);

	useEffect(() => {}, [navActive, userData]);

	let handleMenuClick = (linkValue: string) => {
		humberger.current.classList.toggle(Styles.isActive);

		setIsDrawerOpen(!isDrawerOpen);
		if (linkValue != '') {
			handleMenu(linkValue);
		}
	};

	let handleClose = () => {
		setIsDrawerOpen(!isDrawerOpen);
		humberger.current.classList.toggle(Styles.isActive);
	};

	const notes = useRef<HTMLDivElement>(null!);
	const review = useRef<HTMLDivElement>(null!);
	const exam = useRef<HTMLDivElement>(null!);
	const reference = useRef<HTMLDivElement>(null!);
	const admin = useRef<HTMLDivElement>(null!);

	return (
		<>
			<div
				ref={humberger}
				onClick={() => {
					handleMenuClick('');
				}}
				className={`${Styles.buttonsNav}`}>
				<span></span>
				<span></span>
				<span></span>
			</div>
			<Drawer anchor='left' open={isDrawerOpen} onClose={handleClose}>
				<Box p={2} width='250px' textAlign='center' role='presentation'>
					<ListItemText primary={`SHULE MENU`} />

					<List>
						<Divider />
						<Link href={'/'}>
							<a>
								<div
									ref={notes}
									className={
										'Notes' == navActive ? Styles.active : Styles.setCenter
									}
									onClick={() => {
										handleMenuClick('Notes');
									}}>
									Notes
								</div>
							</a>
						</Link>
						<Divider />
						<Link href={'/Review'}>
							<a>
								<div
									ref={review}
									className={
										'Review' == navActive ? Styles.active : Styles.setCenter
									}
									onClick={() => {
										handleMenuClick('Review');
									}}>
									Quiz
								</div>
							</a>
						</Link>
						<Divider />
						<Link href={'/Exams'}>
							<a>
								<div
									ref={exam}
									className={
										'Exams' == navActive ? Styles.active : Styles.setCenter
									}
									onClick={() => {
										handleMenuClick('Exams');
									}}>
									Exams
								</div>
							</a>
						</Link>
						<Divider />
						<Link href={'/References'}>
							<a>
								<div
									ref={reference}
									className={
										'References' == navActive ? Styles.active : Styles.setCenter
									}
									onClick={() => {
										handleMenuClick('References');
									}}>
									Library
								</div>
							</a>
						</Link>
						<Divider />
						{userData.isAdmin && (
							<>
								<Link href={'/Admin'}>
									<a>
										<div
											ref={admin}
											className={
												'Admin' == navActive ? Styles.active : Styles.setCenter
											}
											onClick={() => {
												handleMenuClick('Admin');
											}}>
											Admin
										</div>
									</a>
								</Link>
								<Divider />
							</>
						)}
					</List>
					<ListItemText primary={`ACCOUNT`} />
					<Divider />
					<List>
						{userData.id == '' ? (
							<>
								<div
									className={Styles.activeCredential}
									onClick={() => {
										handleSighIn();
										handleMenuClick('');
									}}>
									Sign In
								</div>
								<Divider />
							</>
						) : (
							<>
								<Link href={'#'}>
									<a>
										<div
											onClick={() => {
												handleMenuClick('');
											}}
											className={Styles.setCenter}>
											My Account
										</div>
									</a>
								</Link>
								<Divider />
								<Link href={'/Pricing'}>
									<a>
										<div
											onClick={() => {
												handleMenuClick('');
											}}
											className={Styles.setCenter}>
											Pricing
										</div>
									</a>
								</Link>
								<Divider />
								<div
									className={Styles.activeCredential}
									onClick={() => {
										handleSignOut();
										handleMenuClick('');
									}}>
									Sign Out
								</div>
								<Divider />
							</>
						)}
						<Divider />
					</List>
				</Box>
			</Drawer>
		</>
	);
};

export default MuiDrawer;
