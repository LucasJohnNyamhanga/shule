import { useState, useRef, useEffect, useContext } from 'react';
import Styles from '../../styles/admin.module.scss';
import { ReactNode } from 'react';
import GroupIcon from '@mui/icons-material/Group';
import SummarizeIcon from '@mui/icons-material/Summarize';
import NotesIcon from '@mui/icons-material/Notes';
import Books from '@mui/icons-material/ImportContacts';
import SchoolIcon from '@mui/icons-material/School';
import { type } from 'os';
import axios from 'axios';
import { question, review, topic } from '@prisma/client';
import Link from 'next/link';
import CardBox from '../../components/tools/cardBoxStyle';
import toast, { Toaster } from 'react-hot-toast';
import SelectMiu from '../../components/tools/SelectMui';
import { NavContext } from '../../components/context/StateContext';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import { CallSplit } from '@mui/icons-material';

type userData = {
	id: number;
	subjectName: string;
	published: boolean;
}[];

type dataTypeSelect = {
	value: string;
	label: string;
}[];

const Index = () => {
	const { navActive, setNavActive } = useContext(NavContext);

	const [navValue, setNavValue] = useState('');
	const [subjects, setSubjects] = useState([]);
	const [subjectsReview, setSubjectsReview] = useState([]);
	const [forms, setForms] = useState([]);
	const [formsReview, setFormsReview] = useState([]);
	const [formsExam, setFormsExam] = useState([]);
	const [subjectExamList, setSubjectsExam] = useState([]);
	const [topics, setTopics] = useState([]);
	const [topicsReview, setTopicsReview] = useState([]);
	const [notesData, setNotesData] = useState([]);
	const [reviewData, setReviewData] = useState([]);
	const [questionData, setQuestionData] = useState([]);
	const [topicsNotes, setTopicsNotes] = useState<dataTypeSelect>([]);
	const [topicsNotesReview, setTopicsNotesReview] = useState<dataTypeSelect>(
		[]
	);
	const [activateTopics, setActivateTopics] = useState(false);
	const [activateTopicsREview, setActivateTopicsReview] = useState(false);
	const [activateNotesDisplay, setActivateNotesDisplay] = useState(false);
	const [activateQuestionsDisplay, setActivateQuestionsDisplay] =
		useState(false);
	const [activateNotes, setActivateNotes] = useState(false);
	const [activateNotesReview, setActivateNotesReview] = useState(false);
	const [changerNotes, setChangerNotes] = useState(0);
	const [selectOption, setSelectOption] = useState<dataTypeSelect>([]);
	const [selectOptionForms, setSelectOptionForms] = useState<dataTypeSelect>(
		[]
	);
	const [selectOptionExam, setSelectOptionExam] = useState<dataTypeSelect>([]);
	const [selectOptionFormsExam, setSelectOptionFormsExam] =
		useState<dataTypeSelect>([]);
	const [selectOptionReview, setSelectOptionReview] = useState<dataTypeSelect>(
		[]
	);
	const [selectOptionFormsReview, setSelectOptionFormsReview] =
		useState<dataTypeSelect>([]);

	//selectQuestions
	const [selectOptionTopicsQuestions, setSelectOptionTopicsQuestions] =
		useState<dataTypeSelect>([]);
	const [selectOptionReviewQuestions, setSelectOptionReviewQuestions] =
		useState<dataTypeSelect>([]);

	const [activateListTopicReview, setActivateListTopicReview] = useState(false);
	const [activateListReview, setActivateListReview] = useState(false);

	const [topicDetails, setTopicDetails] = useState({
		formId: '',
		subjectId: '',
	});

	const [topicDetailsReview, setTopicDetailsReview] = useState({
		formId: '',
		subjectId: '',
	});

	const [notesDetails, setNotesDetails] = useState({
		formId: '',
		subjectId: '',
		topicId: '',
	});

	const [notesDetailsReview, setNotesDetailsReview] = useState({
		formId: '',
		subjectId: '',
		topicId: '',
	});

	const [detailsQuestions, setDetailsQuestions] = useState({
		formId: '',
		subjectId: '',
		topicId: '',
		reviewId: '',
	});

	const notify = (message: string) => toast(message);
	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);

	const notes = useRef<HTMLDivElement>(null!);
	const subject = useRef<HTMLDivElement>(null!);
	const topic = useRef<HTMLDivElement>(null!);
	const form = useRef<HTMLDivElement>(null!);
	const review = useRef<HTMLDivElement>(null!);
	const questions = useRef<HTMLDivElement>(null!);
	const subjectReview = useRef<HTMLDivElement>(null!);
	const topicReview = useRef<HTMLDivElement>(null!);
	const formReview = useRef<HTMLDivElement>(null!);
	const subjectExam = useRef<HTMLDivElement>(null!);
	const formExam = useRef<HTMLDivElement>(null!);
	const examType = useRef<HTMLDivElement>(null!);
	const exam = useRef<HTMLDivElement>(null!);
	// const user = useRef<HTMLDivElement>(null!);

	let handleNav = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
		let value = e.currentTarget.id;
		setNavValue(value);
		createActive(value);
	};

	let createActive = (key: string) => {
		removeActive();
		switch (key) {
			case 'Notes':
				notes.current.classList.add(Styles.Active);
				retrivalTopics();
				break;
			case 'Subjects':
				subject.current.classList.add(Styles.Active);
				retriaveSubjects();
				break;
			case 'Topics':
				topic.current.classList.add(Styles.Active);
				retrivalTopics();
				break;
			case 'Forms':
				form.current.classList.add(Styles.Active);
				retriaveSubjects();
				break;
			case 'Review':
				review.current.classList.add(Styles.Active);
				retrivalTopicsReview();
				break;
			case 'Questions':
				questions.current.classList.add(Styles.Active);
				retrivalTopicsReview();
				break;
			case 'SubjectsReview':
				subjectReview.current.classList.add(Styles.Active);
				retriaveSubjectsReview();
				break;
			case 'TopicsReview':
				topicReview.current.classList.add(Styles.Active);
				retrivalTopicsReview();
				break;
			case 'FormsReview':
				formReview.current.classList.add(Styles.Active);
				retriaveSubjectsReview();
				break;
			case 'SubjectsExam':
				subjectExam.current.classList.add(Styles.Active);
				retriaveSubjectsExam();
				break;
			case 'FormsExam':
				formExam.current.classList.add(Styles.Active);
				retriaveSubjectsExam();
				break;
			case 'ExamType':
				examType.current.classList.add(Styles.Active);
				break;
			case 'Exam':
				exam.current.classList.add(Styles.Active);
				break;
			default:
				break;
		}
	};

	let removeActive = () => {
		notes.current.classList.remove(Styles.Active);
		subject.current.classList.remove(Styles.Active);
		topic.current.classList.remove(Styles.Active);
		form.current.classList.remove(Styles.Active);
		review.current.classList.remove(Styles.Active);
		questions.current.classList.remove(Styles.Active);
		subjectReview.current.classList.remove(Styles.Active);
		topicReview.current.classList.remove(Styles.Active);
		formReview.current.classList.remove(Styles.Active);
		subjectExam.current.classList.remove(Styles.Active);
		formExam.current.classList.remove(Styles.Active);
		examType.current.classList.remove(Styles.Active);
		exam.current.classList.remove(Styles.Active);
	};

	const retriaveSubjectsReview = async () => {
		axios
			.get('http://localhost:3000/api/subjectsReview')
			.then(function (response) {
				const subjectsFromServer = JSON.parse(JSON.stringify(response.data));
				// handle success
				setSubjectsReview(subjectsFromServer);
				let data = [];
				let template: templateType = {
					value: '',
					label: '',
				};
				for (const selectSubject of subjectsFromServer) {
					template = {
						value: selectSubject.id,
						label: selectSubject.subjectName,
					};
					data.push(template);
				}

				setSelectOption(data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});

		axios
			.get('http://localhost:3000/api/formsReview')
			.then(function (response) {
				const FormsFromServer = JSON.parse(JSON.stringify(response.data));
				// handle success
				setFormsReview(FormsFromServer);
				let data = [];
				let template: templateType = {
					value: '',
					label: '',
				};
				for (const form of FormsFromServer) {
					template = {
						value: form.id,
						label: form.formName,
					};
					data.push(template);
				}

				setSelectOptionForms(data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};

	const retriaveSubjectsExam = async () => {
		axios
			.get('http://localhost:3000/api/subjectsExam')
			.then(function (response) {
				const subjectsFromServer = JSON.parse(JSON.stringify(response.data));
				// handle success
				console.log(subjectsFromServer);
				setSubjectsExam(subjectsFromServer);
				let data = [];
				let template: templateType = {
					value: '',
					label: '',
				};
				for (const selectSubject of subjectsFromServer) {
					template = {
						value: selectSubject.id,
						label: selectSubject.subjectName,
					};
					data.push(template);
				}

				setSelectOptionExam(data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});

		axios
			.get('http://localhost:3000/api/formsExam')
			.then(function (response) {
				const FormsFromServer = JSON.parse(JSON.stringify(response.data));
				// handle success
				console.log(FormsFromServer);
				setFormsExam(FormsFromServer);
				let data = [];
				let template: templateType = {
					value: '',
					label: '',
				};
				for (const form of FormsFromServer) {
					template = {
						value: form.id,
						label: form.formName,
					};
					data.push(template);
				}

				setSelectOptionFormsExam(data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};

	const retriaveSubjects = async () => {
		axios
			.get('http://localhost:3000/api/subjects')
			.then(function (response) {
				const subjectsFromServer = JSON.parse(JSON.stringify(response.data));
				// handle success
				setSubjects(subjectsFromServer);
				let data = [];
				let template: templateType = {
					value: '',
					label: '',
				};
				for (const selectSubject of subjectsFromServer) {
					template = {
						value: selectSubject.id,
						label: selectSubject.subjectName,
					};
					data.push(template);
				}

				setSelectOption(data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});

		axios
			.get('http://localhost:3000/api/forms')
			.then(function (response) {
				const FormsFromServer = JSON.parse(JSON.stringify(response.data));
				// handle success
				setForms(FormsFromServer);
				let data = [];
				let template: templateType = {
					value: '',
					label: '',
				};
				for (const form of FormsFromServer) {
					template = {
						value: form.id,
						label: form.formName,
					};
					data.push(template);
				}

				setSelectOptionForms(data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};

	let handleUpdateSubject = (published: boolean, id: number) => {
		axios
			.post('http://localhost:3000/api/updateDraftOrPublished', {
				id,
				published: !published,
			})
			.then(function (response) {
				retriaveSubjects();
				let jibu: string = response.data.message;
				notifySuccess(jibu);
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

	let handleUpdateSubjectReview = (published: boolean, id: number) => {
		axios
			.post('http://localhost:3000/api/updateDraftOrPublishedsubjectReview', {
				id,
				published: !published,
			})
			.then(function (response) {
				retriaveSubjectsReview();
				let jibu: string = response.data.message;
				notifySuccess(jibu);
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

	let handleUpdateSubjectExam = (published: boolean, id: number) => {
		axios
			.post('http://localhost:3000/api/updateDraftOrPublishedExam', {
				id,
				published: !published,
			})
			.then(function (response) {
				retriaveSubjectsExam();
				let jibu: string = response.data.message;
				notifySuccess(jibu);
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

	let handleUpdateTopic = (published: boolean, id: number) => {
		axios
			.post('http://localhost:3000/api/updateDraftOrPublishedTopic', {
				id,
				published: !published,
			})
			.then(function (response) {
				let jibu: string = response.data.message;
				notifySuccess(jibu);
				retriaveTopicsData();
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

	let handleUpdateTopicReview = (published: boolean, id: number) => {
		axios
			.post('http://localhost:3000/api/updateDraftOrPublishedTopicReview', {
				id,
				published: !published,
			})
			.then(function (response) {
				let jibu: string = response.data.message;
				notifySuccess(jibu);
				retriaveTopicsDataReview();
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

	let handleUpdateQuestion = (published: boolean, id: number) => {
		axios
			.post('http://localhost:3000/api/updateDraftOrPublishedQuestions', {
				id,
				published: !published,
			})
			.then(function (response) {
				let jibu: string = response.data.message;
				notifySuccess(jibu);
				retriaveReviewDataNowForQuestions();
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

	let handleUpdateReviewPublished = (published: boolean, id: number) => {
		axios
			.post('http://localhost:3000/api/updateDraftOrPublishedReview', {
				id,
				published: !published,
			})
			.then(function (response) {
				let jibu: string = response.data.message;
				notifySuccess(jibu);
				retriaveReviewDataNow();
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

	type templateType = {
		value: string;
		label: string;
	};

	let retrivalTopics = () => {
		axios
			.get('http://localhost:3000/api/subjects')
			.then(function (response) {
				const subjectsFromServer = JSON.parse(JSON.stringify(response.data));
				// handle success
				setSubjects(subjectsFromServer);
				let data = [];
				let template: templateType = {
					value: '',
					label: '',
				};
				for (const selectSubject of subjectsFromServer) {
					template = {
						value: selectSubject.id,
						label: selectSubject.subjectName,
					};
					data.push(template);
				}

				setSelectOption(data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});

		axios
			.get('http://localhost:3000/api/forms')
			.then(function (response) {
				const FormsFromServer = JSON.parse(JSON.stringify(response.data));
				// handle success
				let data = [];
				let template: templateType = {
					value: '',
					label: '',
				};
				for (const form of FormsFromServer) {
					template = {
						value: form.id,
						label: form.formName,
					};
					data.push(template);
				}

				setSelectOptionForms(data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};

	//topicsReview

	let retrivalTopicsReview = () => {
		axios
			.get('http://localhost:3000/api/subjectsReview')
			.then(function (response) {
				const subjectsFromServer = JSON.parse(JSON.stringify(response.data));
				// handle success
				setSubjectsReview(subjectsFromServer);
				let data = [];
				let template: templateType = {
					value: '',
					label: '',
				};
				for (const selectSubject of subjectsFromServer) {
					template = {
						value: selectSubject.id,
						label: selectSubject.subjectName,
					};
					data.push(template);
				}

				setSelectOptionReview(data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});

		axios
			.get('http://localhost:3000/api/formsReview')
			.then(function (response) {
				const FormsFromServer = JSON.parse(JSON.stringify(response.data));
				// handle success
				let data = [];
				let template: templateType = {
					value: '',
					label: '',
				};
				for (const form of FormsFromServer) {
					template = {
						value: form.id,
						label: form.formName,
					};
					data.push(template);
				}

				setSelectOptionFormsReview(data);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
			})
			.then(function () {
				// always executed
			});
	};

	//* topics

	let handleSelectedTopicSubject = (value: string) => {
		setTopicDetails({ ...topicDetails, subjectId: value });
		setActivateTopics(false);
	};

	let handleSelectedTopicForm = (value: string) => {
		setTopicDetails({ ...topicDetails, formId: value });
		setActivateTopics(false);
	};

	//*topics review
	let handleSelectedTopicSubjectReview = (value: string) => {
		setTopicDetailsReview({ ...topicDetailsReview, subjectId: value });
		setActivateTopicsReview(false);
	};

	let handleSelectedTopicFormReview = (value: string) => {
		setTopicDetailsReview({ ...topicDetailsReview, formId: value });
		setActivateTopicsReview(false);
	};

	//* notes

	let handleSelectedNotesSubject = (value: string) => {
		setNotesDetails({ ...notesDetails, subjectId: value });
		setChangerNotes(changerNotes + 1);
	};

	let handleSelectedNotesForm = (value: string) => {
		setNotesDetails({ ...notesDetails, formId: value });
		setChangerNotes(changerNotes + 1);
	};

	let handleSelectedNotes = (value: string) => {
		setNotesDetails({ ...notesDetails, topicId: value });
	};

	//* review

	let handleSelectedNotesSubjectReview = (value: string) => {
		setNotesDetailsReview({ ...notesDetailsReview, subjectId: value });
		setChangerNotes(changerNotes + 1);
	};

	let handleSelectedNotesFormReview = (value: string) => {
		setNotesDetailsReview({ ...notesDetailsReview, formId: value });
		setChangerNotes(changerNotes + 1);
	};

	let handleSelectedNotesReview = (value: string) => {
		setNotesDetailsReview({ ...notesDetailsReview, topicId: value });
	};

	//* question

	let handleSelectedSubjectQuestion = (value: string) => {
		setDetailsQuestions({ ...detailsQuestions, subjectId: value });
		setChangerNotes(changerNotes + 1);
	};

	let handleSelectedFormQuestion = (value: string) => {
		setDetailsQuestions({ ...detailsQuestions, formId: value });
		setChangerNotes(changerNotes + 1);
	};

	let handleSelectedTopicQuestion = (value: string) => {
		setDetailsQuestions({ ...detailsQuestions, topicId: value });
		setChangerNotes(changerNotes + 1);
		setActivateQuestionsDisplay(false);
	};

	let handleSelectedReviewQuestion = (value: string) => {
		setDetailsQuestions({ ...detailsQuestions, reviewId: value });

		setChangerNotes(changerNotes + 1);
		setActivateQuestionsDisplay(false);
	};

	let retriaveTopicsData = () => {
		if (topicDetails.formId != '' && topicDetails.subjectId != '') {
			axios({
				method: 'post',
				url: 'http://localhost:3000/api/topics',
				data: topicDetails,
			})
				.then(function (response) {
					const topicsFromServer = JSON.parse(JSON.stringify(response.data));
					// handle success
					if (topicsFromServer.length != 0) {
						setTopics(topicsFromServer);
						setActivateTopics(true);
						console.log(topicsFromServer);
					} else {
						setActivateTopics(false);
						notifyError('Ooops, No topics available yet.');
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
		} else {
			notifyError('All fields should be filled.');
		}
	};

	let retriaveTopicsDataReview = () => {
		if (topicDetailsReview.formId != '' && topicDetailsReview.subjectId != '') {
			axios({
				method: 'post',
				url: 'http://localhost:3000/api/topicsReview',
				data: topicDetailsReview,
			})
				.then(function (response) {
					const topicsFromServer = JSON.parse(JSON.stringify(response.data));
					// handle success
					if (topicsFromServer.length != 0) {
						setTopicsReview(topicsFromServer);
						setActivateTopicsReview(true);
						console.log(topicsFromServer);
					} else {
						setActivateTopics(false);
						notifyError('Ooops, No topics available yet.');
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
		} else {
			notifyError('All fields should be filled.');
		}
	};

	let retriaveTopicsDataForNotes = () => {
		if (notesDetails.formId != '' && notesDetails.subjectId != '') {
			setActivateNotes(false);
			axios({
				method: 'post',
				url: 'http://localhost:3000/api/topics',
				data: notesDetails,
			})
				.then(function (response) {
					const topicsFromServer = JSON.parse(JSON.stringify(response.data));
					// handle success
					if (topicsFromServer.length != 0) {
						let data = [];
						let template: templateType = {
							value: '',
							label: '',
						};
						for (const topic of topicsFromServer) {
							template = {
								value: topic.id,
								label: topic.topicName,
							};
							data.push(template);
						}
						setTopicsNotes(data);
						setActivateNotes(true);
					} else {
						notifyError(`Ooops, No topics available for selection.`);
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
		}
	};

	let retriaveTopicsDataForReview = () => {
		if (notesDetailsReview.formId != '' && notesDetailsReview.subjectId != '') {
			setActivateNotesReview(false);
			axios({
				method: 'post',
				url: 'http://localhost:3000/api/topicsReview',
				data: notesDetailsReview,
			})
				.then(function (response) {
					const topicsFromServer = JSON.parse(JSON.stringify(response.data));
					// handle success
					if (topicsFromServer.length != 0) {
						let data = [];
						let template: templateType = {
							value: '',
							label: '',
						};
						for (const topic of topicsFromServer) {
							template = {
								value: topic.id,
								label: topic.topicName,
							};
							data.push(template);
						}
						setTopicsNotesReview(data);
						setActivateNotesReview(true);
					} else {
						notifyError(`Ooops, No topics available for selection.`);
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
		}

		if (detailsQuestions.formId != '' && detailsQuestions.subjectId != '') {
			axios({
				method: 'post',
				url: 'http://localhost:3000/api/topicsReview',
				data: detailsQuestions,
			})
				.then(function (response) {
					const topicsFromServer = JSON.parse(JSON.stringify(response.data));
					// handle success
					if (topicsFromServer.length > 0) {
						let data = [];
						let template: templateType = {
							value: '',
							label: '',
						};
						for (const topic of topicsFromServer) {
							template = {
								value: topic.id,
								label: topic.topicName,
							};
							data.push(template);
						}
						setSelectOptionTopicsQuestions(data);
						setActivateListTopicReview(true);
					} else {
						notifyError(`Ooops, No topics available for selection.`);
						setActivateListTopicReview(false);
						setActivateListReview(false);
						setActivateQuestionsDisplay(false);
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
		}

		if (
			detailsQuestions.formId != '' &&
			detailsQuestions.subjectId != '' &&
			detailsQuestions.topicId != ''
		) {
			axios({
				method: 'post',
				url: 'http://localhost:3000/api/review',
				data: detailsQuestions,
			})
				.then(function (response) {
					const reviewFromServer = JSON.parse(JSON.stringify(response.data));
					// handle success
					if (reviewFromServer.length != 0) {
						let data = [];
						let template: templateType = {
							value: '',
							label: '',
						};
						for (const reviw of reviewFromServer) {
							template = {
								value: reviw.id,
								label: reviw.name,
							};
							data.push(template);
						}
						setSelectOptionReviewQuestions(data);
						setActivateListReview(true);
					} else {
						notifyError(`Ooops, No topics available for selection.`);
						setActivateQuestionsDisplay(false);
						setActivateListReview(false);
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
		}
	};

	let retriaveNotesDataNow = () => {
		if (
			notesDetails.formId != '' &&
			notesDetails.subjectId != '' &&
			notesDetails.topicId != ''
		) {
			axios({
				method: 'post',
				url: 'http://localhost:3000/api/notes',
				data: notesDetails,
			})
				.then(function (response) {
					const notesFromServer = JSON.parse(JSON.stringify(response.data));
					// handle success
					if (notesFromServer.length != 0) {
						setNotesData(notesFromServer);
						setActivateNotesDisplay(true);
					} else {
						setActivateNotesDisplay(false);
						notifyError('Ooops, No notes found');
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
		} else {
			notifyError('Oops, All fields should be selected.');
		}
	};

	let retriaveReviewDataNow = () => {
		if (
			notesDetailsReview.formId != '' &&
			notesDetailsReview.subjectId != '' &&
			notesDetailsReview.topicId != ''
		) {
			axios({
				method: 'post',
				url: 'http://localhost:3000/api/review',
				data: notesDetailsReview,
			})
				.then(function (response) {
					const notesFromServer = JSON.parse(JSON.stringify(response.data));
					// handle success
					if (notesFromServer.length != 0) {
						setReviewData(notesFromServer);
						setActivateNotesDisplay(true);
					} else {
						setActivateNotesDisplay(false);
						notifyError('Ooops, No notes found');
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
		} else {
			notifyError('Oops, All fields should be selected.');
		}
	};

	let retriaveReviewDataNowForQuestions = () => {
		if (
			detailsQuestions.formId != '' &&
			detailsQuestions.subjectId != '' &&
			detailsQuestions.topicId != '' &&
			detailsQuestions.reviewId != ''
		) {
			axios({
				method: 'post',
				url: 'http://localhost:3000/api/questions',
				data: detailsQuestions,
			})
				.then(function (response) {
					const notesFromServer = JSON.parse(JSON.stringify(response.data));
					// handle success
					if (notesFromServer.length > 0) {
						setQuestionData(notesFromServer);
						setActivateQuestionsDisplay(true);
					} else {
						setActivateQuestionsDisplay(false);
						notifyError('Ooops, No Questions Found');
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
		} else {
			notifyError('Oops, All fields should be selected.');
		}
	};

	type notesData = {
		id: number;
		content: string;
		published: boolean;
		topic: {
			topicName: string;
		};
	};

	let handleUpdateNotes = (published: boolean, id: number) => {
		axios
			.post('http://localhost:3000/api/updateDraftOrPublishedNotes', {
				id,
				published: !published,
			})
			.then(function (response) {
				let jibu: string = response.data.message;
				notifySuccess(jibu);
				retriaveNotesDataNow();
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

	useEffect(() => {
		setActivateNotesDisplay(false);
		retriaveTopicsDataForNotes();
		retriaveTopicsDataForReview();
		setNavActive('Admin');
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [changerNotes, navActive]);

	return (
		<div className={Styles.container}>
			<div className={Styles.innerContainer}>
				<Toaster position='bottom-left' />
				<div className={Styles.containerBody}>
					<div className={Styles.leftInnercontainerBody}>
						<div className={Styles.leftInner}>
							<div className={Styles.containerHeader}>
								<div className={Styles.TopicHeader}>Admin Dashboard</div>
							</div>

							<div>
								<div className={Styles.TopicHeaderNotes}>Notes</div>
							</div>
							<div className={Styles.containerBody}>
								<div
									ref={subject}
									id='Subjects'
									onClick={(e) => handleNav(e)}
									className={Styles.topicTittle}>
									<Books />
									<div className={Styles.text}>Subjects</div>
								</div>
								<div
									ref={form}
									id='Forms'
									onClick={(e) => handleNav(e)}
									className={Styles.topicTittle}>
									<SchoolIcon />
									<div className={Styles.text}>Forms</div>
								</div>
								<div
									ref={topic}
									id='Topics'
									onClick={(e) => handleNav(e)}
									className={Styles.topicTittle}>
									<NotesIcon />
									<div className={Styles.text}>Topics</div>
								</div>
								<div
									ref={notes}
									id='Notes'
									onClick={(e) => handleNav(e)}
									className={Styles.topicTittle}>
									<SummarizeIcon />
									<div className={Styles.text}>Notes</div>
								</div>
							</div>
							<div>
								<div className={Styles.TopicHeaderNotes}>Review</div>
							</div>
							<div className={Styles.containerBody}>
								<div
									ref={subjectReview}
									id='SubjectsReview'
									onClick={(e) => handleNav(e)}
									className={Styles.topicTittle}>
									<Books />
									<div className={Styles.text}>Subjects</div>
								</div>
								<div
									ref={formReview}
									id='FormsReview'
									onClick={(e) => handleNav(e)}
									className={Styles.topicTittle}>
									<SchoolIcon />
									<div className={Styles.text}>Forms</div>
								</div>
								<div
									ref={topicReview}
									id='TopicsReview'
									onClick={(e) => handleNav(e)}
									className={Styles.topicTittle}>
									<NotesIcon />
									<div className={Styles.text}>Topics</div>
								</div>
								<div
									ref={review}
									id='Review'
									onClick={(e) => handleNav(e)}
									className={Styles.topicTittle}>
									<AlignVerticalBottomIcon />
									<div className={Styles.text}>Review</div>
								</div>
								<div
									ref={questions}
									id='Questions'
									onClick={(e) => handleNav(e)}
									className={Styles.topicTittle}>
									<QuestionMarkIcon />
									<div className={Styles.text}>Questions</div>
								</div>
							</div>
							<div>
								<div className={Styles.TopicHeaderNotes}>Exams</div>
							</div>
							<div className={Styles.containerBody}>
								<div
									ref={subjectExam}
									id='SubjectsExam'
									onClick={(e) => handleNav(e)}
									className={Styles.topicTittle}>
									<Books />
									<div className={Styles.text}>Subjects</div>
								</div>
								<div
									ref={formExam}
									id='FormsExam'
									onClick={(e) => handleNav(e)}
									className={Styles.topicTittle}>
									<SchoolIcon />
									<div className={Styles.text}>Forms</div>
								</div>
								<div
									ref={examType}
									id='ExamType'
									onClick={(e) => handleNav(e)}
									className={Styles.topicTittle}>
									<NotesIcon />
									<div className={Styles.text}>Exam Types</div>
								</div>
								<div
									ref={exam}
									id='Exam'
									onClick={(e) => handleNav(e)}
									className={Styles.topicTittle}>
									<SummarizeIcon />
									<div className={Styles.text}>Exams</div>
								</div>
							</div>
							<div>
								<div className={Styles.TopicHeaderNotes}>References</div>
							</div>
						</div>
					</div>
					{/* //!start of default desplay */}
					{navValue == '' && (
						<div className={Styles.rightInnercontainerBody}>
							<div className={Styles.subject}>
								<div className={Styles.subjectHeader}>
									<div className={Styles.subjectHeaderText}>
										Welcome to the Admin Dashboard
									</div>
								</div>
							</div>
						</div>
					)}
					{/* //! END OF default DISPLAY ONLY */}

					{/* //* START OF NOTES DISPLAY ONLY */}
					{navValue == 'Notes' && (
						<div className={Styles.rightInnercontainerBody}>
							<div className={Styles.subject}>
								<div className={Styles.subjectHeader}>
									<div className={Styles.subjectHeaderText}>
										Notes Management
									</div>
									<Link passHref href='/Admin/Notes/Create/Notes'>
										<div className={Styles.subjectHeaderButton}>
											Create Notes
										</div>
									</Link>
								</div>
								<div className={Styles.selectDivTopic}>
									<SelectMiu
										displayLabel='Select Subject'
										show={true}
										forms={selectOption}
										handlechange={handleSelectedNotesSubject}
										value={notesDetails.subjectId}
									/>
									<SelectMiu
										displayLabel='Select Form'
										show={true}
										forms={selectOptionForms}
										handlechange={handleSelectedNotesForm}
										value={notesDetails.formId}
									/>
									{activateNotes && (
										<SelectMiu
											displayLabel='Select Topic'
											show={true}
											forms={topicsNotes}
											handlechange={handleSelectedNotes}
											value={notesDetails.topicId}
										/>
									)}
								</div>
								<div
									onClick={retriaveNotesDataNow}
									className={Styles.subjectHeaderButton}>
									Retrieve Notes
								</div>
								<div className={Styles.subjectBody}>
									{activateNotesDisplay &&
										notesData.map((note: notesData) => (
											<CardBox
												handleUpdate={handleUpdateNotes}
												link={`/Admin/Notes/Edit/Note/${note.id}`}
												label={note.topic.topicName}
												published={''}
												id={note.id}
												key={note.id}
											/>
										))}
								</div>
							</div>
						</div>
					)}
					{/* //! END OF NOTES DISPLAY ONLY */}

					{/* //* START OF ADD SUBJECT DISPLAY ONLY */}
					{navValue == 'Subjects' && (
						<div className={Styles.rightInnercontainerBody}>
							<div className={Styles.subject}>
								<div className={Styles.subjectHeader}>
									<div className={Styles.subjectHeaderText}>
										Subjects In Notes Management
									</div>
									<Link passHref href='/Admin/Notes/Create/Subject'>
										<div className={Styles.subjectHeaderButton}>
											Create Subject
										</div>
									</Link>
								</div>
								<div className={Styles.subjectBody}>
									{subjects.map(
										(subject: {
											subjectName: string;
											id: number;
											published: boolean;
										}) => (
											<CardBox
												handleUpdate={handleUpdateSubject}
												link={'/Admin/Notes/Edit/Subject/' + subject.id}
												label={subject.subjectName}
												published={subject.published}
												id={subject.id}
												key={subject.id}
											/>
										)
									)}
								</div>
							</div>
						</div>
					)}
					{/* //! END OF ADD SUBJECT DISPLAY ONLY */}

					{/* //* START OF ADD TOPIC DISPLAY ONLY */}
					{navValue == 'Topics' && (
						<div className={Styles.rightInnercontainerBody}>
							<div className={Styles.subject}>
								<div className={Styles.subjectHeader}>
									<div className={Styles.subjectHeaderText}>
										Topics In Notes Management
									</div>
									<Link passHref href='/Admin/Notes/Create/Topic'>
										<div className={Styles.subjectHeaderButton}>
											Create Topic
										</div>
									</Link>
								</div>
								<div className={Styles.selectDivTopic}>
									<SelectMiu
										displayLabel='Select Subject'
										show={true}
										forms={selectOption}
										handlechange={handleSelectedTopicSubject}
										value={topicDetails.subjectId}
									/>
									<SelectMiu
										displayLabel='Select Form'
										show={true}
										forms={selectOptionForms}
										handlechange={handleSelectedTopicForm}
										value={topicDetails.formId}
									/>
								</div>
								<div
									onClick={retriaveTopicsData}
									className={Styles.subjectHeaderButton}>
									Retrieve Topics
								</div>
								<div className={Styles.subjectBody}>
									{activateTopics &&
										topics.map(
											(topic: {
												topicName: string;
												id: number;
												published: boolean;
											}) => (
												<CardBox
													handleUpdate={handleUpdateTopic}
													link={'/Admin/Notes/Edit/Topic/' + topic.id}
													label={topic.topicName}
													published={topic.published}
													id={topic.id}
													key={topic.id}
												/>
											)
										)}
								</div>
							</div>
						</div>
					)}
					{/* //! END OF ADD TOPIC DISPLAY ONLY */}

					{/* //* START OF FORM DISPLAY ONLY */}
					{navValue == 'Forms' && (
						<div className={Styles.rightInnercontainerBody}>
							<div className={Styles.subject}>
								<div className={Styles.subjectHeader}>
									<div className={Styles.subjectHeaderText}>
										Forms In Notes Management
									</div>
									<Link passHref href='/Admin/Notes/Create/Form'>
										<div className={Styles.subjectHeaderButton}>
											Create Form
										</div>
									</Link>
								</div>
								<div className={Styles.subjectBody}>
									{forms.map((form: { id: number; formName: string }) => (
										<CardBox
											handleUpdate={handleUpdateSubject}
											link={'/Admin/Notes/Edit/Form/' + form.id}
											label={form.formName}
											id={form.id}
											key={form.id}
											published={''}
										/>
									))}
								</div>
							</div>
						</div>
					)}
					{/* //! END OF FORM DISPLAY ONLY */}

					{/* //* START OF SubjectsReview DISPLAY ONLY */}
					{navValue == 'SubjectsReview' && (
						<div className={Styles.rightInnercontainerBody}>
							<div className={Styles.subject}>
								<div className={Styles.subjectHeader}>
									<div className={Styles.subjectHeaderText}>
										Subjects In Review Management
									</div>
									<Link passHref href='/Admin/Review/Create/Subject'>
										<div className={Styles.subjectHeaderButton}>
											Create Subject in Review
										</div>
									</Link>
								</div>
								<div className={Styles.subjectBody}>
									{subjectsReview.map(
										(subject: {
											subjectName: string;
											id: number;
											published: boolean;
										}) => (
											<CardBox
												handleUpdate={handleUpdateSubjectReview}
												link={'/Admin/Review/Edit/Subject/' + subject.id}
												label={subject.subjectName}
												published={subject.published}
												id={subject.id}
												key={subject.id}
											/>
										)
									)}
								</div>
							</div>
						</div>
					)}
					{/* //! END OF SubjectsReview DISPLAY ONLY */}

					{/* //* START OF TopicsReview DISPLAY ONLY */}
					{navValue == 'TopicsReview' && (
						<div className={Styles.rightInnercontainerBody}>
							<div className={Styles.subject}>
								<div className={Styles.subjectHeader}>
									<div className={Styles.subjectHeaderText}>
										Topics In Review Management
									</div>
									<Link passHref href='/Admin/Review/Create/Topic'>
										<div className={Styles.subjectHeaderButton}>
											Create Topic in Review
										</div>
									</Link>
								</div>
								<div className={Styles.selectDivTopic}>
									<SelectMiu
										displayLabel='Select Subject'
										show={true}
										forms={selectOptionReview}
										handlechange={handleSelectedTopicSubjectReview}
										value={topicDetailsReview.subjectId}
									/>
									<SelectMiu
										displayLabel='Select Form'
										show={true}
										forms={selectOptionFormsReview}
										handlechange={handleSelectedTopicFormReview}
										value={topicDetailsReview.formId}
									/>
								</div>
								<div
									onClick={retriaveTopicsDataReview}
									className={Styles.subjectHeaderButton}>
									Retrieve Topics
								</div>
								<div className={Styles.subjectBody}>
									{activateTopicsREview &&
										topicsReview.map(
											(topic: {
												topicName: string;
												id: number;
												published: boolean;
											}) => (
												<CardBox
													handleUpdate={handleUpdateTopicReview}
													link={'/Admin/Review/Edit/Topic/' + topic.id}
													label={topic.topicName}
													published={topic.published}
													id={topic.id}
													key={topic.id}
												/>
											)
										)}
								</div>
							</div>
						</div>
					)}
					{/* //! END OF TopicsReview DISPLAY ONLY */}

					{/* //* START OF FormsReview DISPLAY ONLY */}
					{navValue == 'FormsReview' && (
						<div className={Styles.rightInnercontainerBody}>
							<div className={Styles.subject}>
								<div className={Styles.subjectHeader}>
									<div className={Styles.subjectHeaderText}>
										Forms In Review Management
									</div>
									<Link passHref href='/Admin/Review/Create/Form'>
										<div className={Styles.subjectHeaderButton}>
											Create Form in Review
										</div>
									</Link>
								</div>
								<div className={Styles.subjectBody}>
									{formsReview.map((form: { id: number; formName: string }) => (
										<CardBox
											handleUpdate={handleUpdateSubject}
											link={'/Admin/Review/Edit/Form/' + form.id}
											label={form.formName}
											id={form.id}
											key={form.id}
											published={''}
										/>
									))}
								</div>
							</div>
						</div>
					)}
					{/* //! END OF FormsReview DISPLAY ONLY */}

					{/* //* START OF REVIEW DISPLAY ONLY */}
					{navValue == 'Review' && (
						<div className={Styles.rightInnercontainerBody}>
							<div className={Styles.subject}>
								<div className={Styles.subjectHeader}>
									<div className={Styles.subjectHeaderText}>
										Review Management
									</div>
									<Link passHref href='/Admin/Review/Create/Review'>
										<div className={Styles.subjectHeaderButton}>
											Create Review
										</div>
									</Link>
								</div>
								<div className={Styles.selectDivTopic}>
									<SelectMiu
										displayLabel='Select Subject'
										show={true}
										forms={selectOptionReview}
										handlechange={handleSelectedNotesSubjectReview}
										value={notesDetailsReview.subjectId}
									/>
									<SelectMiu
										displayLabel='Select Form'
										show={true}
										forms={selectOptionFormsReview}
										handlechange={handleSelectedNotesFormReview}
										value={notesDetailsReview.formId}
									/>
									{activateNotesReview && (
										<SelectMiu
											displayLabel='Select Topic'
											show={true}
											forms={topicsNotesReview}
											handlechange={handleSelectedNotesReview}
											value={notesDetailsReview.topicId}
										/>
									)}
								</div>
								<div
									onClick={retriaveReviewDataNow}
									className={Styles.subjectHeaderButton}>
									Retrieve Notes
								</div>
								<div className={Styles.subjectBody}>
									{activateNotesDisplay &&
										reviewData.map((review: review) => (
											<CardBox
												handleUpdate={handleUpdateReviewPublished}
												link={`/Admin/Review/Edit/Review/${review.id}`}
												label={review.name}
												published={review.published}
												id={review.id}
												key={review.id}
											/>
										))}
								</div>
							</div>
						</div>
					)}
					{/* //! END OF REVIEW DISPLAY ONLY */}

					{/* //* START OF QUESTIONS DISPLAY ONLY */}
					{navValue == 'Questions' && (
						<div className={Styles.rightInnercontainerBody}>
							<div className={Styles.subject}>
								<div className={Styles.subjectHeader}>
									<div className={Styles.subjectHeaderText}>
										Questions Management
									</div>
									<Link passHref href='/Admin/Review/Create/Question'>
										<a>
											<div className={Styles.subjectHeaderButton}>
												Create Question
											</div>
										</a>
									</Link>
								</div>
								<div className={Styles.selectDivTopic}>
									<SelectMiu
										displayLabel='Select Subject'
										show={true}
										forms={selectOptionReview}
										handlechange={handleSelectedSubjectQuestion}
										value={detailsQuestions.subjectId}
									/>
									<SelectMiu
										displayLabel='Select Form'
										show={true}
										forms={selectOptionFormsReview}
										handlechange={handleSelectedFormQuestion}
										value={detailsQuestions.formId}
									/>
									{activateListTopicReview && (
										<SelectMiu
											displayLabel='Select Topic'
											show={true}
											forms={selectOptionTopicsQuestions}
											handlechange={handleSelectedTopicQuestion}
											value={detailsQuestions.topicId}
										/>
									)}
									{activateListReview && (
										<SelectMiu
											displayLabel='Select Review'
											show={true}
											forms={selectOptionReviewQuestions}
											handlechange={handleSelectedReviewQuestion}
											value={detailsQuestions.reviewId}
										/>
									)}
								</div>
								<div
									onClick={retriaveReviewDataNowForQuestions}
									className={Styles.subjectHeaderButton}>
									Retrieve Questions
								</div>

								<div className={Styles.subjectBody}>
									{activateQuestionsDisplay &&
										questionData.map((question: question, index) => (
											<CardBox
												handleUpdate={handleUpdateQuestion}
												link={`/Admin/Review/Edit/Question/${question.id}`}
												label={(index + 1).toString()}
												published={question.published}
												id={question.id}
												key={question.id}
											/>
										))}
								</div>
							</div>
						</div>
					)}
					{/* //! END OF QUESTIONS DISPLAY ONLY */}
					{/* //!start of SUBJECT EXAM desplay */}
					{navValue == 'SubjectsExam' && (
						<div className={Styles.rightInnercontainerBody}>
							<div className={Styles.subject}>
								<div className={Styles.subjectHeader}>
									<div className={Styles.subjectHeaderText}>
										Subjects In Exam Management
									</div>
									<Link passHref href='/Admin/Exam/Create/Subject'>
										<div className={Styles.subjectHeaderButton}>
											Create Subject in Exam
										</div>
									</Link>
								</div>
								<div className={Styles.subjectBody}>
									{subjectExamList.map(
										(subject: {
											subjectName: string;
											id: number;
											published: boolean;
										}) => (
											<CardBox
												handleUpdate={handleUpdateSubjectExam}
												link={'/Admin/Exam/Edit/Subject/' + subject.id}
												label={subject.subjectName}
												published={subject.published}
												id={subject.id}
												key={subject.id}
											/>
										)
									)}
								</div>
							</div>
						</div>
					)}
					{/* //! END OF SUBJECT EXAM DISPLAY ONLY */}
					{navValue == 'FormsExam' && (
						<div className={Styles.rightInnercontainerBody}>
							<div className={Styles.subject}>
								<div className={Styles.subjectHeader}>
									<div className={Styles.subjectHeaderText}>
										Forms In Exam Management
									</div>
									<Link passHref href='/Admin/Exam/Create/Form'>
										<div className={Styles.subjectHeaderButton}>
											Create Form in Exam
										</div>
									</Link>
								</div>
								<div className={Styles.subjectBody}>
									{formsExam.map((form: { id: number; formName: string }) => (
										<CardBox
											handleUpdate={handleUpdateSubjectExam}
											link={'/Admin/Exam/Edit/Form/' + form.id}
											label={form.formName}
											id={form.id}
											key={form.id}
											published={''}
										/>
									))}
								</div>
							</div>
						</div>
					)}
					{/* //! END OF FORM EXAM DISPLAY ONLY */}
					{navValue == 'ExamType' && (
						<div className={Styles.rightInnercontainerBody}>
							<div className={Styles.subject}>
								<div className={Styles.subjectHeader}>
									<div className={Styles.subjectHeaderText}>
										Welcome to the ExamType Dashboard
									</div>
								</div>
							</div>
						</div>
					)}
					{/* //! END OF EXAM TYPE  DISPLAY ONLY */}
					{navValue == 'Exam' && (
						<div className={Styles.rightInnercontainerBody}>
							<div className={Styles.subject}>
								<div className={Styles.subjectHeader}>
									<div className={Styles.subjectHeaderText}>
										Welcome to the Exam Dashboard
									</div>
								</div>
							</div>
						</div>
					)}
					{/* //! END OF EXAM DISPLAY ONLY */}
				</div>
			</div>
		</div>
	);
};

export default Index;

//*Removing default search bar :)
Index.getLayout = function PageLayout(page: ReactNode) {
	return <>{page}</>;
};
