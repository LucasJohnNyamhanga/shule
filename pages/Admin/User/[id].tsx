import React, { ReactNode, useContext, useEffect } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import dynamic from 'next/dynamic';
import { NavContext } from '../../../components/context/StateContext';
import { prisma } from '../../../db/prisma';

//load when browser kicks in, on page load
const CkEditor = dynamic(() => import('../../'), {
	ssr: false,
});

import { getSession } from 'next-auth/react';
export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);
	if (!session) {
		return {
			redirect: {
				destination: `/Auth/SignIn?callbackUr=/`,
				permanent: false,
			},
		};
	} else {
		const userFromServer = await prisma.users.findFirst({
			where: {
				username: session.user.email,
			},
			select: {
				isAdmin: true,
			},
		});
		const userfound = await JSON.parse(JSON.stringify(userFromServer));

		if (!userfound.isAdmin) {
			return {
				redirect: {
					destination: '/',
					permanent: false,
				},
			};
		}
	}
	let id = context.params?.id as string;
	let Id = parseInt(id);

	await prisma.$disconnect();
	return {
		props: {
			Id,
		},
	};
};

type formData = {
	label: string;
	value: string;
}[];

const EditExam = ({
	Id,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { navActive, setNavActive, userData } = useContext(NavContext);

	useEffect(() => {
		setNavActive('Admin');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	return <div>Hello {Id}</div>;
};

export default EditExam;

//*Removing default search bar :)
EditExam.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};
