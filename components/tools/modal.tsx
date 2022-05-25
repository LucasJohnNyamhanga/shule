import React, {
	useState,
	forwardRef,
	ReactNode,
	ReactElement,
	Ref,
	useEffect,
	useRef,
} from 'react';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import Styles from '../../styles/modal.module.scss';
import axios from 'axios';
import InputTextMui from '../../components/tools/InputTextMui';
import stringSimilarity from 'string-similarity';
import { convert } from 'html-to-text';

const Transition = forwardRef(function Transition(
	props: TransitionProps & {
		children: ReactElement<any, any>;
	},
	ref: Ref<unknown>
) {
	return <Slide direction='down' ref={ref} {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
	'& .MuiDialogContent-root': {
		padding: theme.spacing(2),
	},
	'& .MuiDialogActions-root': {
		padding: theme.spacing(1),
	},
}));

export interface DialogTitleProps {
	id: string;
	children?: ReactNode;
	onClose: () => void;
}

const BootstrapDialogTitle = (props: DialogTitleProps) => {
	const { children, onClose, ...other } = props;

	return (
		<DialogTitle sx={{ m: 0, p: 2 }} {...other}>
			{children}
			{onClose ? (
				<IconButton
					aria-label='close'
					onClick={onClose}
					sx={{
						position: 'absolute',
						right: 8,
						top: 8,
						color: (theme) => theme.palette.grey[500],
					}}>
					<CloseIcon />
				</IconButton>
			) : null}
		</DialogTitle>
	);
};

type dataModal = {
	name: string;
	id: number;
	subject: string;
	topic: string;
	form: string;
};

type dataQuestion = {
	id: number;
	question: string;
	questionFormat: {
		name: string;
		id: number;
	};
	answer: {
		id: number;
		answer: string;
		valid: boolean;
	}[];
	questionFormatId: number;
	answerDetails: string;
}[];

type answerData = {
	data: string[];
};

type progressStatusData = {
	dataProgress: {
		isAttempted: boolean;
		isCorrect: boolean;
		questionNumber: number;
	}[];
};

let list = [0, 1, 2, 3];
let majorList: any[] = [];

let createMajorList = (questionSize: number) => {
	for (let x = 0; x < questionSize; x++) {
		let listCopy = [...list];
		shuffleArray(listCopy);
		majorList.push({ data: listCopy });
	}
};

let listTF = [0, 1];
let majorListTF: any[] = [];

let createMajorListTF = (questionSize: number) => {
	for (let x = 0; x < questionSize; x++) {
		let listCopy = [...listTF];
		shuffleArray(listCopy);
		majorListTF.push({ data: listCopy });
	}
};

function shuffleArray(array: number[]) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
}

shuffleArray(list);

let answers: {
	id: number;
	answer: string;
	valid: boolean;
}[] = [];

