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
import Loader from '../components/tools/loader';
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
	const [paymentOption, setPaymentOption] = useState('default');
	const [PIN, setPIN] = useState(1987);

	const [accountActivation, setAccountActivation] = useState(false);

	const notify = (message: string) => toast(message);
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);

	const randomPin = () => {
		let pin = Math.floor(1000 + Math.random() * 9000);
		setPIN(pin);
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
	const [loadingDisplay, setLoadingDisplay] = useState(false);

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

	const handleSelectPaymentMethod = (value: string) => {
		setPaymentOption(value);
	};

	const activatePackage = () => {
		let amountPay =
			price -
			(selectOption.length > 0
				? selectOption.length * 100 +
				  (planQuantity > 1 ? planQuantity * (packageDetails.price * 0.1) : 0)
				: 0 +
				  (planQuantity > 1 ? planQuantity * (packageDetails.price * 0.1) : 0));
		if (paymentOption == 'default') {
			notifyError('Select Payment Option And Make Payment To Proceed.');
		} else {
			let data = {
				orderNumber: `${PIN}`,
				description: `${userfound.name} as ${userfound.username} paid ${amountPay} through ${paymentOption}`,
				amountPaid: amountPay,
				booksDownload,
				examAccess,
				examsSolvedDownload,
				examsUnsolvedDownload,
				notesDownload,
				quizExcercises,
				userId: userfound.id,
			};
			sendToDatabase(data);
		}
	};

	let sendToDatabase = (databaseData: {}) => {
		setLoadingDisplay(true);
		axios({
			method: 'post',
			url: 'http://localhost:3000/api/createOrder',
			data: databaseData,
		})
			.then(function (response) {
				// handle success
				if (response.data.type == 'success') {
					notifySuccess(response.data.message);
					setAccountActivation(true);
					setLoadingDisplay(false);
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

	useEffect(() => {
		randomPin();
		setNotesDownload(packageDetails.notesDownload);
		setQuizExcercises(packageDetails.quizExcercises);
		setExamsUnsolvedDownload(packageDetails.examsUnsolvedDownload);
		setExamsSolvedDownload(packageDetails.examsSolvedDownload);
		setExamAccess(packageDetails.examAccess);
		setBooksDownload(packageDetails.booksDownload);
		setPrice(packageDetails.price);
	}, []);

	return (
		<div className={Styles.container}>
			<Toaster position='top-center' reverseOrder={false} />
			<div className={Styles.innerContainer}>
				<div className={Styles.header}>
					You’re almost there!, Complete your order now.
				</div>
				<div>
					<div className={Styles.step}>STEP 1.</div>
					<div className={Styles.plan}>
						Choose Your Package Quantity Or Add Another Package
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
							}  Content Table`}</caption>
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
							<div className={Styles.details}>{`Total Price: `}</div>
							<div className={Styles.details}>{`${price} Tsh`}</div>
						</div>
						<div className={Styles.planCntainerPrice}>
							<div className={Styles.details}>Discount: </div>
							<div className={Styles.details}>{`${
								selectOption.length > 0
									? selectOption.length * 100 +
									  (planQuantity > 1
											? planQuantity * (packageDetails.price * 0.1)
											: 0)
									: 0 +
									  (planQuantity > 1
											? planQuantity * (packageDetails.price * 0.1)
											: 0)
							} Tsh`}</div>
						</div>

						<div className={Styles.planPay}>
							<div className={Styles.details}>Pay: </div>
							<div className={Styles.details}>{`${
								price -
								(selectOption.length > 0
									? selectOption.length * 100 +
									  (planQuantity > 1
											? planQuantity * (packageDetails.price * 0.1)
											: 0)
									: 0 +
									  (planQuantity > 1
											? planQuantity * (packageDetails.price * 0.1)
											: 0))
							} Tsh`}</div>
						</div>
					</div>
				</div>
				<div className={Styles.step}>STEP 2.</div>
				<div className={Styles.plan}>Choose Payment option</div>
				<RadioCard handleSelectValue={handleSelectPaymentMethod} />
				<div className={Styles.step}>STEP 3.</div>
				<div className={Styles.plan}>Payment Procedures</div>
				{paymentOption === 'default' && (
					<div className={Styles.planCntainer}>
						<p>
							You have not selected a payment option, we have variety of mobile
							payment options to easy the payment process. Please select payment
							option to fit your need to proceed to step 3.
						</p>
					</div>
				)}
				{paymentOption === 'vodacom' && (
					<div className={Styles.planCntainer}>
						<p>
							You have selected{' '}
							<span className={Styles.text}>VODACOM MPESA from Vodacom</span> as
							your payment option, our payment number is{' '}
							<span className={Styles.text}>5212520 - DATASOFT</span>, please
							follow below instruction to complete payment.
						</p>
						<div className='ckContent'>
							<div className={`toc ${Styles.planCntainerToc}`}>
								<ol>
									<li>
										dial <span className={Styles.text}>*150*00#</span>
									</li>
									<li>
										select <span className={Styles.text}>5. Lipa Bill</span>
									</li>
									<li>
										select <span className={Styles.text}>1. Lipa kwa SIMU</span>
									</li>
									<li>
										select{' '}
										<span className={Styles.text}>2. Lipa kwa Voda Lipa</span>
									</li>
									<li>
										Ingiza Kiasi :{' '}
										<span className={Styles.text}>{`${
											price - selectOption.length * 150
										}`}</span>
									</li>
									<li>
										Ingiza lipa namba:{' '}
										<span className={Styles.text}>5212520</span>
									</li>
									<li>
										Ingiza namba ya siri:{' '}
										<span className={Styles.text}>XXXX</span>
									</li>
								</ol>
							</div>
						</div>
					</div>
				)}
				{paymentOption === 'airtel' && (
					<div className={Styles.planCntainer}>
						<p>
							You have selected{' '}
							<span className={Styles.text}>AIRTEL MONEY from Airtel</span> as
							your payment option, our payment number is{' '}
							<span className={Styles.text}>5212520 - DATASOFT</span>, please
							follow below instruction to complete payment.
						</p>
						<div className='ckContent'>
							<div className={`toc ${Styles.planCntainerToc}`}>
								<ol>
									<li>
										dial <span className={Styles.text}>*150*60#</span>
									</li>
									<li>
										select <span className={Styles.text}>5. Lipa Bill</span>
									</li>
									<li>
										select <span className={Styles.text}>1. Lipa kwa SIMU</span>
									</li>
									<li>
										select{' '}
										<span className={Styles.text}>2. Lipa kwa Voda Lipa</span>
									</li>
									<li>
										Ingiza Kiasi :{' '}
										<span className={Styles.text}>{`${
											price - selectOption.length * 150
										}`}</span>
									</li>
									<li>
										Ingiza lipa namba:{' '}
										<span className={Styles.text}>5212520</span>
									</li>
									<li>
										Ingiza namba ya siri:{' '}
										<span className={Styles.text}>XXXX</span>
									</li>
								</ol>
							</div>
						</div>
					</div>
				)}
				{paymentOption === 'tigo' && (
					<div className={Styles.planCntainer}>
						<p>
							You have selected{' '}
							<span className={Styles.text}>TIGO PESA from Tigo</span> as your
							payment option, our payment number is{' '}
							<span className={Styles.text}>5212520 - DATASOFT</span>, please
							follow below instruction to complete payment.
						</p>
						<div className='ckContent'>
							<div className={`toc ${Styles.planCntainerToc}`}>
								<ol>
									<li>
										dial <span className={Styles.text}>*150*01#</span>
									</li>

									<li>
										select <span className={Styles.text}>5. Lipa kwa SIMU</span>
									</li>
									<li>
										select{' '}
										<span className={Styles.text}>
											3. Kwenda Mitandao Mingine
										</span>
									</li>
									<li>
										select <span className={Styles.text}>1. M-PESA</span>
									</li>
									<li>
										Ingiza MPESA lipa namba:{' '}
										<span className={Styles.text}>5212520</span>
									</li>
									<li>
										Ingiza Kiasi :{' '}
										<span className={Styles.text}>{`${
											price - selectOption.length * 150
										}`}</span>
									</li>

									<li>
										Ingiza namba ya siri:{' '}
										<span className={Styles.text}>XXXX</span>
									</li>
									<li>
										Ingiza
										<span className={Styles.text}> namba 1 Kuthibitisha.</span>
									</li>
								</ol>
							</div>
						</div>
					</div>
				)}
				{paymentOption === 'halotel' && (
					<div className={Styles.planCntainer}>
						<p>
							You have selected{' '}
							<span className={Styles.text}>HALOPESA from Halotel</span> as your
							payment option, our payment number is{' '}
							<span className={Styles.text}>5212520 - DATASOFT</span>, please
							follow below instruction to complete payment.
						</p>
						<div className='ckContent'>
							<div className={`toc ${Styles.planCntainerToc}`}>
								<ol>
									<li>
										dial <span className={Styles.text}>*150*88#</span>
									</li>
									<li>
										select <span className={Styles.text}>4. Lipa Bill</span>
									</li>
									<li>
										select <span className={Styles.text}>1. Lipa kwa SIMU</span>
									</li>
									<li>
										select{' '}
										<span className={Styles.text}>2. Lipa kwa Voda Lipa</span>
									</li>
									<li>
										Ingiza Kiasi :{' '}
										<span className={Styles.text}>{`${
											price - selectOption.length * 150
										}`}</span>
									</li>
									<li>
										Ingiza lipa namba:{' '}
										<span className={Styles.text}>5212520</span>
									</li>
									<li>
										Ingiza namba ya siri:{' '}
										<span className={Styles.text}>XXXX</span>
									</li>
								</ol>
							</div>
						</div>
					</div>
				)}
				{paymentOption === 'ttcl' && (
					<div className={Styles.planCntainer}>
						<p>
							You have selected{' '}
							<span className={Styles.text}>T-PESA from TTCL</span> as your
							payment option, our payment number is{' '}
							<span className={Styles.text}>5212520 - DATASOFT</span>, please
							follow below instruction to complete payment.
						</p>
						<div className='ckContent'>
							<div className={`toc ${Styles.planCntainerToc}`}>
								<ol>
									<li>
										dial <span className={Styles.text}>*150*71#</span>
									</li>
									<li>
										select <span className={Styles.text}>4. Lipa Bill</span>
									</li>
									<li>
										select <span className={Styles.text}>1. Lipa kwa SIMU</span>
									</li>
									<li>
										select{' '}
										<span className={Styles.text}>2. Lipa kwa Voda Lipa</span>
									</li>
									<li>
										Ingiza Kiasi :{' '}
										<span className={Styles.text}>{`${
											price - selectOption.length * 150
										}`}</span>
									</li>
									<li>
										Ingiza lipa namba:{' '}
										<span className={Styles.text}>5212520</span>
									</li>
									<li>
										Ingiza namba ya siri:{' '}
										<span className={Styles.text}>XXXX</span>
									</li>
								</ol>
							</div>
						</div>
					</div>
				)}
				{paymentOption === 'zantel' && (
					<div className={Styles.planCntainer}>
						<p>
							You have selected{' '}
							<span className={Styles.text}>ESYPESA from Zantel</span> as your
							payment option, our payment number is{' '}
							<span className={Styles.text}>5212520 - DATASOFT</span>, please
							follow below instruction to complete payment.
						</p>
						<div className='ckContent'>
							<div className={`toc ${Styles.planCntainerToc}`}>
								<ol>
									<li>
										dial <span className={Styles.text}>*150*02#</span>
									</li>
									<li>
										select <span className={Styles.text}>4. Lipa Bill</span>
									</li>
									<li>
										select <span className={Styles.text}>1. Lipa kwa SIMU</span>
									</li>
									<li>
										select{' '}
										<span className={Styles.text}>2. Lipa kwa Voda Lipa</span>
									</li>
									<li>
										Ingiza Kiasi :{' '}
										<span className={Styles.text}>{`${
											price - selectOption.length * 150
										}`}</span>
									</li>
									<li>
										Ingiza lipa namba:{' '}
										<span className={Styles.text}>5212520</span>
									</li>
									<li>
										Ingiza namba ya siri:{' '}
										<span className={Styles.text}>XXXX</span>
									</li>
								</ol>
							</div>
						</div>
					</div>
				)}
				<div className={Styles.step}>STEP 4.</div>
				<div className={Styles.plan}>Account Activation</div>
				{!accountActivation && !loadingDisplay && (
					<div className={Styles.Button} onClick={activatePackage}>
						Activate Package
					</div>
				)}
				{accountActivation && (
					<div className={Styles.planCntainer}>
						<h2 className={Styles.activation}>Activation Pending</h2>
						<p>
							{`Make sure you have completed payment process and received confirmation
						sms from ${paymentOption.toUpperCase()}`}
							, <span className={Styles.text}>Send sms to 0784 477 999</span>{' '}
							with words <span className={Styles.text}>{`ORDER ${PIN}`}</span>{' '}
							to immediately activate your account, time for activation will
							depend on payment complition process from{' '}
							{`${paymentOption.toUpperCase()}`}. Check your account for updated
							information.
						</p>
						<p>
							<span className={Styles.text}>{`ORDER HELP LINE`}</span>
						</p>
						<div className='ckContent'>
							<div className={`toc ${Styles.planCntainerToc}`}>
								<ol>
									<li>
										<span className={Styles.text}>0784 477 999</span>
									</li>
									<li>
										<span className={Styles.text}>0743 713 597</span>
									</li>
								</ol>
							</div>
						</div>
					</div>
				)}
				<div className={Styles.loader}>{loadingDisplay && <Loader />}</div>
			</div>
		</div>
	);
};

export default Notes;

//*Removing default search bar :)
Notes.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};
