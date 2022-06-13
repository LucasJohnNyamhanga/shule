import {
	Drawer,
	Box,
	List,
	ListItem,
	ListItemText,
	Divider,
} from '@mui/material';
import Link from 'next/link';
import { type } from 'os';
import { useContext, useRef, useState } from 'react';
import Styles from '../../styles/drawerMobile.module.scss';
import { NavContext } from '../context/StateContext';

type dataType = {
	textHeader: string;
	active: number;
	topic: {
		id: number;
		topicName: string;
		topicDefinition: string;
		form: {
			formName: string;
		};
		subject: {
			subjectName: string;
		};
	}[];
	link: string;
};

export const MuiDrawer = ({ textHeader, topic, active, link }: dataType) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);
	const humberger = useRef<HTMLDivElement>(null!);
	const { navActive, setNavActive } = useContext(NavContext);

	let handleMenuClick = (linkValue: string) => {
		humberger.current.classList.toggle(Styles.isActive);
		setIsDrawerOpen(!isDrawerOpen);
		if (linkValue != '') {
			setNavActive(linkValue);
		}
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
			<Drawer anchor='left' open={isDrawerOpen} onClose={handleMenuClick}>
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
									Review
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
									Reference
								</div>
							</a>
						</Link>
						<Divider />
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
					</List>
				</Box>
			</Drawer>
		</>
	);
};

export default MuiDrawer;