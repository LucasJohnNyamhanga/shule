import React, { useContext, useEffect, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Styles from '../../../styles/search.module.scss';
import { NavContext } from '../../../components/context/StateContext';
import { prisma } from '../../../db/prisma';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const searchText = context.query.find!.toString();

	const result = await prisma.question.findMany({
		where: {
			question: {
				search: searchText,
			},
			published: true,
		},
		select: {
			id: true,
			question: true,
			answer: {
				select: {
					answer: true,
				},
			},
			questionFormat: {
				select: {
					name: true,
				},
			},
			review: {
				select: {
					name: true,
					subject: {
						select: {
							subjectName: true,
						},
					},
					form: {
						select: {
							formName: true,
						},
					},
					topic: {
						select: {
							topicName: true,
							id: true,
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

type question = {
	id: number;
	question: string;
	answer: { answer: string }[];
	questionFormat: { name: string };
	review: {
		name: string;
		subject: {
			subjectName: string;
		};
		form: {
			formName: string;
		};
		topic: {
			topicName: string;
			id: number;
		};
	};
};

const Reference = ({
    	searchResults,
    	searchText,
    }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);
	const [searchResultsStatus, setSearchResultsStatus] = useState(false);
	console.log(searchResults);
	const doc = searchResults.length > 0 ? searchResults[0].content : '';

	useEffect(() => {
		setNavActive('Review');
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
					} Quiz ${
						searchResults.length > 1 ? 'Questions' : 'Question'
					} Found For "${searchText}"`}</div>
				) : (
					<div
						className={
							Styles.resultsHeader
						}>{`No Search Result Found For "${searchText}"`}</div>
				)}
				{searchResultsStatus &&
					searchResults.map((result: question, index: number) => (
						<div key={result.id}>
							<>
								<div
									className={
										Styles.resultDetails
									}>{`${result.review.subject.subjectName} > ${result.review.form.formName} > ${result.review.topic.topicName} > ${result.review.name}`}</div>
								<Link
									href={`/Review/${
										result.review.subject.subjectName
									}/${result.review.form.formName.replace(' ', '')}/${
										result.review.topic.id
									}`}>
									<a>
										<>
											<div className={`ckContent ${Styles.result}`}>
												<div
													dangerouslySetInnerHTML={{
														__html: result.question,
													}}
												/>
												{result.questionFormat.name == 'Multiple Choice' && (
													<div className={Styles.answers}>
														{result.answer.map((ans) => (
															<div
																className={Styles.answer}
																dangerouslySetInnerHTML={{
																	__html: `${ans.answer}`,
																}}
															/>
														))}
													</div>
												)}
												{result.questionFormat.name == 'True or False' && (
													<div className={Styles.answers}>
														{result.answer.map((ans) => (
															<div
																className={Styles.answer}
																dangerouslySetInnerHTML={{
																	__html: `<p>${ans.answer}</p>`,
																}}
															/>
														))}
													</div>
												)}
											</div>

											{searchResults.length != index + 1 && (
												<hr className={Styles.horizontalLine} />
											)}
										</>
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
