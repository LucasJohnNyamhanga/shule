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
									<ListItem
										button
										className={active == 'Subjects' ? `${Styles.active}` : ''}>
										<ListItemText primary={'Subject'} />
									</ListItem>
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
									<ListItem
										button
										className={active == 'Forms' ? `${Styles.active}` : ''}>
										<ListItemText primary={'Forms'} />
									</ListItem>
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
									<ListItem
										button
										className={active == 'Topics' ? `${Styles.active}` : ''}>
										<ListItemText primary={'Topic'} />
									</ListItem>
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
									<ListItem
										button
										className={active == 'Notes' ? `${Styles.active}` : ''}>
										<ListItemText primary={'Notes'} />
									</ListItem>
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
									<ListItem
										button
										className={active == 'Downloads' ? `${Styles.active}` : ''}>
										<ListItemText primary={'Downloadables'} />
									</ListItem>
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
									<ListItem
										button
										className={
											active == 'SubjectsReview' ? `${Styles.active}` : ''
										}>
										<ListItemText primary={'Subject'} />
									</ListItem>
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
									<ListItem
										button
										className={
											active == 'FormsReview' ? `${Styles.active}` : ''
										}>
										<ListItemText primary={'Forms'} />
									</ListItem>
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
									<ListItem
										button
										className={
											active == 'TopicsReview' ? `${Styles.active}` : ''
										}>
										<ListItemText primary={'Topics'} />
									</ListItem>
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
									<ListItem
										button
										className={active == 'Review' ? `${Styles.active}` : ''}>
										<ListItemText primary={'Review'} />
									</ListItem>
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
									<ListItem
										button
										className={active == 'Questions' ? `${Styles.active}` : ''}>
										<ListItemText primary={'Questions'} />
									</ListItem>
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
									<ListItem
										button
										className={
											active == 'SubjectsExam' ? `${Styles.active}` : ''
										}>
										<ListItemText primary={'Subject'} />
									</ListItem>
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
									<ListItem
										button
										className={active == 'FormsExam' ? `${Styles.active}` : ''}>
										<ListItemText primary={'Forms'} />
									</ListItem>
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
									<ListItem
										button
										className={active == 'ExamType' ? `${Styles.active}` : ''}>
										<ListItemText primary={'Exam Type'} />
									</ListItem>
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
									<ListItem
										button
										className={active == 'Exam' ? `${Styles.active}` : ''}>
										<ListItemText primary={'Exams'} />
									</ListItem>
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
									<ListItem
										button
										className={
											active == 'ExamDownloads' ? `${Styles.active}` : ''
										}>
										<ListItemText primary={'Downloadables'} />
									</ListItem>
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
									<ListItem
										button
										className={
											active == 'SubjectReference' ? `${Styles.active}` : ''
										}>
										<ListItemText primary={'Subject'} />
									</ListItem>
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
									<ListItem
										button
										className={
											active == 'FormReference' ? `${Styles.active}` : ''
										}>
										<ListItemText primary={'Forms'} />
									</ListItem>
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
									<ListItem
										button
										className={active == 'Reference' ? `${Styles.active}` : ''}>
										<ListItemText primary={'Reference'} />
									</ListItem>
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
											<ListItem
												button
												className={active == 'User' ? `${Styles.active}` : ''}>
												<ListItemText primary={'User'} />
											</ListItem>
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
