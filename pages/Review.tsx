import type { NextPage, InferGetStaticPropsType } from 'next';
import Hero from '../components/layout/Hero';
import { type } from 'os';
import Study from '../components/layout/Study';
import { prisma } from '../db/prisma';
import type { GetStaticProps } from 'next';
import { NavContext } from '../components/context/StateContext';
import { useContext, useEffect } from 'react';

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
	const subjectsFromServer: userData = await prisma.subjectReview.findMany({
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

const Review: NextPage = ({
    	subjects,
    }: InferGetStaticPropsType<typeof getStaticProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);

	useEffect(() => {
		setNavActive('Review');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	return (
		<>
			<Hero
				image={'/darasaplus.gif'}
				header={`Excercise to get you ready.`}
				explanation={`Test your self with questions prepared from national level examinations and get instant detailed answers. Best preparations get you the best results.`}
			/>
			<Study subjects={subjects} focus={`Let's Review`} link={'Review'} />
		</>
	);
};

export default Review;
