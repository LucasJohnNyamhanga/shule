import { ReactNode, useContext } from 'react';
import Styles from '../styles/pricing.module.scss';
import { useRouter } from 'next/router';
import { NavContext } from '../components/context/StateContext';
import axios from 'axios';
import toast, { Toaster } from 'react-hot-toast';

function Pricing(props) {
	const { navActive, setNavActive, userData } = useContext(NavContext);
	const { query, push } = useRouter();
	let callback = query.callbackUrl;
	const notify = (message: string) => toast(message);
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);

	let handleNotes = () => {
		let note = {
			notesDownload: 1,
			quizExcercises: 5,
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
			quizExcercises: 3,
			key: 'Unsolved Exam',
		};
		sendToDatabase(examUnsolved);
	};

	let handleExamSolved = () => {
		let examSolved = {
			examsSolvedDownload: 1,
			examAccess: 1,
			quizExcercises: 5,
			key: 'Solved Exam',
		};
		sendToDatabase(examSolved);
	};

	let handleBooks = () => {
		let books = {
			quizExcercises: 5,
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
					<div className={Styles.pricingCard}>
						<div className={Styles.pricing}>
							<div className={Styles.price}>
								{/* <sup>Tsh</sup> */}
								<span>500</span>
							</div>
							<span className={Styles.type}>Quiz</span>
							<p>Access & Downloads</p>
						</div>
						<div className={Styles.cardBody}>
							<div className={Styles.topShape2}></div>
							<div className={Styles.cardContent}>
								<ul>
									<li>
										Quiz <div className={Styles.icon}>10 Excercises</div>
									</li>
								</ul>
								<button onClick={handleQuiz} className={Styles.btn2}>
									START
								</button>
							</div>
						</div>
						<div className={Styles.ribbon2}></div>
					</div>
					{/* //two */}
					<div className={Styles.pricingCard}>
						<div className={Styles.pricing}>
							<div className={Styles.price}>
								{/* <sup>Tsh</sup> */}
								<span>500</span>
							</div>
							<span className={Styles.type}>Exams</span>
							<p>Without Answers</p>
						</div>
						<div className={Styles.cardBody}>
							<div className={Styles.topShape3}></div>
							<div className={Styles.cardContent}>
								<ul>
									<li>
										Exam Download<div className={Styles.icon}>1</div>
									</li>
									<li>
										Quiz <div className={Styles.icon}>3 Excercises</div>
									</li>
								</ul>
								<button onClick={handleExamUnsolved} className={Styles.btn3}>
									START
								</button>
							</div>
						</div>
						<div className={Styles.ribbon3}></div>
					</div>
					{/* //three */}
					<div className={Styles.pricingCard}>
						<div className={Styles.pricing}>
							<div className={Styles.price}>
								{/* <sup>Tsh</sup> */}
								<span>1500</span>
							</div>
							<span className={Styles.type}>Exams</span>
							<p>With Answers</p>
						</div>
						<div className={Styles.cardBody}>
							<div className={Styles.topShape3}></div>
							<div className={Styles.cardContent}>
								<ul>
									<li>
										Exam Download<div className={Styles.icon}>1</div>
									</li>
									<li>
										Exam Access<div className={Styles.icon}>1</div>
									</li>
									<li>
										Quiz <div className={Styles.icon}>5 Excercises</div>
									</li>
								</ul>
								<button onClick={handleExamSolved} className={Styles.btn3}>
									START
								</button>
							</div>
						</div>
						<div className={Styles.ribbon3}></div>
					</div>
					<div className={Styles.pricingCard}>
						<div className={Styles.pricing}>
							<div className={Styles.price}>
								{/* <sup>Tsh</sup> */}
								<span>1500</span>
							</div>
							<span className={Styles.type}>Notes</span>
							<p>Access & Downloads</p>
						</div>
						<div className={Styles.cardBody}>
							<div className={Styles.topShape1}></div>
							<div className={Styles.cardContent}>
								<ul>
									<li>
										Notes Download <div className={Styles.icon}>1</div>
									</li>

									<li>
										Quiz <div className={Styles.icon}>5 Excercises</div>
									</li>
								</ul>
								<button onClick={handleNotes} className={Styles.btn1}>
									START
								</button>
							</div>
						</div>
						<div className={Styles.ribbon1}></div>
					</div>
					<div className={Styles.pricingCard}>
						<div className={Styles.pricing}>
							<div className={Styles.price}>
								{/* <sup>Tsh</sup> */}
								<span>1500</span>
							</div>
							<span className={Styles.type}>Library</span>
							<p>Access & Downloads</p>
						</div>
						<div className={Styles.cardBody}>
							<div className={Styles.topShape4}></div>
							<div className={Styles.cardContent}>
								<ul>
									<li>
										Book Download <div className={Styles.icon}>1</div>
									</li>
									<li>
										Quiz <div className={Styles.icon}>5 Excercises</div>
									</li>
								</ul>
								<button onClick={handleBooks} className={Styles.btn4}>
									START
								</button>
							</div>
						</div>
						<div className={Styles.ribbon4}></div>
					</div>
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
