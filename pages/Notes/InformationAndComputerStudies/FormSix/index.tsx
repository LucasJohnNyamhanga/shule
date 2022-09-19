import React, { useContext, useEffect } from 'react';
import Styles from '../../../../styles/notesDisplay.module.scss';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { topic } from '@prisma/client';
import { prisma } from '../../../../db/prisma';
import type { GetStaticProps, InferGetStaticPropsType } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Error from 'next/error';
import Drawer from '../../../../components/tools/Drawer';
import { NavContext } from '../../../../components/context/StateContext';
import { unified } from 'unified';
import rehypeStringify from 'rehype-stringify';
import rehypeParse from 'rehype-parse';
import { visit } from 'unist-util-visit';
import parameterize from 'parameterize-js';

const subjectLocator = 'Information And Computer Studies';
const formLocator = 'Form Six';
const subjectLocatorLink = 'InformationAndComputerStudies';
const formLocatorLink = 'FormSix';

export const getStaticProps: GetStaticProps = async () => {
	const topicsFromServer = await prisma.topic.findMany({
		where: {
			published: true,
			subject: {
				subjectName: subjectLocator,
			},
			form: {
				formName: formLocator,
			},
		},
		select: {
			id: true,
			topicName: true,
			topicDefinition: true,
			form: {
				select: {
					formName: true,
				},
			},
			subject: {
				select: {
					subjectName: true,
				},
			},
		},
	});
	const topics = JSON.parse(JSON.stringify(topicsFromServer));

	const downloadFromServer = await prisma.notesDownloadable.findMany({
		where: {
			published: true,
			subject: {
				subjectName: subjectLocator,
			},
			form: {
				formName: formLocator,
			},
		},
		select: {
			id: true,
		},
	});
	const download = JSON.parse(JSON.stringify(downloadFromServer));

	const noteFromServer = await prisma.topic.findMany({
		take: 1,
		where: {
			published: true,
			subject: {
				subjectName: subjectLocator,
			},
			form: {
				formName: formLocator,
			},
		},
		select: {
			id: true,
			note: {
				select: {
					content: true,
				},
			},
			form: {
				select: {
					formName: true,
				},
			},
			subject: {
				select: {
					subjectName: true,
				},
			},
			topicName: true,
			topicDefinition: true,
		},
	});
	const note = JSON.parse(JSON.stringify(noteFromServer));

	let htmlServer: string;
	let toc: {
		id: string;
		title: string;
	}[] = [];

	if (note[0]?.note == null) {
		htmlServer = `<div className={Styles.notFound} > <h2>Notes for this topic will be available soon.</h2> </div>`;
	} else {
		let result = note[0].note.content.replaceAll(
			`img`,
			`Image layout="fill" objectfit="cover"`
		);

		const content = unified()
			.use(rehypeParse, {
				fragment: true,
			})
			.use(() => {
				return (tree) => {
					visit(tree, 'element', (node) => {
						if (node.tagName == 'h2') {
							//
							if (node.children[0].type == 'text') {
								const id = parameterize(node.children[0].value);
								node.properties!.id = id;
								toc.push({
									id,
									title: node.children[0].value,
								});
							}
						}
					});
				};
			})
			.use(rehypeStringify)
			.processSync(result)
			.toString();

		htmlServer = content;
	}

	return {
		props: {
			htmlServer,
			toc,
			topics,
			note,
			download,
		},
		revalidate: 15,
	};
};

const Index = ({
    	htmlServer,
    	toc,
    	topics,
    	note,
    	download,
    }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);
	useEffect(() => {
		setNavActive('Notes');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	if (topics.length < 1) {
		htmlServer = `<div className={Styles.notFound} > <h2> Notes for ${subjectLocator} ${formLocator} will be available soon.</h2></div>`;
		return (
			<div className={Styles.container}>
				<div className={Styles.innerContainer}>
					<div className={Styles.leftInnercontainerBody}></div>
					<div className={Styles.rightInnercontainerBody}>
						<div className={Styles.BodyHeader}></div>
						<div className={Styles.BodyContent}>
							<div className='ckContent'>
								<div dangerouslySetInnerHTML={{ __html: htmlServer }} />
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}

	let truncateLimit = 12;
	function truncate(str: string) {
		return str.length > truncateLimit
			? str.slice(0, truncateLimit) + '...'
			: str;
	}

	//!mambo yanaanza

	return (
		<div className={Styles.container}>
			<Head>
				<title>{note[0].topicName}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content={note[0].topicDefinition} />
				<meta name='keywords' content={note[0].topicName} />
			</Head>
			<div className={Styles.innerContainer}>
				<div className={Styles.leftInnercontainerBody}>
					<div className={Styles.sticky}>
						<div className={Styles.topicHeader}>Topics list</div>
						<div className={Styles.titleList}>
							{topics.map((topic: topic) => (
								<div key={topic.id}>
									<Link
										passHref
										href={`/Notes/${subjectLocatorLink}/${formLocatorLink}/${topic.id}`}>
										<a>
											<div
												key={topic.id}
												className={
													topic.id == note[0].id
														? `${Styles.topicTittle} ${Styles.Active}`
														: Styles.topicTittle
												}>
												{topic.topicName}
											</div>
										</a>
									</Link>
								</div>
							))}
						</div>
					</div>
				</div>
				<div className={Styles.rightInnercontainerBody}>
					<div className={Styles.mobile}>
						<Drawer
							textHeader={'LIST OF TOPICS'}
							topic={topics}
							active={note[0].id}
							link={'Notes'}
						/>
					</div>
					<div className={Styles.BodyHeader}>
						<div className={Styles.statusBar}>
							{note[0].subject.subjectName} <ChevronRightOutlinedIcon />{' '}
							{note[0].form.formName} <ChevronRightOutlinedIcon />{' '}
							{truncate(note[0].topicName)}
						</div>
						{download.length > 0 ? (
							<Link
								href={`/Notes/${subjectLocatorLink}/${formLocatorLink}/Downloads`}
								passHref>
								<a>
									<div className={Styles.download}>Download Notes</div>
								</a>
							</Link>
						) : (
							''
						)}
					</div>
					<div className={Styles.BodyContent}>
						<h2>{`Topic: ${note[0].topicName}`.toUpperCase()}</h2>
						<div className='ckContent'>
							{toc.length > 0 && (
								<div className='toc'>
									<h3>INSIDE THIS TOPIC 🧐</h3>
									<ol>
										{toc.map(({ id, title }) => (
											<a href={`#${id}`} key={id}>
												<li>{title}</li>
											</a>
										))}
									</ol>
								</div>
							)}

							<div dangerouslySetInnerHTML={{ __html: htmlServer }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;

// //*Removing default search bar :)
// Index.getLayout = function PageLayout(page:ReactNode) {
//   return (
//       <>
//           {page}
//       </>
//   )
// }
