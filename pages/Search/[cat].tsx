import { useRouter } from 'next/router';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { subjectReference } from '@prisma/client';
import Styles from '../../styles/createNotes.module.scss';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { NavContext } from '../../components/context/StateContext';
import { prisma } from '../../db/prisma';
import { unified } from 'unified';
import rehypeParse from 'rehype-parse';
import rehypeStringify from 'rehype-stringify';
import { visit } from 'unist-util-visit';
import { Root } from 'hast';
import { stringify } from 'querystring';

export const getServerSideProps: GetServerSideProps = async (context) => {
	const category = context.params!.cat;
	const searchText = context.query.search!.toString();

	const result = await prisma.note.findMany({
		where: {
			content: {
				search: searchText,
			},
		},
	});
	let searchResults = JSON.parse(JSON.stringify(result));

	return {
		props: { searchResults, searchText },
	};
};

const Reference = ({
	searchResults,
	searchText,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);

	const doc = searchResults[0].content;
	const content = unified()
		.use(rehypeParse, { fragment: true })
		.use(() => {
			return (tree: Root) => {
				visit(tree, 'element', (node) => {
					if (node.tagName == 'p') {
						console.log(node);
					}
				});
			};
		})
		.use(rehypeStringify)
		.processSync(doc)
		.toString();

	return (
		<div className={Styles.container}>
			<div className={Styles.innerContainer}>
				<div className={Styles.rightInnercontainerBody}>Hello Tanzania</div>
			</div>
		</div>
	);
};

export default Reference;
