import type { NextPage, InferGetStaticPropsType } from 'next';
import Hero from '../components/layout/Hero';
import { type } from 'os';
import Study from '../components/layout/Study';
import { prisma } from '../db/prisma';
import type { GetStaticProps } from 'next';
import { useContext, useEffect } from 'react';
import { NavContext } from '../components/context/StateContext';

type userData = {
	id: number;
	subjectName: string;
	subjectDefinition: string | null;
	imageLocation: string | null;
	forms: {
		formName: String;
	}[];
}[];

export const getStaticProps: GetStaticProps = async () => {
	const subjectsFromServer: userData = await prisma.subject.findMany({
		where: {
			published: true,
		},
		select: {
			id: true,
			subjectName: true,
			subjectDefinition: true,
			imageLocation: true,
			forms: {
				select: {
					formName: true,
				},
			},
		},
	});
	const subjects = JSON.parse(JSON.stringify(subjectsFromServer));

	// //* FUNCTION TO UPDATE
	//   let update = async () => {
	//     for (let subject of subjects) {
	//       await prisma.subject.update({
	//         where: { id: subject.id },
	//         data: {
	//           category: { set: [{ id: 1 }, { id: 2 }, ],},
	//         },
	//     })
	//     }

	//  }

	//    update();

	return {
		props: {
			subjects,
		},
	};
};

const Home: NextPage = ({
	subjects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);

	useEffect(() => {
		setNavActive('Notes');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	return (
		<>
			<Hero
				image={'/darasaplus.gif'}
				text1={`<span style="color: #27ae60 ;"><strong>Read</strong></span><span>&#128195;</span>`}
				text2={`<span style="color: #800080 ;"><strong>Explore</strong></span><span>&#127757;</span>`}
				text3={`<span style="color: #d35400 ;"><strong>Search</strong></span><span>&#128269;</span>`}
				text4={''}
				text5={''}
				explanation1={`To amaizingly`}
				explanation2={` well prepared Notes.`}
			/>
			<Study subjects={subjects} focus={`Let's study Notes`} link={'Notes'} />
		</>
	);
};

export default Home;
