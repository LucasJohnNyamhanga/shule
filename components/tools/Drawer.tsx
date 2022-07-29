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
import { useState } from 'react';
import Styles from '../../styles/drawer.module.scss';

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
						{topic.map((topic) => (
							<div
								key={topic.id}
								onClick={() => {
									setIsDrawerOpen(false);
								}}>
								<Link
									passHref
									href={`/${link}/${
										topic.subject.subjectName
									}/${topic.form.formName.replace(/ +/g, '')}/${topic.id}`}>
									<a>
										<ListItem
											button
											className={topic.id == active ? `${Styles.active}` : ''}>
											<ListItemText primary={topic.topicName} />
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
