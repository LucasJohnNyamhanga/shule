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
	const { userData } = useContext(NavContext);
	const { query, push } = useRouter();
	let callback = query.callbackUrl;
	const notify = (message: string) => toast(message);
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);

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

	let handleBuy = (
		booksDownload: number,
		examAccess: number,
		examsSolvedDownload: number,
		examsUnsolvedDownload: number,
		notesDownload: number,
		quizExcercises: number
	) => {
		sendToDatabase({
			booksDownload,
			examAccess,
			examsSolvedDownload,
			examsUnsolvedDownload,
			notesDownload,
			quizExcercises,
		});
	};

	let findColor = (index: number) => {
		if (index <= 3) {
			return index + 1;
		}
		if (index > 3 && index < 7) {
			return index - 3;
		}
		if (index > 7 && index < 11) {
			return index - 6;
		}
		if (index > 11 && index < 15) {
			return index - 9;
		}
		if (index > 15 && index < 19) {
			return index - 12;
		}
		if (index > 19 && index < 23) {
			return index - 15;
		}
		if (index > 23 && index < 27) {
			return index - 18;
		}
		if (index > 27 && index < 31) {
			return index - 21;
		}
		if (index > 31 && index < 35) {
			return index - 24;
		}
		if (index > 35 && index < 39) {
			return index - 27;
		}
	};

	let showTop = (number) => {
		switch (number) {
			case 1:
				return Styles.topShape1;
				break;
			case 2:
				return Styles.topShape2;
				break;
			case 3:
				return Styles.topShape3;
				break;
			case 4:
				return Styles.topShape4;
				break;

			default:
				break;
		}
	};

	let showButton = (number) => {
		switch (number) {
			case 1:
				return Styles.btn1;
				break;
			case 2:
				return Styles.btn2;
				break;
			case 3:
				return Styles.btn3;
				break;
			case 4:
				return Styles.btn4;
				break;

			default:
				break;
		}
	};

	let showLibbon = (number) => {
		switch (number) {
			case 1:
				return Styles.ribbon1;
				break;
			case 2:
				return Styles.ribbon2;
				break;
			case 3:
				return Styles.ribbon3;
				break;
			case 4:
				return Styles.ribbon4;
				break;

			default:
				break;
		}
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
									<div className={showTop(findColor(index))}></div>
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
											onClick={() => {
												handleBuy(
													packageName.booksDownload,
													packageName.examAccess,
													packageName.examsSolvedDownload,
													packageName.examsUnsolvedDownload,
													packageName.notesDownload,
													packageName.quizExcercises
												);
											}}
											className={showButton(findColor(index))}>
											START
										</button>
									</div>
								</div>
								<div className={showLibbon(findColor(index))}></div>
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
