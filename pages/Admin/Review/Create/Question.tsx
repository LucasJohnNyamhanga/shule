import InputTextMui from '../../../../components/tools/InputTextMui';
import { type } from 'os';
import { form, subject, topic, questionFormat, review } from '@prisma/client';
import { prisma } from '../../../../db/prisma';
import SelectMiu from '../../../../components/tools/SelectMui';
import axios from 'axios';
import { useContext, useEffect, useState } from 'react';
import Styles from '../../../../styles/topic.module.scss';
import { ReactNode } from 'react';
import SnackBar from '../../../../components/tools/SnackBar';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import toast, { Toaster } from 'react-hot-toast';
import dynamic from 'next/dynamic';
import { NavContext } from '../../../../components/context/StateContext';

//load when browser kicks in, on page load
const CkEditor = dynamic(() => import('../../../../components/tools/Ck'), {
	ssr: false,
});
const url = process.env.MAIN_URL;
import { getSession } from 'next-auth/react';
import LoaderWait from '../../../../components/tools/loaderWait';
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
	const userFromServer = await prisma.users.findFirst({
		where: {
			username: session.user.email,
		},
		select: {
			isAdmin: true,
			id: true,
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
	const formsFromServer: userData = await prisma.formReview.findMany({
		select: {
			id: true,
			formName: true,
		},
	});
	const forms = JSON.parse(JSON.stringify(formsFromServer));

	const subjectsFromServer = await prisma.subjectReview.findMany({
		select: {
			id: true,
			subjectName: true,
		},
	});
	const subjects = JSON.parse(JSON.stringify(subjectsFromServer));

	const formatFromServer = await prisma.questionFormat.findMany({
		select: {
			id: true,
			name: true,
		},
	});
	const questionFormat = JSON.parse(JSON.stringify(formatFromServer));

	await prisma.$disconnect();
	return {
		props: {
			forms,
			subjects,
			questionFormat,
			userfound,
		},
	};
};

type userData = {
	id: number;
	formName: string;
}[];

type formData = {
	label: string;
	value: string;
}[];

type answerData = {
	answer: string;
	valid: Boolean;
}[];

type answerDataType = {
	answer: string;
	valid: Boolean;
};

const Create = ({
    	forms,
    	subjects,
    	questionFormat,
    	userfound,
    }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const { navActive, setNavActive } = useContext(NavContext);
	const [loading, setLoad] = useState(false);
	useEffect(() => {
		setNavActive('Admin');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [navActive]);

	type questionData = {
		question: string;
		answer: {
			answer: string;
			valid: Boolean;
		}[];
		questionFormatId: number;
		reviewId: number;
		answerDetails: string;
	};
	const [questionDetails, setQuestionDetails] = useState<questionData>({
		question: '',
		answer: [],
		questionFormatId: 0,
		reviewId: 0,
		answerDetails: '',
	});

	const [answer1, setAnswer1] = useState<answerDataType>({
		answer: '',
		valid: false,
	});
	const [answer2, setAnswer2] = useState<answerDataType>({
		answer: '',
		valid: false,
	});
	const [answer3, setAnswer3] = useState<answerDataType>({
		answer: '',
		valid: false,
	});
	const [answer4, setAnswer4] = useState<answerDataType>({
		answer: '',
		valid: false,
	});

	const [subjectValidation, setSubjectValidation] = useState({
		subjectId: '',
		topicId: '',
		formId: '',
	});

	const [trueAndFalse, setTrueAndFalse] = useState([
		{
			label: 'True',
			value: 'True',
		},
		{
			label: 'False',
			value: 'False',
		},
	]);

	const [formOptions, setFormOptions] = useState<formData>([]);
	const [subjectOptions, setSubjectOptions] = useState<formData>([]);
	const [formatOptions, setFormatOptions] = useState<formData>([]);
	const [topicOptions, setTopicOptions] = useState<formData>([]);
	const [reviewOptions, setReviewOptions] = useState<formData>([]);
	const [answerDetails, setAnswerDetails] = useState<answerData>([]);

	const notify = (message: string) => toast(message);
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);
	const [change, setChange] = useState(0);
	const [hideShowTopic, setHideShowTopic] = useState(false);
	const [hideShowReview, setHideShowReview] = useState(false);
	const [showQuestion, setShowQuestion] = useState(false);

	useEffect(() => {
		let subjectFromServer: formData = [];
		subjects.map((subject: subject) => {
			subjectFromServer.push({
				label: subject.subjectName,
				value: subject.id as unknown as string,
			});
		});
		setSubjectOptions(subjectFromServer);

		let questionFormatFromServer: formData = [];
		questionFormat.map((format: questionFormat) => {
			questionFormatFromServer.push({
				label: format.name,
				value: format.id as unknown as string,
			});
		});
		setFormatOptions(questionFormatFromServer);

		let topicFromServer: formData = [];
		forms.map((form: form) => {
			topicFromServer.push({
				label: form.formName,
				value: form.id as unknown as string,
			});
		});
		setFormOptions(topicFromServer);

		if (subjectValidation.formId != '' && subjectValidation.subjectId != '') {
			retriaveTopicsData();
		}

		if (hideShowTopic && subjectValidation.topicId != '') {
			retriaveReviewData();
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [change]);

	let handleSelectSubject = (value: string) => {
		setSubjectValidation({ ...subjectValidation, subjectId: value });
		setChange(change + 1);
	};

	let handleSelectForm = (value: string) => {
		setSubjectValidation({ ...subjectValidation, formId: value });
		setChange(change + 1);
	};

	let handleSelectTopic = (value: string) => {
		setSubjectValidation({ ...subjectValidation, topicId: value });
		setChange(change + 1);
	};

	let handleSelectFormat = (value: string) => {
		setAnswer1({ answer: '', valid: false });
		setAnswer2({ answer: '', valid: false });
		setAnswer3({ answer: '', valid: false });
		setAnswer4({ answer: '', valid: false });
		setQuestionDetails({
			...questionDetails,
			questionFormatId: parseInt(value),
		});
		setShowQuestion(true);
	};

	let handleSelectReview = (value: string) => {
		setQuestionDetails({ ...questionDetails, reviewId: parseInt(value) });
	};

	//   let handleTextInputAnswerValid = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name:string) => {
	//     let value = event.currentTarget.value;
	//     let incommingAnswer = {
	//       answer: value,
	//       valid: true,
	//     }
	//     setAnswer1(incommingAnswer);
	// }

	let handleAnswerValid = (value: string) => {
		let incommingAnswer = {
			answer: value,
			valid: true,
		};
		setAnswer1(incommingAnswer);
	};

	let handleContentQuestion = (data: string) => {
		let convertedData = data.replaceAll(
			`img`,
			`Image layout="fill" objectFit="cover"`
		);
		setQuestionDetails({ ...questionDetails, question: convertedData });
	};

	let handleContentAnswerValid = (data: string) => {
		let convertedData = data.replaceAll(
			`img`,
			`Image layout="fill" objectFit="cover"`
		);
		let incommingAnswer = {
			answer: convertedData,
			valid: true,
		};
		setAnswer1(incommingAnswer);
	};

	let handleContentAnswerDetails = (data: string) => {
		let convertedData = data.replaceAll(
			`img`,
			`Image layout="fill" objectFit="cover"`
		);
		setQuestionDetails({ ...questionDetails, answerDetails: convertedData });
	};

	let handleContentAnswerInvalid1 = (data: string) => {
		let convertedData = data.replaceAll(
			`img`,
			`Image layout="fill" objectFit="cover"`
		);
		let incommingAnswer = {
			answer: convertedData,
			valid: false,
		};
		setAnswer2(incommingAnswer);
	};

	let handleContentAnswerInvalid2 = (data: string) => {
		let convertedData = data.replaceAll(
			`img`,
			`Image layout="fill" objectFit="cover"`
		);
		let incommingAnswer = {
			answer: convertedData,
			valid: false,
		};
		setAnswer3(incommingAnswer);
	};

	let handleContentAnswerInvalid3 = (data: string) => {
		let convertedData = data.replaceAll(
			`img`,
			`Image layout="fill" objectFit="cover"`
		);
		let incommingAnswer = {
			answer: convertedData,
			valid: false,
		};
		setAnswer4(incommingAnswer);
	};

	let retriaveTopicsData = () => {
		setLoad(true);
		axios({
			method: 'post',
			url: url + '/api/topicsReview',
			data: subjectValidation,
		})
			.then(function (response) {
				const topics: [] = JSON.parse(JSON.stringify(response.data));
				// handle success
				if (topics.length > 0) {
					let topicFromServer: formData = [];
					topics.map((topic: topic) => {
						topicFromServer.push({
							label: topic.topicName,
							value: topic.id as unknown as string,
						});
					});
					setTopicOptions(topicFromServer);
					setHideShowTopic(true);
					// setHideShow(true);
					notifySuccess('Select topic to proceed..');
				} else {
					setTopicOptions([
						{
							label: '',
							value: '',
						},
					]);
					setSubjectValidation({ ...subjectValidation, topicId: '' });
					setHideShowTopic(false);
					setHideShowReview(false);
					notifyError('No topics available for your selection.');
				}
				setLoad(false);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Something went wrong.');
				setLoad(false);
			})
			.then(function () {
				// always executed
			});
	};

	let retriaveReviewData = () => {
		axios({
			method: 'post',
			url: url + '/api/review',
			data: subjectValidation,
		})
			.then(function (response) {
				const reviews: [] = JSON.parse(JSON.stringify(response.data));
				// handle success
				if (reviews.length > 0) {
					let reviewFromServer: formData = [];
					reviews.map((review: review) => {
						reviewFromServer.push({
							label: review.name,
							value: review.id as unknown as string,
						});
					});
					setReviewOptions(reviewFromServer);
					setHideShowReview(true);
					// setHideShow(true);
					notifySuccess('Select Review To Proceed..');
				} else {
					setReviewOptions([
						{
							label: '',
							value: '',
						},
					]);
					setQuestionDetails({ ...questionDetails, reviewId: 0 });
					setHideShowReview(false);
					notifyError('No reviews available for your topic selection.');
				}
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Something went wrong.');
			})
			.then(function () {
				// always executed
			});
	};

	let sendToDatabase = (list: answerDataType[]) => {
		let database = {
			question: questionDetails.question,
			answer: list,
			questionFormatId: questionDetails.questionFormatId,
			reviewId: questionDetails.reviewId,
			answerDetails: questionDetails.answerDetails,
			userId: userfound.id,
		};
		axios({
			method: 'post',
			url: url + '/api/addQuestion',
			data: database,
		})
			.then(function (response) {
				// handle success
				setQuestionDetails({
					question: '',
					answer: [],
					questionFormatId: 0,
					reviewId: 0,
					answerDetails: '',
				});
				setAnswerDetails([]);
				setSubjectValidation({
					subjectId: '',
					topicId: '',
					formId: '',
				});
				setHideShowTopic(false);
				setHideShowReview(false);
				setShowQuestion(false);
				let jibu: string = response.data.message;
				let type: string = response.data.type;

				if (type == 'success') {
					notifySuccess(jibu);
				} else {
					notifyError(jibu);
				}
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Error has occured, try later.');
			})
			.then(function () {
				// always executed
			});
	};

	let handleCreateTopic = () => {
		if (
			questionDetails.question != '' &&
			questionDetails.questionFormatId != 0 &&
			questionDetails.reviewId != 0
		) {
			switch (formatName(questionDetails.questionFormatId)) {
				case 'True or False':
					{
						let answers = [];
						answers.push(answer1);
						let answer2: string = answer1.answer == 'True' ? 'False' : 'True';
						answers.push({
							answer: answer2,
							valid: false,
						});
						sendToDatabase(answers);
					}
					break;
				case 'Multiple Choice':
					{
						let answers = [];
						answers.push(answer1);
						answers.push(answer2);
						answers.push(answer3);
						answers.push(answer4);
						sendToDatabase(answers);
					}
					break;
				case 'Explanation':
					{
						let answers = [];
						answers.push(answer1);
						sendToDatabase(answers);
					}
					break;
				case 'Fill In':
					{
						let answers = [];
						answers.push(answer1);
						sendToDatabase(answers);
					}
					break;

				default:
					notifyError('Ooops, something is not right, please check!.');
					break;
			}
			//!Call save to database
		} else {
			//!return error
			notifyError('Fill in all fields including topic relations.');
		}
	};

	let formatName = (id: number) => {
		for (let format of questionFormat) {
			if (id == format.id) {
				return format.name;
			}
		}
		return 'Not Found';
	};

	let handleOnReady = () => {
		console.log('Editor is ready');
	};

	return (
		<div className={Styles.container}>
			<Toaster position='top-center' reverseOrder={false} />
			<div className={Styles.innerContainer}>
				<div className={Styles.rightInnercontainerBody}>
					<div className={Styles.mainMain}>
						<div className={Styles.formHeader}>Question Details.</div>
						{questionDetails.questionFormatId == 0 && (
							<div className={Styles.formatIntro}>
								Choose question format to proceed.
							</div>
						)}
						{formatName(questionDetails.questionFormatId) ==
							'True or False' && (
							<div className={Styles.question}>
								<div className={Styles.questionFormatHeader}>
									{formatName(questionDetails.questionFormatId)} Question Format
								</div>
								<div>Question</div>
								<CkEditor
									onReadyToStart={handleOnReady}
									content={handleContentQuestion}
									dataCk={''}
								/>
								<SelectMiu
									displayLabel='Correct Answer'
									show={true}
									forms={trueAndFalse}
									handlechange={handleAnswerValid}
									value={answer1.answer}
								/>
								<div>More Answer Details</div>
								<CkEditor
									onReadyToStart={handleOnReady}
									content={handleContentAnswerDetails}
									dataCk={''}
								/>
							</div>
						)}
						{formatName(questionDetails.questionFormatId) ==
							'Multiple Choice' && (
							<div className={Styles.question}>
								<div className={Styles.questionFormatHeader}>
									{formatName(questionDetails.questionFormatId)} Question Format
								</div>
								<div>Question</div>
								<CkEditor
									onReadyToStart={handleOnReady}
									content={handleContentQuestion}
									dataCk={''}
								/>
								<div>Valid Answer</div>
								<CkEditor
									onReadyToStart={handleOnReady}
									content={handleContentAnswerValid}
									dataCk={''}
								/>
								<div>Option 1</div>
								<CkEditor
									onReadyToStart={handleOnReady}
									content={handleContentAnswerInvalid1}
									dataCk={''}
								/>
								<div>Option 2</div>
								<CkEditor
									onReadyToStart={handleOnReady}
									content={handleContentAnswerInvalid2}
									dataCk={''}
								/>
								<div>Option 3</div>
								<CkEditor
									onReadyToStart={handleOnReady}
									content={handleContentAnswerInvalid3}
									dataCk={''}
								/>
								<div>More Answer Details</div>
								<CkEditor
									onReadyToStart={handleOnReady}
									content={handleContentAnswerDetails}
									dataCk={''}
								/>
							</div>
						)}
						{formatName(questionDetails.questionFormatId) == 'Explanation' && (
							<div className={Styles.question}>
								<div className={Styles.questionFormatHeader}>
									{formatName(questionDetails.questionFormatId)} Question Format
								</div>
								<div>Question</div>
								<CkEditor
									onReadyToStart={handleOnReady}
									content={handleContentQuestion}
									dataCk={''}
								/>
								<div>Correct Answer</div>
								<CkEditor
									onReadyToStart={handleOnReady}
									content={handleContentAnswerValid}
									dataCk={''}
								/>
								<div>More Answer Details</div>
								<CkEditor
									onReadyToStart={handleOnReady}
									content={handleContentAnswerDetails}
									dataCk={''}
								/>
							</div>
						)}
						{formatName(questionDetails.questionFormatId) == 'Fill In' && (
							<div className={Styles.question}>
								<div className={Styles.questionFormatHeader}>
									{formatName(questionDetails.questionFormatId)} Question Format
								</div>
								<div>Question</div>
								<CkEditor
									onReadyToStart={handleOnReady}
									content={handleContentQuestion}
									dataCk={''}
								/>
								<div>Correct Answer</div>
								<CkEditor
									onReadyToStart={handleOnReady}
									content={handleContentAnswerValid}
									dataCk={''}
								/>
								<div>More Answer Details</div>
								<CkEditor
									onReadyToStart={handleOnReady}
									content={handleContentAnswerDetails}
									dataCk={''}
								/>
							</div>
						)}
					</div>
					<div className={Styles.mainLeft}>
						<div className={Styles.formHeader}>Question Relations.</div>
						<SelectMiu
							displayLabel='Question Format'
							show={true}
							forms={formatOptions}
							handlechange={handleSelectFormat}
							value={
								questionDetails.questionFormatId == 0
									? ''
									: questionDetails.questionFormatId.toString()
							}
						/>
						{showQuestion && (
							<>
								<SelectMiu
									displayLabel='Select Subject'
									show={true}
									forms={subjectOptions}
									handlechange={handleSelectSubject}
									value={subjectValidation.subjectId}
								/>
								<SelectMiu
									displayLabel='Select Form'
									show={true}
									forms={formOptions}
									handlechange={handleSelectForm}
									value={subjectValidation.formId}
								/>
							</>
						)}
						{hideShowTopic && (
							<SelectMiu
								displayLabel='Select Topic'
								show={true}
								forms={topicOptions}
								handlechange={handleSelectTopic}
								value={subjectValidation.topicId}
							/>
						)}
						{hideShowReview && (
							<SelectMiu
								displayLabel='Select Review'
								show={true}
								forms={reviewOptions}
								handlechange={handleSelectReview}
								value={
									questionDetails.reviewId == 0
										? ''
										: questionDetails.reviewId.toString()
								}
							/>
						)}
					</div>
				</div>
				{showQuestion && (
					<>
						{loading ? (
							<div className={Styles.imageSelect}>
								<LoaderWait />
							</div>
						) : (
							<div onClick={handleCreateTopic} className={Styles.imageSelect}>
								Create Notes
							</div>
						)}
					</>
				)}
			</div>
		</div>
	);
};

export default Create;

//*Removing default search bar :)
Create.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};
