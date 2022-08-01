/* eslint-disable no-mixed-spaces-and-tabs */
/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* eslint-disable react/react-in-jsx-scope */
import { ChangeEvent, useRef } from 'react';
import Styles from '../styles/checkOut.module.scss';
import RadioCard from '../components/tools/RadioCard';
import React, { ReactNode, useContext, useEffect, useState } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { prisma } from '../db/prisma';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import { useRouter } from 'next/router';
import { TiMinus, TiPlus } from 'react-icons/ti';

import { getSession } from 'next-auth/react';
export const getServerSideProps: GetServerSideProps = async (context) => {
	const packageId = context.query.id!.toString();

	const session = await getSession(context);
	if (!session) {
		return {
			redirect: {
				destination: `/Auth/SignIn?callbackUr=/`,
				permanent: false,
			},
		};
	}
	const userFromServer = await prisma.users.findFirst({
		where: {
			username: session.user.email,
		},
		select: {
			id: true,
			isAdmin: true,
			name: true,
			username: true,
			password: true,
			vifurushi: {
				select: {
					name: true,
					value: true,
				},
			},
		},
	});
	const userfound = await JSON.parse(JSON.stringify(userFromServer));

	const packageFromServer = await prisma.vifurushiPackage.findUnique({
		where: {
			id: parseInt(packageId),
		},
		select: {
			id: true,
			name: true,
			description: true,
			price: true,
			booksDownload: true,
			examAccess: true,
			examsSolvedDownload: true,
			examsUnsolvedDownload: true,
			notesDownload: true,
			quizExcercises: true,
		},
	});
	const packageDetails = await JSON.parse(JSON.stringify(packageFromServer));

	await prisma.$disconnect();
	return {
		props: { userfound, packageDetails },
	};
};

const Notes = ({
    	userfound,
    	packageDetails,
    }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	console.log(packageDetails);
	const { query, push } = useRouter();
	let callback = query.callbackUrl;

	const randomPin = () => {
		let val = Math.floor(1000 + Math.random() * 9000);
		console.log(val);
	};

	useEffect(() => {
		randomPin();
	}, []);

	return (
		<div className={Styles.container}>
			<Toaster position='top-center' reverseOrder={false} />
			<div className={Styles.innerContainer}>
				<div className={Styles.header}>
					You’re almost there!, Complete your order.
				</div>
				<div>
					<div className={Styles.plan}>
						1. Choose Your Plan Quantity Or Add Another Plan
					</div>
					<div>
						<div>
							<div>Selected Plan</div>
							<div>{packageDetails.name}</div>
						</div>
						<div>
							<div>Plan Quantity</div>
							<div className={Styles.form}>
								<div className={`${Styles.valuebutton} ${Styles.decrease}`}>
									<TiMinus />
								</div>
								<input
									className={Styles.inputwrap}
									type='number'
									id='number'
									value='0'
								/>
								<div className={`${Styles.valuebutton} ${Styles.increase}`}>
									<TiPlus />
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className={Styles.plan}>2. Choose Payment option</div>
				<RadioCard />
				<div className={Styles.plan}>3. Payment Procedures</div>
				<div className={Styles.plan}>4. Account Activation</div>
			</div>
		</div>
	);
};

export default Notes;

//*Removing default search bar :)
Notes.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};