export default function CustomizedDialogs({
	name,
	id,
	subject,
	topic,
	form,
}: dataModal) {
	const [open, setOpen] = useState(false);
	const [score, setScore] = useState(0);
	const [attempted, setAttempted] = useState(0);
	const [previous, setPrevious] = useState(false);
	const [result, setResults] = useState(false);
	const [next, setNext] = useState(false);
	const [questionAvailable, setQuestionAvailable] = useState(false);
	const [questionList, setQuestionList] = useState<dataQuestion>([]);
	const [index, setIndex] = useState(0);
	const [progressStatusReport, setProgressStatusReport] = useState(false);
	const [answer, setAnswer] = useState<answerData>({
		data: [],
	});

	type dataAnswerDetails = {
		dataAnswer: boolean[];
	};

	const [answerDetails, setAnswerDetails] = useState<dataAnswerDetails>({
		dataAnswer: [],
	});

	type dataWrongAnswerDetails = {
		wrongAnswer: string[];
	};

	const [WrongAnswerDetails, setWrongAnswerDetails] =
		useState<dataWrongAnswerDetails>({
			wrongAnswer: [],
		});

	type dataCorrectAnswer = {
		correctAnswer: boolean[];
	};

	const [CorrectAnswerDetails, setCorrectAnswerDetails] =
		useState<dataCorrectAnswer>({
			correctAnswer: [],
		});

	type dataUserAnswer = {
		userAnswer: {
			answer: string;
		}[];
	};

	const [userAnswerDetails, setUserAnswerDetails] = useState<dataUserAnswer>({
		userAnswer: [],
	});

	const [progressStatus, setProgressStatus] = useState<progressStatusData>({
		dataProgress: [],
	});

	type dataDefaultAnswer = {
		answerInputs: string[];
	};

	const [defaultAnswer, setDefaultAnswer] = useState<dataDefaultAnswer>({
		answerInputs: [],
	});

	const handleClickOpen = () => {
		setOpen(true);
		retriveData();
	};

	const handleClose = () => {
		setQuestionAvailable(false);
		setIndex(0);
		setQuestionList([]);
		setOpen(false);
		setProgressStatusReport(false);
		let { data } = answer;
		data = [];
		setAnswer({ data });
		let { dataProgress } = progressStatus;
		dataProgress = [];
		setProgressStatus({ dataProgress });
		let { correctAnswer } = CorrectAnswerDetails;
		correctAnswer = [];
		setCorrectAnswerDetails({ correctAnswer });
		let { dataAnswer } = answerDetails;
		dataAnswer = [];
		setAnswerDetails({ dataAnswer });
		let { wrongAnswer } = WrongAnswerDetails;
		wrongAnswer = [];
		setWrongAnswerDetails({ wrongAnswer });
		setScore(0);
		setQuestionAvailable(false);
		setResults(false);
		let { answerInputs } = defaultAnswer;
		answerInputs = [];
		setDefaultAnswer({ answerInputs });
		setAttempted(0);
	};

	const retriveData = () => {
		setQuestionList([]);
		setQuestionAvailable(false);
		axios({
			method: 'post',
			url: 'http://localhost:3000/api/questions',
			data: {
				reviewId: id,
			},
		})
			.then(function (response: { data: any }) {
				const notesFromServer = JSON.parse(JSON.stringify(response.data));
				// handle success
				if (notesFromServer.length > 0) {
					majorList = [];
					majorListTF = [];
					createMajorList(notesFromServer.length);
					createMajorListTF(notesFromServer.length);
					setQuestionList(notesFromServer);
					setQuestionAvailable(true);
				} else {
					setQuestionAvailable(false);
				}
			})
			.catch(function (error: any) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};

	const handlePrevious = () => {
		if (questionList!.length > 0) {
			if (questionList!.length >= index + 1 && index > 0) {
				setIndex(index - 1);
			}
		}
	};

	const handleNext = () => {
		if (questionList!.length > 0) {
			if (questionList!.length > index + 1) {
				setIndex(index + 1);
			}
		}
	};

	const handleTextInput = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		name: string
	) => {
		if (answerDetails.dataAnswer[index]) {
		} else {
			let value: string = event.currentTarget.value;
			let { answerInputs } = defaultAnswer;
			answerInputs[index] = value;
			setDefaultAnswer({ answerInputs });
		}
	};

	let letter = ['A', 'B', 'C', 'D'];

	let handleAnswer = (
		event: React.MouseEvent<HTMLElement>,
		answers: any[],
		modifier: number[],
		questionType: string
	) => {
		let target = event.currentTarget;
		let selected = target.dataset.valid;
		let targetPosition = target.dataset.target!;
		let answerTag = '';
		if (questionType == 'True or False') {
			answerTag = target.dataset.answer!;
		}
		setAttempted(attempted + 1);
		let correct;
		let correctStatus: boolean;
		for (let index = 0; index < answers.length; index++) {
			if (answers[modifier[index]].valid) {
				correct = letter[modifier.indexOf(modifier[index])];
			}
		}
		let { data } = answer;

		if (selected == correct) {
			correctStatus = true;
			setScore(score + 1);
			if (questionType == 'True or False') {
				data[index] = `${answerTag} is CORRECT.`;
			} else {
				data[index] = `You have selected ${selected}, which is CORRECT.`;
			}
		} else {
			correctStatus = false;
			if (questionType == 'True or False') {
				data[index] = `${answerTag} is INCORRECT.`;
			} else {
				data[index] = `${selected} is INCORRECT. The answer is ${correct}`;
			}
		}

		setAnswer({
			data,
		});

		let { dataProgress } = progressStatus;
		dataProgress[index] = {
			isAttempted: true,
			isCorrect: correctStatus,
			questionNumber: index + 1,
		};

		setProgressStatus({
			dataProgress,
		});

		setProgressStatusReport(true);

		let { dataAnswer } = answerDetails;
		dataAnswer[index] = true;
		setAnswerDetails({
			dataAnswer,
		});

		let { correctAnswer } = CorrectAnswerDetails;
		correctAnswer[index] = true;
		setCorrectAnswerDetails({
			correctAnswer,
		});

		displayWrongAnswer(targetPosition);
	};

	let displayWrongAnswer = (target: string) => {
		let { wrongAnswer } = WrongAnswerDetails;
		wrongAnswer[index] = target;
		setWrongAnswerDetails({ wrongAnswer });
	};

	if (questionList.length > 0) answers = questionList[index].answer;

	// eslint-disable-next-line react-hooks/exhaustive-deps
	let thisList: number[] = [];

	for (const list of majorList) {
		if (majorList.indexOf(list) == index) {
			thisList = [...list.data];
		}
	}

	let thisListTF: number[] = [];

	for (const list of majorListTF) {
		if (majorListTF.indexOf(list) == index) {
			thisListTF = [...list.data];
		}
	}

	useEffect(() => {
		if (questionList.length > index + 1) {
			setNext(true);
		} else {
			setNext(false);
		}

		if (index > 0) {
			setPrevious(true);
		} else {
			setPrevious(false);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [questionList, index]);

	let handleStatusProgress = (questionNumber: number) => {
		setIndex(questionNumber - 1);
	};

	let handleSimilarity = (validAnswer: string) => {
		setAttempted(attempted + 1);
		const html = validAnswer;
		const text = convert(html, {
			wordwrap: false,
		});

		if (typeof defaultAnswer.answerInputs[index] != 'string') {
			let { answerInputs } = defaultAnswer;
			answerInputs[index] = '';
			setDefaultAnswer({ answerInputs });
		}

		let correctStatus: boolean;
		let result = stringSimilarity.compareTwoStrings(
			defaultAnswer.answerInputs[index],
			text
		);

		let resultStatus = ``;

		if (result > 0.6) {
			resultStatus = `Your answer is CORRECT`;
			correctStatus = true;
			setScore(score + 1);
		} else {
			resultStatus = `Your answer is somehow INCORRECT`;
			correctStatus = false;
		}

		let { data } = answer;
		data[index] = resultStatus;
		setAnswer({ data });

		let { dataProgress } = progressStatus;
		dataProgress[index] = {
			isAttempted: true,
			isCorrect: correctStatus,
			questionNumber: index + 1,
		};

		let { dataAnswer } = answerDetails;
		dataAnswer[index] = true;
		setAnswerDetails({ dataAnswer });

		setProgressStatusReport(true);
	};

	let handleSimilarityFillIn = (validAnswer: string) => {
		let correctStatus: boolean;
		setAttempted(attempted + 1);
		const html = validAnswer;
		const text = convert(html, {
			wordwrap: false,
		});

		if (typeof defaultAnswer.answerInputs[index] != 'string') {
			let { answerInputs } = defaultAnswer;
			answerInputs[index] = '';
			setDefaultAnswer({ answerInputs });
		}
		let result = stringSimilarity.compareTwoStrings(
			defaultAnswer.answerInputs[index],
			text
		);
		let resultStatus = ``;

		if (result > 0.8) {
			resultStatus = `Your answer is CORRECT`;
			correctStatus = true;
			setScore(score + 1);
		} else {
			resultStatus = `Your answer is somehow INCORRECT`;
			correctStatus = false;
		}

		let { data } = answer;
		data[index] = resultStatus;
		setAnswer({ data });

		let { dataProgress } = progressStatus;
		dataProgress[index] = {
			isAttempted: true,
			isCorrect: correctStatus,
			questionNumber: index + 1,
		};

		let { dataAnswer } = answerDetails;
		dataAnswer[index] = true;
		setAnswerDetails({ dataAnswer });

		setProgressStatusReport(true);
	};

	let handleQuizResults = () => {
		setResults(true);
	};

	return (
		<div className={Styles.modal}>
			<Button variant='outlined' onClick={handleClickOpen} fullWidth>
				{name}
			</Button>
			<BootstrapDialog
				fullWidth={true}
				// fullScreen={true}
				maxWidth={'md'}
				scroll={'paper'}
				onClose={(_, reason) => {
					if (reason !== 'backdropClick') {
						handleClose();
					}
				}}
				aria-labelledby='customized-dialog-title'
				open={open}
				TransitionComponent={Transition}>
				<BootstrapDialogTitle
					id='customized-dialog-title'
					onClose={handleClose}>
					<div className={Styles.headerContainer}>
						<div className={Styles.header}>{name}</div>
						<div
							className={
								Styles.headerBelow
							}>{`${form} > ${subject} > ${topic}`}</div>
						{!result ? (
							<div className={Styles.headerBelow}>{`Question ${index + 1} of ${
								questionList.length
							}`}</div>
						) : (
							<div className={Styles.headerBelow}>Result Status</div>
						)}
					</div>
				</BootstrapDialogTitle>
				<DialogContent dividers>
					{questionAvailable && !result && (
						<div className={Styles.question}>
							{questionList[index].questionFormat.name == 'True or False' && (
								<>
									<div className={Styles.questionQuestion}>
										<div className={Styles.questionNumber}>{index + 1}.</div>
										<div
											className='ckContent'
											dangerouslySetInnerHTML={{
												__html: questionList[index].question,
											}}
										/>
									</div>
									{answers.map((answer, answerIndex) => (
										<div
											key={answer.id}
											className={`${Styles.answer} ${
												answers[majorListTF[index].data[answerIndex]].valid &&
												CorrectAnswerDetails.correctAnswer[index]
													? Styles.correct
													: ''
											}  ${
												!answers[majorListTF[index].data[answerIndex]].valid &&
												WrongAnswerDetails.wrongAnswer[index] ==
													`target${answerIndex + 200}`
													? Styles.wrong
													: ''
											}`}
											data-valid={letter[answerIndex]}
											data-target={`target${answerIndex + 200}`}
											data-answer={
												answers[majorListTF[index].data[answerIndex]].answer
											}
											onClick={(event: React.MouseEvent<HTMLElement>) => {
												answerDetails.dataAnswer[index]
													? ''
													: handleAnswer(
															event,
															answers,
															majorListTF[index].data,
															'True or False'
													  );
											}}>
											{answers[majorListTF[index].data[answerIndex]].answer}
										</div>
									))}
								</>
							)}
							{questionList[index].questionFormat.name == 'Multiple Choice' && (
								<>
									<div className={Styles.questionQuestion}>
										<div className={Styles.questionNumber}>{index + 1}.</div>
										<div
											className='ckContent'
											dangerouslySetInnerHTML={{
												__html: questionList[index].question,
											}}
										/>
									</div>
									{answers.map((answer, answerIndex) => (
										<div
											key={answer.id}
											className={`${Styles.answersLayout} ${
												answers[majorList[index].data[answerIndex]].valid &&
												CorrectAnswerDetails.correctAnswer[index]
													? Styles.correct
													: ''
											} ${
												!answers[majorList[index].data[answerIndex]].valid &&
												WrongAnswerDetails.wrongAnswer[index] ==
													`target${answerIndex + 100}`
													? Styles.wrong
													: ''
											}`}
											data-valid={letter[answerIndex]}
											data-target={`target${answerIndex + 100}`}
											onClick={(event: React.MouseEvent<HTMLElement>) => {
												answerDetails.dataAnswer[index]
													? ''
													: handleAnswer(
															event,
															answers,
															majorList[index].data,
															'Multiple Choice'
													  );
											}}>
											<div className={Styles.letter}>{letter[answerIndex]}</div>
											<div
												className={Styles.word}
												dangerouslySetInnerHTML={{
													__html:
														answers[majorList[index].data[answerIndex]].answer,
												}}
											/>
										</div>
									))}
								</>
							)}
							{questionList[index].questionFormat.name == 'Explanation' && (
								<>
									<div className={Styles.questionQuestion}>
										<div className={Styles.questionNumber}>{index + 1}.</div>
										<div
											className='ckContent'
											dangerouslySetInnerHTML={{
												__html: questionList[index].question,
											}}
										/>
									</div>
									<div>
										<InputTextMui
											label='Your Answer'
											content={defaultAnswer.answerInputs[index]}
											name='formName'
											handleChange={handleTextInput}
										/>
										<Button
											variant='outlined'
											onClick={() => {
												answerDetails.dataAnswer[index]
													? ''
													: handleSimilarity(answers[0].answer);
											}}>
											Submit
										</Button>
									</div>
								</>
							)}
							{questionList[index].questionFormat.name == 'Fill In' && (
								<>
									<div className={Styles.questionQuestion}>
										<div className={Styles.questionNumber}>{index + 1}.</div>
										<div
											className='ckContent'
											dangerouslySetInnerHTML={{
												__html: questionList[index].question,
											}}
										/>
									</div>
									<div>
										<InputTextMui
											label='Your Answer'
											content={defaultAnswer.answerInputs[index]}
											name='formName'
											handleChange={handleTextInput}
										/>
										<Button
											variant='outlined'
											onClick={() => {
												answerDetails.dataAnswer[index]
													? ''
													: handleSimilarityFillIn(answers[0].answer);
											}}>
											Submit
										</Button>
									</div>
								</>
							)}
							<div className={Styles.resultStatus}>{answer.data[index]}</div>
							{progressStatusReport && (
								<>
									<div className={Styles.progressQuestionStatus}>
										Progress Status
									</div>
									<div className={Styles.statusQuestion}>
										{progressStatus.dataProgress.map((data, index) => (
											<div
												onClick={() => {
													handleStatusProgress(data.questionNumber);
												}}
												key={index}
												className={
													data.isCorrect
														? `${Styles.status}  ${Styles.correct}`
														: `${Styles.status}  ${Styles.wrong}`
												}>
												{data.questionNumber}
											</div>
										))}
									</div>
								</>
							)}
							{answerDetails.dataAnswer[index] && (
								<>
									<div className={Styles.progressQuestionStatus}>
										Answer In Details
									</div>
									<div
										className='ckContent'
										dangerouslySetInnerHTML={{
											__html: questionList[index].answerDetails,
										}}
									/>
								</>
							)}
						</div>
					)}

					{!questionAvailable && !result && <div>No question available</div>}
					{questionAvailable && result && (
						<>
							<div className={Styles.result}>
								Score: {Math.floor((score / questionList.length) * 100)}%{' '}
							</div>
							<div className={Styles.scoreStatus}>
								<div>Correct: {score}</div>
								<div>Incorrect: {attempted - score}</div>
								<div>Unattempted: {questionList.length - attempted}</div>
								<div>Tuzo Point: 5</div>
							</div>
						</>
					)}
				</DialogContent>
				<DialogActions>
					<div className={Styles.nav}>
						<div>
							{!result && previous && (
								<Button autoFocus onClick={handlePrevious}>
									Previous
								</Button>
							)}
						</div>

						<div>
							{!result && next && (
								<Button autoFocus onClick={handleNext}>
									Next
								</Button>
							)}
							{!next && !result && questionList.length == index + 1 && (
								<Button autoFocus onClick={handleQuizResults}>
									Results
								</Button>
							)}
							{result && (
								<Button autoFocus onClick={handleClose}>
									Exit
								</Button>
							)}
						</div>
					</div>
				</DialogActions>
			</BootstrapDialog>
		</div>
	);
}
