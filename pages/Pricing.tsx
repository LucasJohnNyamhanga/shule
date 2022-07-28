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
import { Quiz } from '@mui/icons-material';
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

const Pricing = ({
	packageDetails,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	let notesData: vifurushiPackage,
		quizData: vifurushiPackage,
		examAnsweredData: vifurushiPackage,
		examUnansweredData: vifurushiPackage,
		libraryData: vifurushiPackage;

	packageDetails.map((pack: vifurushiPackage) => {
		switch (pack.name) {
			case 'Notes':
				notesData = pack;
				break;
			case 'Quiz':
				quizData = pack;
				break;
			case 'Exams':
				if (pack.description == 'Without Answers') {
					examUnansweredData = pack;
				} else {
					examAnsweredData = pack;
				}
				break;
			case 'Library':
				libraryData = pack;
				break;

			default:
				break;
		}
	});

	const { userData } = useContext(NavContext);
	const { query, push } = useRouter();
	let callback = query.callbackUrl;
	const notify = (message: string) => toast(message);
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);

	let handleNotes = () => {
		let note = {
			notesDownload: notesData.notesDownload,
			quizExcercises: notesData.quizExcercises,
			key: 'Notes',
		};
		sendToDatabase(note);
	};

	let handleQuiz = () => {
		let quiz = {
			quizExcercises: quizData.quizExcercises,
			key: 'Quiz',
		};
		sendToDatabase(quiz);
	};

	let handleExamUnsolved = () => {
		let examUnsolved = {
			examsUnsolvedDownload: examUnansweredData.examsUnsolvedDownload,
			quizExcercises: examUnansweredData.quizExcercises,
			key: 'Unsolved Exam',
		};
		sendToDatabase(examUnsolved);
	};

	let handleExamSolved = () => {
		let examSolved = {
			examsSolvedDownload: examAnsweredData.examsSolvedDownload,
			examAccess: examAnsweredData.examAccess,
			quizExcercises: examAnsweredData.quizExcercises,
			key: 'Solved Exam',
		};
		sendToDatabase(examSolved);
	};

	let handleBooks = () => {
		let books = {
			quizExcercises: libraryData.quizExcercises,
			booksDownload: libraryData.booksDownload,
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

	function isPrime(num: number) {
		// returns boolean
		if (num <= 1) return false; // negatives
		if (num % 2 == 0 && num > 2) return false; // even numbers
		const s = Math.sqrt(num); // store the square to loop faster
		for (let i = 3; i <= s; i += 2) {
			// start from 3, stop at the square, increment in twos
			if (num % i === 0) return false; // modulo shows a divisor was found
		}
		return true;
	}

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
					{packageDetails.map(
						(packageName: vifurushiPackage, index: number) => (
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
									<div
										className={
											index === 0
												? Styles.topShape4
												: index % 2 == 0
												? Styles.topShape1
												: isPrime(index)
												? Styles.topShape2
												: Styles.topShape3
										}></div>
									<div className={Styles.cardContent}>
										<ul>
											{packageName.notesDownload == 0
												? false
												: true && (
														<li>
															Notes Download{' '}
															<div className={Styles.icon}>
																{packageName.notesDownload}
															</div>
														</li>
												  )}
											{packageName.quizExcercises == 0
												? false
												: true && (
														<li>
															Quiz Excercises{' '}
															<div className={Styles.icon}>
																{packageName.quizExcercises}
															</div>
														</li>
												  )}
											{packageName.examsUnsolvedDownload == 0
												? false
												: true && (
														<li>
															Unsolved Exam Download{' '}
															<div className={Styles.icon}>
																{packageName.examsUnsolvedDownload}
															</div>
														</li>
												  )}
											{packageName.examsSolvedDownload == 0
												? false
												: true && (
														<li>
															Solved Exam Download{' '}
															<div className={Styles.icon}>
																{packageName.quizExcercises}
															</div>
														</li>
												  )}
											{packageName.examAccess == 0
												? false
												: true && (
														<li>
															Solved Exam Access{' '}
															<div className={Styles.icon}>
																{packageName.quizExcercises}
															</div>
														</li>
												  )}
											{packageName.booksDownload == 0
												? false
												: true && (
														<li>
															Books Download{' '}
															<div className={Styles.icon}>
																{packageName.booksDownload}
															</div>
														</li>
												  )}
										</ul>
										<button
											onClick={handleQuiz}
											className={
												index === 0
													? Styles.btn4
													: index % 2 == 0
													? Styles.btn1
													: isPrime(index)
													? Styles.btn2
													: Styles.btn3
											}>
											START
										</button>
									</div>
								</div>
								<div
									className={
										index === 0
											? Styles.ribbon4
											: index % 2 == 0
											? Styles.ribbon1
											: isPrime(index)
											? Styles.ribbon2
											: Styles.ribbon3
									}></div>
							</div>
						)
					)}
				</div>
			</div>
		</div>
	);
};

export default Pricing;

//*Removing default search bar :)
Pricing.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};
