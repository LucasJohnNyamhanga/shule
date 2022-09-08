import React from 'react';
import Card from '../tools/Card';
import Styles from '../../styles/study.module.scss';
import { type } from 'os';

type dataType = {
	subjects: {
		id: number;
		subjectName: string;
		subjectDefinition: string | null;
		imageLocation: string | null;
		forms: {
			formName: String;
		}[];
	}[];
	focus: string;
	link: string;
};

const Study = ({ subjects, focus, link }: dataType) => {
	// console.log(subjects);

	return (
		<div className={Styles.container}>
			<div className={Styles.innerContainer}>
				<div className={Styles.studyHeader}>{`${focus}`}</div>
				<div className={Styles.study}>
					{subjects.map((subject: any) => (
						<Card
							key={subject.id}
							headerText={subject.subjectName}
							image={subject.imageLocation}
							imageDescription={'Shule'}
							forms={subject.forms}
							link={`/${link}/${subject.subjectName.replace(' ', '').trim()}`}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Study;
