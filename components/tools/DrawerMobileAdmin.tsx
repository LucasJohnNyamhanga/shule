import {
	Drawer,
	Box,
	List,
	ListItem,
	ListItemText,
	Divider,
	ListItemButton,
} from '@mui/material';
import Link from 'next/link';
import { type } from 'os';
import { useEffect, useState } from 'react';
import Styles from '../../styles/drawer.module.scss';

type dataType = {
	textHeader: string;
	active: string;
	userData: {
		id: string;
		isAdmin: boolean;
		userName: string;
		image: string;
		isSuperUser: boolean;
	};
	handleClick: (value: string) => void;
};

export const MuiDrawer = ({
	textHeader,
	active,
	handleClick,
	userData,
}: dataType) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

	useEffect(() => {}, [active]);

	return (
		<>
			<div
				onClick={() => {
					setIsDrawerOpen(true);
				}}
				className={Styles.setCenter}>
				{textHeader}
			</div>
			<Drawer
				anchor='left'
				open={isDrawerOpen}
				onClose={() => setIsDrawerOpen(false)}>
				<Box p={2} width='250px' textAlign='center' role='presentation'>
					<ListItemText primary={textHeader} />
					<div className={Styles.headerDash}>Notes</div>
					<List>
						<Divider />
						<div
							onClick={() => {
								setIsDrawerOpen(false);
								handleClick('Subjects');
							}}>
							<Link passHref href={``}>
								<a>
									<div
										className={active == 'Subjects' ? `${Styles.active}` : ''}>
										{'Subject'}
									</div>
								</a>
							</Link>
						</div>
						<Divider />
						<div
							onClick={() => {
								setIsDrawerOpen(false);
								handleClick('Forms');
							}}>
							<Link passHref href={``}>
								<a>
									<div className={active == 'Forms' ? `${Styles.active}` : ''}>
										{'Forms'}
									</div>
								</a>
							</Link>
						</div>
						<Divider />
						<div
							onClick={() => {
								setIsDrawerOpen(false);
								handleClick('Topics');
							}}>
							<Link passHref href={``}>
								<a>
									<div className={active == 'Topics' ? `${Styles.active}` : ''}>
										{'Topic'}
									</div>
								</a>
							</Link>
						</div>
						<Divider />
						<div
							onClick={() => {
								setIsDrawerOpen(false);
								handleClick('Notes');
							}}>
							<Link passHref href={``}>
								<a>
									<div className={active == 'Notes' ? `${Styles.active}` : ''}>
										{'Notes'}
									</div>
								</a>
							</Link>
						</div>
						<Divider />
						<div
							onClick={() => {
								setIsDrawerOpen(false);
								handleClick('Downloads');
							}}>
							<Link passHref href={``}>
								<a>
									<div
										className={active == 'Downloads' ? `${Styles.active}` : ''}>
										{'Downloadables'}
									</div>
								</a>
							</Link>
						</div>
						<Divider />
					</List>
					<div className={Styles.headerDash}>Review</div>
					<List>
						<Divider />
						<div
							onClick={() => {
								setIsDrawerOpen(false);
								handleClick('SubjectsReview');
							}}>
							<Link passHref href={``}>
								<a>
									<div
										className={
											active == 'SubjectsReview' ? `${Styles.active}` : ''
										}>
										{'Subject'}
									</div>
								</a>
							</Link>
						</div>
						<Divider />
						<div
							onClick={() => {
								setIsDrawerOpen(false);
								handleClick('FormsReview');
							}}>
							<Link passHref href={``}>
								<a>
									<div
										className={
											active == 'FormsReview' ? `${Styles.active}` : ''
										}>
										{'Forms'}
									</div>
								</a>
							</Link>
						</div>
						<Divider />
						<div
							onClick={() => {
								setIsDrawerOpen(false);
								handleClick('TopicsReview');
							}}>
							<Link passHref href={``}>
								<a>
									<div
										className={
											active == 'TopicsReview' ? `${Styles.active}` : ''
										}>
										{'Topics'}
									</div>
								</a>
							</Link>
						</div>
						<Divider />
						<div
							onClick={() => {
								setIsDrawerOpen(false);
								handleClick('Review');
							}}>
							<Link passHref href={``}>
								<a>
									<div className={active == 'Review' ? `${Styles.active}` : ''}>
										{'Review'}
									</div>
								</a>
							</Link>
						</div>
						<Divider />
						<div
							onClick={() => {
								setIsDrawerOpen(false);
								handleClick('Questions');
							}}>
							<Link passHref href={``}>
								<a>
									<div
										className={active == 'Questions' ? `${Styles.active}` : ''}>
										{'Questions'}
									</div>
								</a>
							</Link>
						</div>
						<Divider />
					</List>
					<div className={Styles.headerDash}>Exam</div>
					<List>
						<Divider />
						<div
							onClick={() => {
								setIsDrawerOpen(false);
								handleClick('SubjectsExam');
							}}>
							<Link passHref href={``}>
								<a>
									<div
										className={
											active == 'SubjectsExam' ? `${Styles.active}` : ''
										}>
										{'Subject'}
									</div>
								</a>
							</Link>
						</div>
						<Divider />
						<div
							onClick={() => {
								setIsDrawerOpen(false);
								handleClick('FormsExam');
							}}>
							<Link passHref href={``}>
								<a>
									<div
										className={active == 'FormsExam' ? `${Styles.active}` : ''}>
										{'Forms'}
									</div>
								</a>
							</Link>
						</div>
						<Divider />
						<div
							onClick={() => {
								setIsDrawerOpen(false);
								handleClick('ExamType');
							}}>
							<Link passHref href={``}>
								<a>
									<div
										className={active == 'ExamType' ? `${Styles.active}` : ''}>
										{'Exam Type'}
									</div>
								</a>
							</Link>
						</div>
						<Divider />
						<div
							onClick={() => {
								setIsDrawerOpen(false);
								handleClick('Exam');
							}}>
							<Link passHref href={``}>
								<a>
									<div className={active == 'Exam' ? `${Styles.active}` : ''}>
										{'Exams'}
									</div>
								</a>
							</Link>
						</div>
						<Divider />
						<div
							onClick={() => {
								setIsDrawerOpen(false);
								handleClick('ExamDownloads');
							}}>
							<Link passHref href={``}>
								<a>
									<div
										className={
											active == 'ExamDownloads' ? `${Styles.active}` : ''
										}>
										{'Downloadables'}
									</div>
								</a>
							</Link>
						</div>
						<Divider />
					</List>
					<div className={Styles.headerDash}>Reference</div>
					<List>
						<Divider />
						<div
							onClick={() => {
								setIsDrawerOpen(false);
								handleClick('SubjectReference');
							}}>
							<Link passHref href={``}>
								<a>
									<div
										className={
											active == 'SubjectReference' ? `${Styles.active}` : ''
										}>
										{'Subject'}
									</div>
								</a>
							</Link>
						</div>
						<Divider />
						<div
							onClick={() => {
								setIsDrawerOpen(false);
								handleClick('FormReference');
							}}>
							<Link passHref href={``}>
								<a>
									<div
										className={
											active == 'FormReference' ? `${Styles.active}` : ''
										}>
										{'Forms'}
									</div>
								</a>
							</Link>
						</div>
						<Divider />
						<div
							onClick={() => {
								setIsDrawerOpen(false);
								handleClick('Reference');
							}}>
							<Link passHref href={``}>
								<a>
									<div
										className={active == 'Reference' ? `${Styles.active}` : ''}>
										{'Reference'}
									</div>
								</a>
							</Link>
						</div>
						<Divider />
					</List>
					{userData.isSuperUser && (
						<>
							<div className={Styles.headerDash}>Users</div>
							<List>
								<Divider />
								<div
									onClick={() => {
										setIsDrawerOpen(false);
										handleClick('User');
									}}>
									<Link passHref href={``}>
										<a>
											<div
												className={active == 'User' ? `${Styles.active}` : ''}>
												{'User'}
											</div>
										</a>
									</Link>
								</div>
								<Divider />
								<div
									onClick={() => {
										setIsDrawerOpen(false);
										handleClick('Admin');
									}}>
									<Link passHref href={``}>
										<a>
											<div
												className={active == 'Admin' ? `${Styles.active}` : ''}>
												{'Admin'}
											</div>
										</a>
									</Link>
								</div>
								<Divider />
							</List>
						</>
					)}
				</Box>
			</Drawer>
		</>
	);
};

export default MuiDrawer;
