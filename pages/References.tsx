import type { NextPage, InferGetStaticPropsType, GetStaticProps } from 'next';
import Hero from '../components/layout/Hero';
import Study from '../components/layout/Study';
import { prisma } from '../db/prisma';
import { useContext, useEffect } from 'react';
import { NavContext } from '../components/context/StateContext';
import Book from '../components/tools/Book';

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
	const subjectsFromServer: userData = await prisma.subjectReference.findMany({
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
	// let update = async () => {
	//   for (let subject of subjects) {
	//     await prisma.subject.update({
	//       where: { id: subject.id },
	//       data: {
	//         forms: { set: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, ],},
	//       },
	//   })
	//   }

	//  }

	//    update();

	return {
		props: {
			subjects,
		},
		revalidate: 15,
	};
};

const References: NextPage = ({
    	subjects,
    }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);

	useEffect(() => {
		setNavActive('References');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	return (
		<>
			<Hero
				image={'/man1.webp'}
				header={`Books and references for downloading.`}
				explanation={`Full library at the tip of you finger. Get the books and reference you need at click of a button, downloaded and in your device for anytime access.`}
			/>
			<Study
				subjects={subjects}
				focus={`Let's use References`}
				link={'References'}
			/>
		</>
	);
};

export default References;
