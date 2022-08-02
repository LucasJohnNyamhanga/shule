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
import DisplayChip from '../components/tools/displayChip';
import SelectMiu from '../components/tools/SelectMui';
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

	const vifurushiFromServer = await prisma.vifurushiPackage.findMany({
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
	const vifurushi = await JSON.parse(JSON.stringify(vifurushiFromServer));

	await prisma.$disconnect();
	return {
		props: { userfound, packageDetails, vifurushi },
	};
};

const Notes = ({
	userfound,
	packageDetails,
	vifurushi,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { query, push } = useRouter();
	let callback = query.callbackUrl;
	const [planQuantity, setPlanQuantity] = useState(1);
	const [notesDownload, setNotesDownload] = useState(0);
	const [quizExcercises, setQuizExcercises] = useState(0);
	const [examsUnsolvedDownload, setExamsUnsolvedDownload] = useState(0);
	const [examsSolvedDownload, setExamsSolvedDownload] = useState(0);
	const [examAccess, setExamAccess] = useState(0);
	const [booksDownload, setBooksDownload] = useState(0);
	const [price, setPrice] = useState(0);
	const [runOnce, setRunOnce] = useState(true);

	const randomPin = () => {
		let val = Math.floor(1000 + Math.random() * 9000);
		console.log(val);
	};

	const increase = () => {
		setPlanQuantity(planQuantity + 1);
		packageDetails.price * planQuantity;
		addPrice(packageDetails.price);
		AddTableQuantity();
	};

	const decrease = () => {
		if (planQuantity > 1) {
			setPlanQuantity(planQuantity - 1);
			subPrice(packageDetails.price);
			SubTableQuantity();
		}
	};

	const addPrice = (priceTag: number) => {
		setPrice(price + priceTag);
	};

	const subPrice = (priceTag: number) => {
		setPrice(price - priceTag);
	};

	const AddTableQuantity = () => {
		{
			notesDownload != 0
				? setNotesDownload(notesDownload + packageDetails.notesDownload)
				: '';
		}
		{
			quizExcercises != 0
				? setQuizExcercises(quizExcercises + packageDetails.quizExcercises)
				: '';
		}
		{
			examsUnsolvedDownload != 0
				? setExamsUnsolvedDownload(
						examsUnsolvedDownload + packageDetails.examsUnsolvedDownload
				  )
				: '';
		}
		{
			examsSolvedDownload != 0
				? setExamsSolvedDownload(
						examsSolvedDownload + packageDetails.examsSolvedDownload
				  )
				: '';
		}
		{
			examAccess != 0
				? setExamAccess(examAccess + packageDetails.examAccess)
				: '';
		}
		{
			booksDownload != 0
				? setBooksDownload(booksDownload + packageDetails.booksDownload)
				: '';
		}
	};

	const SubTableQuantity = () => {
		{
			notesDownload != 0
				? setNotesDownload(notesDownload - packageDetails.notesDownload)
				: '';
		}
		{
			quizExcercises != 0
				? setQuizExcercises(quizExcercises - packageDetails.quizExcercises)
				: '';
		}
		{
			examsUnsolvedDownload != 0
				? setExamsUnsolvedDownload(
						examsUnsolvedDownload - packageDetails.examsUnsolvedDownload
				  )
				: '';
		}
		{
			examsSolvedDownload != 0
				? setExamsSolvedDownload(
						examsSolvedDownload - packageDetails.examsSolvedDownload
				  )
				: '';
		}
		{
			examAccess != 0
				? setExamAccess(examAccess - packageDetails.examAccess)
				: '';
		}
		{
			booksDownload != 0
				? setBooksDownload(booksDownload - packageDetails.booksDownload)
				: '';
		}
	};
	type dataTypeSelect = {
		id: string;
		label: string;
	}[];

	const [selectOption, setSelectOption] = useState<dataTypeSelect>([]);

	type templateType = {
		id: string;
		label: string;
	};

	let options: { label: string; value: string }[] = [];

	for (const kifurushi of vifurushi) {
		if (kifurushi.id !== packageDetails.id)
			options.push({
				label: `${kifurushi.name} ${kifurushi.description}`,
				value: kifurushi.id,
			});
	}

	let handleSelect = (value: string) => {
		let template: templateType = {
			id: '',
			label: '',
		};
		for (const form of options) {
			if (form.value == value) {
				template = {
					id: value,
					label: form.label,
				};
			}
		}
		add(selectOption, template);
	};

	function add(arrName: dataTypeSelect, tamplate: templateType) {
		const found = arrName.some((item) => item.id === tamplate.id);
		if (!found) {
			setSelectOption([...selectOption, tamplate]);

			vifurushi.find((kifurushi) => {
				if (kifurushi.id == tamplate.id) {
					addPrice(kifurushi.price);

					setNotesDownload(kifurushi.notesDownload + notesDownload);
					setQuizExcercises(kifurushi.quizExcercises + quizExcercises);
					setExamsUnsolvedDownload(
						kifurushi.examsUnsolvedDownload + examsUnsolvedDownload
					);
					setExamsSolvedDownload(
						kifurushi.examsSolvedDownload + examsSolvedDownload
					);
					setExamAccess(kifurushi.examAccess + examAccess);
					setBooksDownload(kifurushi.booksDownload + booksDownload);
				}
			});
		}
	}

	let handleDeleteFormDisplay = (label: string) => {
		let filtered = selectOption.filter((data) => {
			if (data.label == label) {
				vifurushi.find((kifurushi) => {
					if (kifurushi.id == data.id) {
						subPrice(kifurushi.price);

						setNotesDownload(notesDownload - kifurushi.notesDownload);
						setQuizExcercises(quizExcercises - kifurushi.quizExcercises);
						setExamsUnsolvedDownload(
							examsUnsolvedDownload - kifurushi.examsUnsolvedDownload
						);
						setExamsSolvedDownload(
							examsSolvedDownload - kifurushi.examsSolvedDownload
						);
						setExamAccess(examAccess - kifurushi.examAccess);
						setBooksDownload(booksDownload - kifurushi.booksDownload);
					}
				});
			}
			return data.label != label;
		});

		setSelectOption(filtered);
	};

	useEffect(() => {
		if (runOnce) {
			randomPin();
			setNotesDownload(packageDetails.notesDownload);
			setQuizExcercises(packageDetails.quizExcercises);
			setExamsUnsolvedDownload(packageDetails.examsUnsolvedDownload);
			setExamsSolvedDownload(packageDetails.examsSolvedDownload);
			setExamAccess(packageDetails.examAccess);
			setBooksDownload(packageDetails.booksDownload);
			setPrice(packageDetails.price);
			setRunOnce(false);
		}
	}, []);

	return (
		<div className={Styles.container}>
			<Toaster position='top-center' reverseOrder={false} />
			<div className={Styles.innerContainer}>
				<div className={Styles.header}>
					You’re almost there!, Complete your order now.
				</div>
				<div>
					<div className={Styles.plan}>
						1. Choose Your Package Quantity Or Add Another Package
					</div>
					<div className={Styles.plan1}>
						<div className={Styles.planCntainer}>
							<div>Selected Package: </div>
							<div
								className={
									Styles.details
								}>{`${packageDetails.name} ${packageDetails.description} Package`}</div>
						</div>
						<div className={Styles.planCntainer}>
							<div>Package Quantity</div>
							<div className={`${Styles.form} ${Styles.details}`}>
								<div
									onClick={decrease}
									className={`${Styles.valuebutton} ${Styles.decrease} ${Styles.details}`}>
									<TiMinus />
								</div>
								<input
									className={Styles.inputwrap}
									type='number'
									id='number'
									value={planQuantity}
									onChange={() => {}}
								/>
								<div
									onClick={increase}
									className={`${Styles.valuebutton} ${Styles.increase}`}>
									<TiPlus />
								</div>
							</div>
						</div>
						<table>
							<caption>{`${
								selectOption.length > 0
									? `All Packages`
									: packageDetails.name + ` Package`
							}  Content`}</caption>
							<thead>
								<tr>
									<th scope='col'>Package Content</th>
									<th scope='col'>Quantity</th>
								</tr>
							</thead>
							<tbody>
								{notesDownload != 0 && (
									<tr>
										<td>{`Notes Download`}</td>
										<td>{`${notesDownload} `}</td>
									</tr>
								)}
								{quizExcercises != 0 && (
									<tr>
										<td>{`Quiz Excercises`}</td>
										<td>{`${quizExcercises} `}</td>
									</tr>
								)}
								{examsUnsolvedDownload != 0 && (
									<tr>
										<td>{`Unsolved Exam Download`}</td>
										<td>{`${examsUnsolvedDownload} `}</td>
									</tr>
								)}
								{examsSolvedDownload != 0 && (
									<tr>
										<td>{`Solved Exam Download`}</td>
										<td>{`${examsSolvedDownload} `}</td>
									</tr>
								)}
								{examAccess != 0 && (
									<tr>
										<td>{`Solved Exam Access`}</td>
										<td>{`${examAccess} `}</td>
									</tr>
								)}
								{booksDownload != 0 && (
									<tr>
										<td>{`Books Download`}</td>
										<td>{`${booksDownload} `}</td>
									</tr>
								)}
							</tbody>
						</table>

						<div className={Styles.additionalPackage}>
							<div>Add Additional Package And Get Discount: </div>
							<div className={Styles.mainLeft}>
								<SelectMiu
									displayLabel='Select Additional Package'
									forms={options}
									handlechange={handleSelect}
									value={''}
								/>
								<div className={Styles.chipDisplay}>
									{selectOption.map((option, index) => (
										<DisplayChip
											handleDelete={handleDeleteFormDisplay}
											label={option.label}
											key={index}
										/>
									))}
								</div>
							</div>
						</div>

						<div className={Styles.planCntainerPrice}>
							<div className={Styles.details}>
								{selectOption.length > 0 ? `Total Price: ` : `Pay :`}
							</div>
							<div className={Styles.details}>{`${price} Tsh`}</div>
						</div>
						{selectOption.length > 0 && (
							<>
								<div className={Styles.planCntainerPrice}>
									<div className={Styles.details}>Discount: </div>
									<div className={Styles.details}>{`${
										selectOption.length * 150
									} Tsh`}</div>
								</div>

								<div className={Styles.planPay}>
									<div className={Styles.details}>Pay: </div>
									<div className={Styles.details}>{`${
										price - selectOption.length * 150
									} Tsh`}</div>
								</div>
							</>
						)}
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
