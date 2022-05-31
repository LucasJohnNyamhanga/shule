import { exam } from '@prisma/client';
import Link from 'next/link';
import { ReactNode } from 'react';
import Styles from '../../styles/table.module.scss';

type tableData = {
	header: string[];
	body: {
		[x: string]: ReactNode;
	}[];
	form: string;
	subject: string;
};

const Table = ({ header, body, form, subject }: tableData) => {
	if (body.length == 0) {
		return <div className={Styles.notFound}>Exams will be available soon.</div>;
	}

	return (
		<div className={Styles.table}>
			<table>
				<thead>
					<tr>
						{header.map((head, index) => (
							<th key={index}>
								{head == `hasAnswers`
									? `With Answers`
									: head.charAt(0).toUpperCase() + head.slice(1)}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{body.map((data, index) => (
						<Link
							key={index + 1000}
							passHref={true}
							href={`/Exams/${subject}/${form}/Exam/${data.id}`}>
							<tr key={index + 100}>
								<td key={index + 200}>{index + 1}</td>
								<td key={index + 300}>{data.description}</td>
								<td key={index + 400}>{data.year}</td>
								<td key={index + 500}>{data.hasAnswers ? `Yes` : `No`}</td>
							</tr>
						</Link>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default Table;
