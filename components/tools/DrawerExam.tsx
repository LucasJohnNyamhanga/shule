import {
	Drawer,
	Box,
	List,
	ListItem,
	ListItemText,
	Divider,
} from '@mui/material';
import { examType } from '@prisma/client';
import Link from 'next/link';
import { type } from 'os';
import { useState } from 'react';
import Styles from '../../styles/drawer.module.scss';

type dataType = {
	textHeader: string;
	active: number;
	topic: {
		[x: string]: any;
		id: number;
		name: string;
		definition: string;
		published: boolean;
		subjectId: number;
		formId: number;
		subjectExams: {
			[x: string]: any;
			subjectExams: {
				subjectName: string;
			};
			formExams: {
				subjectName: string;
			};
		};
	}[];
	link: string;
};

export const MuiDrawer = ({ textHeader, topic, active, link }: dataType) => {
	const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
					<Divider />
					<List>
						{topic.map((exam) => (
							<div
								key={exam.id}
								onClick={() => {
									setIsDrawerOpen(false);
								}}>
								<Link
									passHref
									href={`/${link}/${
										exam.subjectExams.subjectName
									}/${exam.formExams.formName.replace(/ +/g, '')}/${exam.id}`}>
									<a>
										<ListItem
											key={exam.id + 100}
											button
											className={exam.id == active ? `${Styles.active}` : ''}>
											<ListItemText primary={exam.name} />
										</ListItem>
									</a>
								</Link>
							</div>
						))}
					</List>
				</Box>
			</Drawer>
		</>
	);
};

export default MuiDrawer;
