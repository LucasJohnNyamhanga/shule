import React, { useContext, useEffect, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Styles from '../../../styles/search.module.scss';
import { NavContext } from '../../../components/context/StateContext';
import { prisma } from '../../../db/prisma';
import Link from 'next/link';
import Book from '../../../components/tools/BookSearch';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const searchText = context.query.find!.toString();

	const result = await prisma.reference.findMany({
		where: {
			name: {
				contains: searchText,
			},
		},
		select: {
			id: true,
			name: true,
			description: true,
			subjectReference: {
				select: {
					subjectName: true,
				},
			},
			formReference: {
				select: {
					formName: true,
				},
			},
		},
	});
	let searchResults = JSON.parse(JSON.stringify(result));

	return {
		props: { searchResults, searchText },
	};
};

type books = {
	id: string;
	name: string;
	description: string;
	subjectReference: {
		subjectName: string;
	};
	formReference: {
		formName: string;
	};
};

const Reference = ({
	searchResults,
	searchText,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);
	const [searchResultsStatus, setSearchResultsStatus] = useState(false);

	useEffect(() => {
		setNavActive('References');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	const doc = searchResults.length > 0 ? searchResults[0].content : '';

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
				{searchResultsStatus && (
					// searchResults.map((result: books, index: number) => (
					// 	<div key={result.id}>
					// 		<>
					// 			<div
					// 				className={
					// 					Styles.resultDetails
					// 				}>{`${result.subjectReference.subjectName} > ${result.name}`}</div>
					// 			<Link href={`/References/Download?id=${result.id}`}>
					// 				<a>
					// 					<div>{result.name}</div>
					// 					{searchResults.length != index + 1 && (
					// 						<hr className={Styles.horizontalLine} />
					// 					)}
					// 				</a>
					// 			</Link>
					// 		</>
					// 	</div>
					// ))}
					<Book reference={searchResults} />
				)}
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
