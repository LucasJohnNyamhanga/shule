import { GetStaticProps, GetStaticPaths, InferGetStaticPropsType } from 'next';
import { prisma } from '../../../../db/prisma';
import React, { useContext, useEffect } from 'react';
import Styles from '../../../../styles/notesDisplay.module.scss';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import Head from 'next/head';
import Link from 'next/link';
import Drawer from '../../../../components/tools/Drawer';
import { NavContext } from '../../../../components/context/StateContext';
import { unified } from 'unified';
import rehypeStringify from 'rehype-stringify';
import rehypeParse from 'rehype-parse';
import { visit } from 'unist-util-visit';
import parameterize from 'parameterize-js';

const subjectLocator = 'Physics';
const formLocator = 'Form One';
const subjectLocatorLink = 'Physics';
const formLocatorLink = 'FormOne';

export const getStaticProps: GetStaticProps = async (context) => {
	const id = context.params?.id;
	let Id = parseInt(String(id));
	// ...
	const topicData = await prisma.topic.findUnique({
		where: {
			id: Id,
		},
		select: {
			id: true,
			topicName: true,
			topicDefinition: true,
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
			note: {
				select: {
					content: true,
				},
			},
		},
	});

	const thisTopicData = JSON.parse(JSON.stringify(topicData));

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
		},
	});
	const topics = JSON.parse(JSON.stringify(topicsFromServer));

	return {
		props: {
			topics,
			thisTopicData,
			download,
		},
	};
};

export const getStaticPaths: GetStaticPaths = async () => {
	// ...
	const notesServer = await prisma.topic.findMany({
		select: {
			id: true,
		},
	});

	type dataNote = {
		id: number;
	};
	const notesData = JSON.parse(JSON.stringify(notesServer));
	const paths = notesData.map((note: dataNote) => {
		let id = String(note.id);
		return {
			params: {
				id: `${id}`,
			},
		};
	});
	return {
		paths,
		fallback: false,
	};
};

const Index = ({
	topics,
	thisTopicData,
	download,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);

	useEffect(() => {
		setNavActive('Notes');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	let htmlServer;
	let toc: {
		id: string;
		title: string;
	}[] = [];

	if (typeof thisTopicData.note == 'undefined') {
		htmlServer = `<div className={Styles.notFound} >Notes for ${thisTopicData.topicName} topic will be available soon.</div>`;
	} else {
		let result = thisTopicData.note.content.replaceAll(
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
								console.log(id);
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

	type dataTopic = {
		id: number;
		topicName: string;
		topicDefinition: string;
		subject: {
			subjectName: string;
		};
		form: {
			formName: string;
		};
	};

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
				<title>{thisTopicData.topicName}</title>
				<meta name='viewport' content='initial-scale=1.0, width=device-width' />
				<meta name='description' content={thisTopicData.topicDefinition} />
				{/* //!add keywords */}
				<meta name='keywords' content={thisTopicData.topicName} />
			</Head>
			<div className={Styles.innerContainer}>
				<div className={Styles.leftInnercontainerBody}>
					<div className={Styles.sticky}>
						<div className={Styles.topicHeader}>Topics list</div>

						<div className={Styles.titleList}>
							{topics.map((topic: dataTopic) => (
								<div key={topic.id}>
									<Link
										passHref
										href={`/Notes/${subjectLocatorLink}/${formLocatorLink}/${topic.id}`}>
										<a>
											<div
												key={topic.id}
												className={
													topic.id == thisTopicData.id
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
							active={thisTopicData.id}
							link={'Notes'}
						/>
					</div>
					<div className={Styles.BodyHeader}>
						<div className={Styles.statusBar}>
							{thisTopicData.subject.subjectName} <ChevronRightOutlinedIcon />{' '}
							{thisTopicData.form.formName} <ChevronRightOutlinedIcon />{' '}
							{truncate(thisTopicData.topicName)}
						</div>
						{download.length > 0 ? (
							<div className={Styles.download}>Download Notes</div>
						) : (
							''
						)}
					</div>
					<div className={Styles.BodyContent}>
						<div className='ckContent'>
							<div className='toc'>
								<h2>INSIDE THIS TOPIC 🧐</h2>
								<ul>
									{toc.map(({ id, title }) => (
										<a href={`#${id}`} key={id}>
											<li>{title}</li>
										</a>
									))}
								</ul>
							</div>

							<div dangerouslySetInnerHTML={{ __html: htmlServer }} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Index;
