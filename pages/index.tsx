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
		revalidate: 15,
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
				header={`Get the Best prepared notes.`}
				explanation={`Well written by the best teachers using language easy to
									understand. This is the perfect learning point for you, start
									by searching or go straight to subjects below.`}
			/>
			<Study subjects={subjects} focus={`Let's study Notes`} link={'Notes'} />
		</>
	);
};

export default Home;
