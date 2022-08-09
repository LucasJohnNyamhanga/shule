import React, { useContext, useEffect, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Styles from '../../../styles/search.module.scss';
import { NavContext } from '../../../components/context/StateContext';
import { prisma } from '../../../db/prisma';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const searchText = context.query.find!.toString();

	const result = await prisma.exam.findMany({
		where: {
			exam: {
				search: searchText,
			},
			published: true,
		},
		select: {
			id: true,
			description: true,
			year: true,
			hasAnswers: true,
			examTypeId: true,
			exam: true,
			examType: {
				select: {
					name: true,
					id: true,
					subjectExams: {
						select: {
							subjectName: true,
						},
					},
					formExams: {
						select: {
							formName: true,
						},
					},
				},
			},
		},
	});
	let searchResults = JSON.parse(JSON.stringify(result));

	return {
		props: { searchResults, searchText },
	};
};

type exam = {
	id: number;
	description: string;
	year: number;
	hasAnswers: boolean;
	published: boolean;
	examTypeId: number;
	exam: string;
	examType: {
		id: number;
		name: string;
		subjectExams: {
			subjectName: string;
		};
		formExams: {
			formName: string;
		};
	};
};

const Reference = ({
	searchResults,
	searchText,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);
	const [searchResultsStatus, setSearchResultsStatus] = useState(false);

	const doc = searchResults.length > 0 ? searchResults[0].content : '';

	useEffect(() => {
		setNavActive('Exams');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	useEffect(() => {
		searchResults.length > 0
			? setSearchResultsStatus(true)
			: setSearchResultsStatus(false);
	}, [searchResults, searchText]);

	return (
		<div className={Styles.container}>
			<div className={Styles.innerContainer}>
				{searchResults.length > 0 ? (
					<div className={Styles.resultsHeader}>{`About ${
						searchResults.length
					} Search ${
						searchResults.length > 1 ? 'Results' : 'Result'
					} Found For "${searchText}"`}</div>
				) : (
					<div
						className={
							Styles.resultsHeader
						}>{`No Search Result Found For "${searchText}"`}</div>
				)}
				{searchResultsStatus &&
					searchResults.map((result: exam, index: number) => (
						<div key={result.id}>
							<>
								<div
									className={
										Styles.resultDetails
									}>{`${result.examType.subjectExams.subjectName} > ${result.examType.formExams.formName} > ${result.examType.name}`}</div>
								<Link
									href={`/Notes/${
										result.examType.subjectExams.subjectName
									}/${result.examType.formExams.formName.replace(' ', '')}/${
										result.examType.id
									}`}>
									<a>
										<div
											className={`ckContent ${Styles.result}`}
											dangerouslySetInnerHTML={{
												__html: `Hello`,
											}}
										/>
										{searchResults.length != index + 1 && (
											<hr className={Styles.horizontalLine} />
										)}
									</a>
								</Link>
							</>
						</div>
					))}
				{!searchResultsStatus && (
					<div
						className={`ckContent ${Styles.resultNotFound}`}
						dangerouslySetInnerHTML={{
							__html: '<strong></strong>',
						}}
					/>
				)}
			</div>
		</div>
	);
};

export default Reference;
