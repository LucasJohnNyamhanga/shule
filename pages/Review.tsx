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
				text1={`<span style="color: #ff216c ;"><strong>Level up</strong></span><span>&#128640;</span>`}
				text2={`<span style="color: #ce0900 ;"><strong>Train</strong></span><span>&#129351;</span>`}
				text3={`<span style="color: #d35400 ;"><strong>Review</strong></span><span>&#128220;</span>`}
				text4={`<span style="color: #9F0733 ;"><strong>Shapen</strong></span><span>&#129338;</span>`}
				text5={`<span style="color: #05507C ;"><strong>Revise</strong></span><span>&#128221;</span>`}
				explanation1={`With well prepared`}
				explanation2={` questions and answers.`}
				color1={'#419f32'}
				color2={'#a6504d'}
			/>
			<Study subjects={subjects} focus={`Let's Review`} link={'Review'} />
		</>
	);
};

export default Review;
