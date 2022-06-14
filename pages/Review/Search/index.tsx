import React, { useContext, useEffect, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Styles from '../../../styles/search.module.scss';
import { NavContext } from '../../../components/context/StateContext';
import { prisma } from '../../../db/prisma';
import Link from 'next/link';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const searchText = context.query.find!.toString();

	const result = await prisma.note.findMany({
		where: {
			content: {
				search: searchText,
			},
		},
		select: {
			id: true,
			content: true,
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
				},
			},
		},
	});
	let searchResults = JSON.parse(JSON.stringify(result));

	return {
		props: { searchResults, searchText },
	};
};

type note = {
	subjectName: any;
	id: number;
	content: string;
	subject: {
		subjectName: string;
	};
	form: {
		formName: string;
	};
	topic: {
		topicName: string;
	};
};

const Reference = ({
	searchResults,
	searchText,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);
	const [searchResultsStatus, setSearchResultsStatus] = useState(false);

	function truncateHTML(text: string, length: number) {
		let startIndex = text
			.toLowerCase()
			.search(`${searchText.toLowerCase().replaceAll(' ', '|')}`);

		if (startIndex > 70) {
			startIndex -= 70;
		}

		let endIndex = startIndex + length;
		var truncated = text.substring(startIndex, endIndex);
		// Remove line breaks and surrounding whitespace
		truncated = truncated.replace(/(\r\n|\n|\r)/gm, '').trim();
		// If the text ends with an incomplete start tag, trim it off
		truncated = truncated.replace(
			/<(\w*)(?:(?:\s\w+(?:={0,1}(["']{0,1})\w*\2{0,1})))*$/g,
			''
		);
		// If the text ends with a truncated end tag, fix it.
		var truncatedEndTagExpr = /<\/((?:\w*))$/g;
		var truncatedEndTagMatch = truncatedEndTagExpr.exec(truncated);
		if (truncatedEndTagMatch != null) {
			var truncatedEndTag = truncatedEndTagMatch[1];
			// Check to see if there's an identifiable tag in the end tag
			if (truncatedEndTag.length > 0) {
				// If so, find the start tag, and close it
				var startTagExpr = new RegExp(
					'<(' + truncatedEndTag + '\\w?)(?:(?:\\s\\w+(?:=(["\'])\\w*\\2)))*>'
				);
				var testString = truncated;
				var startTagMatch = startTagExpr.exec(testString);

				var startTag = null;
				while (startTagMatch != null) {
					startTag = startTagMatch[1];
					testString = testString.replace(startTagExpr, '');
					startTagMatch = startTagExpr.exec(testString);
				}
				if (startTag != null) {
					truncated = truncated.replace(
						truncatedEndTagExpr,
						'</' + startTag + '>'
					);
				}
			} else {
				// Otherwise, cull off the broken end tag
				truncated = truncated.replace(truncatedEndTagExpr, '');
			}
		}
		// Now the tricky part. Reverse the text, and look for opening tags. For each opening tag,
		//  check to see that he closing tag before it is for that tag. If not, append a closing tag.
		var testString: string = reverseHtml(truncated);
		var reverseTagOpenExpr = /<(?:(["'])\w*\1=\w+ )*(\w*)>/;
		var tagMatch = reverseTagOpenExpr.exec(testString);
		while (tagMatch != null) {
			var tag = tagMatch[0];
			var tagName = tagMatch[2];
			var startPos = tagMatch.index;
			var endPos = startPos + tag.length;
			var fragment = testString.substring(0, endPos);
			// Test to see if an end tag is found in the fragment. If not, append one to the end
			//  of the truncated HTML, thus closing the last unclosed tag
			if (!new RegExp('<' + tagName + '/>').test(fragment)) {
				truncated += '</' + reverseHtml(tagName) + '>';
			}
			// Get rid of the already tested fragment
			testString = testString.replace(fragment, '');
			// Get another tag to test
			tagMatch = reverseTagOpenExpr.exec(testString);
		}
		return truncated;
	}

	function reverseHtml(str: string) {
		var ph = String.fromCharCode(206);
		var result = str.split('').reverse().join('');
		while (result.indexOf('<') > -1) {
			result = result.replace('<', ph);
		}
		while (result.indexOf('>') > -1) {
			result = result.replace('>', '<');
		}
		while (result.indexOf(ph) > -1) {
			result = result.replace(ph, '>');
		}
		return result;
	}

	const doc = searchResults.length > 0 ? searchResults[0].content : '';

	useEffect(() => {
		searchResults.length > 0
			? setSearchResultsStatus(true)
			: setSearchResultsStatus(false);
	}, [searchResults, searchText]);
	// const content = unified()
	// 	.use(rehypeParse, { fragment: true })
	// 	.use(() => {
	// 		return (tree: Root) => {
	// 			visit(tree, 'element', (node, index, parent) => {
	// 				if (node.type == 'element') {
	// 					node.children.map((child) => {
	// 						console.log(child);
	// 					});
	// 				}
	// 			});
	// 		};
	// 	})
	// 	.use(rehypeStringify)
	// 	.processSync(doc)
	// 	.toString();

	return (
		<div className={Styles.container}>
			<div className={Styles.innerContainer}>
				{searchResults.length > 1 ? (
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
					searchResults.map(
						(
							result: {
								form: any;
								topic: any;
								id: React.Key | null | undefined;
								subject: note;
								content: string;
							},
							index: number
						) => (
							<div key={result.id}>
								<>
									<div
										className={
											Styles.resultDetails
										}>{`${result.subject.subjectName} > ${result.form.formName} > ${result.topic.topicName}`}</div>
									<Link
										href={`/Notes/${
											result.subject.subjectName
										}/${result.form.formName.replace(' ', '')}/${result.id}`}>
										<a>
											<div
												className={`ckContent ${Styles.result}`}
												dangerouslySetInnerHTML={{
													__html: truncateHTML(result.content, 700),
												}}
											/>
											{searchResults.length != index + 1 && (
												<hr className={Styles.horizontalLine} />
											)}
										</a>
									</Link>
								</>
							</div>
						)
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
