import { ReactNode, useContext } from 'react';
import Styles from '../styles/pricing.module.scss';
import { useRouter } from 'next/router';
import { NavContext } from '../components/context/StateContext';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { prisma } from '../db/prisma';

import { getSession } from 'next-auth/react';
import { vifurushiPackage } from '@prisma/client';
export const getServerSideProps: GetServerSideProps = async (context) => {
	const session = await getSession(context);
	if (!session) {
		return {
			redirect: {
				destination: `/Auth/SignIn?callbackUr=/`,
				permanent: false,
			},
		};
	}
	const packageFromServer = await prisma.vifurushiPackage.findMany({
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
		props: { packageDetails },
	};
};

function Pricing({
	packageDetails,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
	console.log(packageDetails);

	const { navActive, setNavActive, userData } = useContext(NavContext);
	const { query, push } = useRouter();
	let callback = query.callbackUrl;
	const notify = (message: string) => toast(message);
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);

	let handleNotes = () => {
		let note = {
			notesDownload: 1,
			quizExcercises: 1,
			key: 'Notes',
		};
		sendToDatabase(note);
	};

	let handleQuiz = () => {
		let quiz = {
			quizExcercises: 10,
			key: 'Quiz',
		};
		sendToDatabase(quiz);
	};

	let handleExamUnsolved = () => {
		let examUnsolved = {
			examsUnsolvedDownload: 1,
			quizExcercises: 1,
			key: 'Unsolved Exam',
		};
		sendToDatabase(examUnsolved);
	};

	let handleExamSolved = () => {
		let examSolved = {
			examsSolvedDownload: 1,
			examAccess: 1,
			quizExcercises: 1,
			key: 'Solved Exam',
		};
		sendToDatabase(examSolved);
	};

	let handleBooks = () => {
		let books = {
			quizExcercises: 1,
			booksDownload: 1,
			key: 'Books',
		};
		sendToDatabase(books);
	};

	let sendToDatabase = (databaseData: {}) => {
		let database = { ...databaseData, id: userData.id };
		axios({
			method: 'post',
			url: 'http://localhost:3000/api/updateKifurushi',
			data: database,
		})
			.then(function (response) {
				// handle success
				if (response.data.type == 'success') {
					notifySuccess(response.data.message);
					if (typeof callback != 'undefined') {
						push(`${callback}`);
					}
				} else {
					notifyError(response.data.message);
				}
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};

	return (
		<div className={Styles.container}>
			<Toaster position='bottom-left' reverseOrder={false} />
			<div className={Styles.innerContainer}>
				<div className={Styles.intro}>
					Find the right package to power your learning.
				</div>
				<div className={Styles.details}>
					We believe education is free, all costs are subjected to system
					mentainance and upkeep.
				</div>
				<div className={Styles.cardContainer}>
					{packageDetails.map((packageName: vifurushiPackage) => (
						<div className={Styles.pricingCard} key={packageName.id}>
							<div className={Styles.pricing}>
								<div className={Styles.price}>
									{/* <sup>Tsh</sup> */}
									<span>{packageName.price}</span>
								</div>
								<span className={Styles.type}>{packageName.name}</span>
								<p>{packageName.description}</p>
							</div>
							<div className={Styles.cardBody}>
								<div className={Styles.topShape3}></div>
								<div className={Styles.cardContent}>
									<ul>
										<li>
											Quiz <div className={Styles.icon}>10 Excercises</div>
										</li>
									</ul>
									<button onClick={handleQuiz} className={Styles.btn3}>
										START
									</button>
								</div>
							</div>
							<div className={Styles.ribbon3}></div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

export default Pricing;

//*Removing default search bar :)
Pricing.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};
