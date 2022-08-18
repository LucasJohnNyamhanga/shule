import { useState, useRef, useEffect, useContext } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import Styles from '../../styles/admin.module.scss';
import { ReactNode } from 'react';
import SummarizeIcon from '@mui/icons-material/Summarize';
import NotesIcon from '@mui/icons-material/Notes';
import Books from '@mui/icons-material/ImportContacts';
import SchoolIcon from '@mui/icons-material/School';
import axios from 'axios';
import {
	exam,
	examDownloadable,
	notesDownloadable,
	question,
	reference,
	review,
} from '@prisma/client';
import Link from 'next/link';
import CardBox from '../../components/tools/cardBoxStyle';
import CardBoxView from '../../components/tools/cardBoxWithView';
import toast, { Toaster } from 'react-hot-toast';
import SelectMiu from '../../components/tools/SelectMui';
import { NavContext } from '../../components/context/StateContext';
import AlignVerticalBottomIcon from '@mui/icons-material/AlignVerticalBottom';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';
import Loader from '../../components/tools/loader';
import Drawer from '../../components/tools/DrawerMobileAdmin';
import { BsDownload as Downloads } from 'react-icons/bs';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useSession } from 'next-auth/react';
import { FaUserSecret, FaUsers } from 'react-icons/fa';
import InputTextMui from '../../components/tools/InputTextMui';
import { prisma } from '../../db/prisma';
const url = 'https://shule-eight.vercel.app';

import { getSession } from 'next-auth/react';
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
			id: true,
			isAdmin: true,
			isSuperUser: true,
			name: true,
			username: true,
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

	await prisma.$disconnect();
	return {
		props: { userfound },
	};
};

const Index = ({
    	userfound,
    }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
	const matches300 = useMediaQuery('(min-width:325px)');
	const { status } = useSession();
	const { navActive, setNavActive } = useContext(NavContext);

	type dataTypeSelect = {
		value: string;
		label: string;
	}[];

	const [navValue, setNavValue] = useState('');
	const [subjects, setSubjects] = useState([]);
	const [examDownloadable, setExamDownloadable] = useState([]);
	const [subjectsReview, setSubjectsReview] = useState([]);
	const [forms, setForms] = useState([]);
	const [formsReview, setFormsReview] = useState([]);
	const [formsExam, setFormsExam] = useState([]);
	const [subjectExamList, setSubjectsExam] = useState([]);
	const [topics, setTopics] = useState([]);
	const [topicsReview, setTopicsReview] = useState([]);
	const [examTypeList, setExamTypeList] = useState([]);
	const [referenceList, setReferenceList] = useState([]);
	const [formsReference, setFormsReference] = useState([]);
	const [subjectReferenceList, setSubjectReferenceList] = useState([]);
	const [notesData, setNotesData] = useState([]);
	const [examData, setExamData] = useState([]);
	const [downloadable, setDownloadable] = useState([]);
	const [reviewData, setReviewData] = useState([]);
	const [questionData, setQuestionData] = useState([]);
	const [topicsNotes, setTopicsNotes] = useState<dataTypeSelect>([]);
	const [topicsNotesReview, setTopicsNotesReview] = useState<dataTypeSelect>(
		[]
	);
	const [examListSelect, SetexamListSelect] = useState<dataTypeSelect>([]);
	const [examListSelectList, SetexamListSelectList] = useState<dataTypeSelect>(
		[]
	);
	const [examListSelectCategory, SetexamListSelectCategory] =
		useState<dataTypeSelect>([]);
	const [activateTopics, setActivateTopics] = useState(false);
	const [loading, setLoading] = useState(false);
	const [activateSubjectReferenceList, setActivateSubjectReferenceList] =
		useState(false);
	const [activateTopicsREview, setActivateTopicsReview] = useState(false);
	const [activateDownloadable, setActivateDownloadable] = useState(false);
	const [activateFormsReference, setActivateFormsReference] = useState(false);
	const [activateExamType, setActivateExamType] = useState(false);
	const [activateReference, setActivateReference] = useState(false);
	const [activateNotesDisplay, setActivateNotesDisplay] = useState(false);
	const [activateExamDisplay, setActivateExamDisplay] = useState(false);
	const [activateExamCategory, setActivateExamCategory] = useState(false);
	const [activateExamDisplayCategory, setActivateExamDisplayCategory] =
		useState(false);
	const [activateQuestionsDisplay, setActivateQuestionsDisplay] =
		useState(false);
	const [activateNotes, setActivateNotes] = useState(false);
	const [activateExam, setActivateExam] = useState(false);
	const [activateNotesReview, setActivateNotesReview] = useState(false);
	const [active, setActive] = useState('');

	const [changerNotes, setChangerNotes] = useState(0);
	const [selectOption, setSelectOption] = useState<dataTypeSelect>([]);
	const [selectOptionForms, setSelectOptionForms] = useState<dataTypeSelect>(
		[]
	);
	const [selectOptionExam, setSelectOptionExam] = useState<dataTypeSelect>([]);
	const [activateExamDisplayDownloadable, setActivateExamDisplayDownloadable] =
		useState(false);
	const [selectOptionFormsExam, setSelectOptionFormsExam] =
		useState<dataTypeSelect>([]);
	const [selectOptionReference, setSelectOptionReference] =
		useState<dataTypeSelect>([]);
	const [selectOptionFormsReference, setSelectOptionFormsReference] =
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

	const [downloadableDetails, setDownloadableDetails] = useState({
		formId: '',
		subjectId: '',
	});

	const [topicDetailsReview, setTopicDetailsReview] = useState({
		formId: '',
		subjectId: '',
	});

	const [topicDetailsExam, setTopicDetailsExam] = useState({
		formId: '',
		subjectId: '',
	});

	const [detailsReference, setDetailsReference] = useState({
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

	const [DetailsExam, setDetailsExam] = useState({
		formId: '',
		subjectId: '',
		examTypeId: '',
	});

	const [detailsQuestions, setDetailsQuestions] = useState({
		formId: '',
		subjectId: '',
		topicId: '',
		reviewId: '',
	});

	const [examListDetails, setExamListDetails] = useState({
		formId: '',
		subjectId: '',
		examTypeId: '',
		examId: '',
	});

	const [userDetail, setUserDetail] = useState({
		value: '',
	});
	const [userSearchData, setUserSearchData] = useState([]);
	const [adminsList, setAdminsList] = useState([]);
	const [activateUserSearch, setActivateUserSearch] = useState(false);
	const [orderList, setOrderList] = useState([]);

	const notifySuccess = (message: string) => toast.success(message);
	const notifyError = (message: string) => toast.error(message);
	const notify = (message: string) => toast(message);

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
	const subjectReference = useRef<HTMLDivElement>(null!);
	const formReference = useRef<HTMLDivElement>(null!);
	const reference = useRef<HTMLDivElement>(null!);
	const downloads = useRef<HTMLDivElement>(null!);
	const examDownloads = useRef<HTMLDivElement>(null!);
	const user = useRef<HTMLDivElement>(null!);
	const admin = useRef<HTMLDivElement>(null!);
	const order = useRef<HTMLDivElement>(null!);

	let handleNav = (value: string) => {
		setNavValue(value);
		createActive(value);
	};

	let createActive = (key: string) => {
		removeActive();
		switch (key) {
			case 'Notes':
				notes.current.classList.add(Styles.Active);
				retrivalTopics();
				setActive('Notes');
				break;
			case 'Downloads':
				downloads.current.classList.add(Styles.Active);
				retrivalTopics();
				setActive('Downloads');
				break;
			case 'Subjects':
				subject.current.classList.add(Styles.Active);
				retriaveSubjects();
				setActive('Subjects');
				break;
			case 'Topics':
				topic.current.classList.add(Styles.Active);
				retrivalTopics();
				setActive('Topics');
				break;
			case 'Forms':
				form.current.classList.add(Styles.Active);
				retriaveSubjects();
				setActive('Forms');
				break;
			case 'Review':
				review.current.classList.add(Styles.Active);
				retrivalTopicsReview();
				setActive('Review');
				break;
			case 'Questions':
				questions.current.classList.add(Styles.Active);
				retrivalTopicsReview();
				setActive('Questions');
				break;
			case 'SubjectsReview':
				subjectReview.current.classList.add(Styles.Active);
				retriaveSubjectsReview();
				setActive('SubjectsReview');
				break;
			case 'TopicsReview':
				topicReview.current.classList.add(Styles.Active);
				retrivalTopicsReview();
				setActive('TopicsReview');
				break;
			case 'FormsReview':
				formReview.current.classList.add(Styles.Active);
				retriaveSubjectsReview();
				setActive('FormsReview');
				break;
			case 'SubjectsExam':
				subjectExam.current.classList.add(Styles.Active);
				retriaveSubjectsExam();
				setActive('SubjectsExam');
				break;
			case 'FormsExam':
				formExam.current.classList.add(Styles.Active);
				retriaveSubjectsExam();
				setActive('FormsExam');
				break;
			case 'ExamType':
				examType.current.classList.add(Styles.Active);
				retriaveSubjectsExam();
				setActive('ExamType');
				break;
			case 'Exam':
				exam.current.classList.add(Styles.Active);
				retriaveSubjectsExam();
				setActive('Exam');
				break;
			case 'ExamDownloads':
				examDownloads.current.classList.add(Styles.Active);
				retriaveSubjectsExam();
				setActive('ExamDownloads');
				break;
			case 'SubjectReference':
				subjectReference.current.classList.add(Styles.Active);
				retriaveSubjectsReference();
				setActive('SubjectReference');
				break;
			case 'FormReference':
				formReference.current.classList.add(Styles.Active);
				retriaveSubjectsReference();
				setActive('FormReference');
				break;

			case 'User':
				user.current.classList.add(Styles.Active);
				setActive('User');
				break;
			case `Reference`:
				reference.current.classList.add(Styles.Active);
				retriaveSubjectsReference();
				setActive(`Reference`);
				break;
			case 'Admin':
				admin.current.classList.add(Styles.Active);
				setActive('Admin');
				handleAdmins();
				break;
			case 'Order':
				order.current.classList.add(Styles.Active);
				setActive('Order');
				handleOrder();
				break;
			default:
				break;
		}
		smoothScroll();
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
		subjectReference.current.classList.remove(Styles.Active);
		formReference.current.classList.remove(Styles.Active);
		reference.current.classList.remove(Styles.Active);
		downloads.current.classList.remove(Styles.Active);
		examDownloads.current.classList.remove(Styles.Active);
		user.current.classList.remove(Styles.Active);
		admin.current.classList.remove(Styles.Active);
		order.current.classList.remove(Styles.Active);
	};

	const retriaveSubjectsReview = async () => {
		setLoading(true);
		axios
			.get(url + '/api/subjectsReview')
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
				setLoading(false);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				setLoading(false);
				notifyError('Something went wrong.');
			})
			.then(function () {
				// always executed
			});

		axios
			.get(url + '/api/formsReview')
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
				setLoading(false);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				setLoading(false);
				notifyError('Something went wrong.');
			})
			.then(function () {
				// always executed
			});
	};

	const retriaveSubjectsExam = async () => {
		setLoading(true);
		axios
			.get(url + '/api/subjectsExam')
			.then(function (response) {
				const subjectsFromServer = JSON.parse(JSON.stringify(response.data));
				// handle success
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
				setLoading(false);
			})
			.catch(function (error) {
				// handle error
				setLoading(false);
				console.log(error);
				notifyError('Something went wrong.');
			})
			.then(function () {
				// always executed
			});

		axios
			.get(url + '/api/formsExam')
			.then(function (response) {
				const FormsFromServer = JSON.parse(JSON.stringify(response.data));
				// handle success
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
				setLoading(false);
				setSelectOptionFormsExam(data);
			})
			.catch(function (error) {
				// handle error
				setLoading(false);
				console.log(error);
				notifyError('Something went wrong.');
			})
			.then(function () {
				// always executed
			});
	};

	const retriaveSubjectsReference = async () => {
		setLoading(true);
		axios
			.get(url + '/api/subjectsReference')
			.then(function (response) {
				const subjectsFromServer = JSON.parse(JSON.stringify(response.data));
				// handle success
				setSubjectReferenceList(subjectsFromServer);
				setActivateSubjectReferenceList(true);
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

				setSelectOptionReference(data);
				setLoading(false);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				setActivateSubjectReferenceList(false);
				setLoading(false);
				notifyError('Something went wrong.');
			})
			.then(function () {
				// always executed
			});

		axios
			.get(url + '/api/formsReference')
			.then(function (response) {
				const FormsFromServer = JSON.parse(JSON.stringify(response.data));
				// handle success
				setFormsReference(FormsFromServer);
				setActivateFormsReference(true);
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

				setSelectOptionFormsReference(data);
				setLoading(false);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				setActivateFormsReference(false);
				notifyError('Something went wrong.');
				setLoading(false);
			})
			.then(function () {
				// always executed
			});
	};

	const retriaveSubjects = async () => {
		setLoading(true);
		axios
			.get(url + '/api/subjects')
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
				setLoading(false);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				setLoading(false);
				notifyError('Something went wrong.');
			})
			.then(function () {
				// always executed
			});

		axios
			.get(url + '/api/forms')
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
				setLoading(false);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Something went wrong.');
				setLoading(false);
			})
			.then(function () {
				// always executed
			});
	};

	let handleUpdateSubject = (published: boolean, id: number) => {
		setLoading(true);
		axios
			.post(url + '/api/updateDraftOrPublished', {
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
				setLoading(false);
			})
			.then(function () {
				// always executed
			});
	};

	let handleUpdateExamDownloadable = (published: boolean, id: number) => {
		setLoading(true);
		axios
			.post(url + '/api/updateDraftOrPublishedExamDownloadable', {
				id,
				published: !published,
			})
			.then(function (response) {
				retriaveExamDownloadableDataNow();
				let jibu: string = response.data.message;
				notifySuccess(jibu);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Error has occured, try later.');
				setLoading(false);
			})
			.then(function () {
				// always executed
			});
	};

	let handleUpdatePublishExam = (published: boolean, id: number) => {
		setLoading(true);
		axios
			.post(url + '/api/updateDraftOrPublishedExamination', {
				id,
				published: !published,
			})
			.then(function (response) {
				let jibu: string = response.data.message;
				notifySuccess(jibu);
				retriaveExamDataNow();
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Error has occured, try later.');
				setLoading(false);
			})
			.then(function () {
				// always executed
			});
	};

	let handleUpdateSubjectReview = (published: boolean, id: number) => {
		setLoading(true);
		axios
			.post(url + '/api/updateDraftOrPublishedsubjectReview', {
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
				setLoading(false);
			})
			.then(function () {
				// always executed
			});
	};

	let handleUpdateSubjectExam = (published: boolean, id: number) => {
		setLoading(true);
		axios
			.post(url + '/api/updateDraftOrPublishedExam', {
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
				setLoading(false);
			})
			.then(function () {
				// always executed
			});
	};

	let handleUpdateSubjectReference = (published: boolean, id: number) => {
		setLoading(true);
		axios
			.post(url + '/api/updateDraftOrPublishedSubjectReference', {
				id,
				published: !published,
			})
			.then(function (response) {
				retriaveSubjectsReference();
				let jibu: string = response.data.message;
				notifySuccess(jibu);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Error has occured, try later.');
				setLoading(false);
			})
			.then(function () {
				// always executed
			});
	};

	let handleUpdateNotesDownloadable = (published: boolean, id: number) => {
		setLoading(true);
		axios
			.post(url + '/api/updateDraftOrPublishedNotesDownloadable', {
				id,
				published: !published,
			})
			.then(function (response) {
				retriaveDownloadable();
				let jibu: string = response.data.message;
				notifySuccess(jibu);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Error has occured, try later.');
				setLoading(false);
			})
			.then(function () {
				// always executed
			});
	};

	let handleUpdateTopic = (published: boolean, id: number) => {
		setLoading(true);
		axios
			.post(url + '/api/updateDraftOrPublishedTopic', {
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
				setLoading(false);
			})
			.then(function () {
				// always executed
			});
	};

	let handleUpdateTopicReview = (published: boolean, id: number) => {
		setLoading(true);
		axios
			.post(url + '/api/updateDraftOrPublishedTopicReview', {
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
				setLoading(false);
			})
			.then(function () {
				// always executed
			});
	};

	let handleUpdateExamType = (published: boolean, id: number) => {
		setLoading(true);
		axios
			.post(url + '/api/updateDraftOrPublishedExamType', {
				id,
				published: !published,
			})
			.then(function (response) {
				let jibu: string = response.data.message;
				notifySuccess(jibu);
				retriaveTopicsDataExamType();
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Error has occured, try later.');
				setLoading(false);
			})
			.then(function () {
				// always executed
			});
	};

	let handleUpdateReference = (published: boolean, id: number) => {
		setLoading(true);
		axios
			.post(url + '/api/updateDraftOrPublishedReference', {
				id,
				published: !published,
			})
			.then(function (response) {
				let jibu: string = response.data.message;
				notifySuccess(jibu);
				retriaveTopicsDataReference();
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Error has occured, try later.');
				setLoading(false);
			})
			.then(function () {
				// always executed
			});
	};

	let handleUpdateQuestion = (published: boolean, id: number) => {
		setLoading(true);
		axios
			.post(url + '/api/updateDraftOrPublishedQuestions', {
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
				setLoading(false);
			})
			.then(function () {
				// always executed
			});
	};

	let handleUpdateReviewPublished = (published: boolean, id: number) => {
		setLoading(true);
		axios
			.post(url + '/api/updateDraftOrPublishedReview', {
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
				setLoading(false);
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
		setLoading(true);
		axios
			.get(url + '/api/subjects')
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
				setLoading(false);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Something went wrong.');
				setLoading(false);
			})
			.then(function () {
				// always executed
			});

		axios
			.get(url + '/api/forms')
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
				setLoading(false);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Something went wrong.');
				setLoading(false);
			})
			.then(function () {
				// always executed
			});
	};

	//topicsReview

	let retrivalTopicsReview = () => {
		setLoading(true);
		axios
			.get(url + '/api/subjectsReview')
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
				setLoading(false);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Something went wrong.');
				setLoading(false);
			})
			.then(function () {
				// always executed
			});

		axios
			.get(url + '/api/formsReview')
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
				setLoading(false);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Something went wrong.');
				setLoading(false);
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

	//downloadable

	let handleSelectedDownloadableForm = (value: string) => {
		setDownloadableDetails({ ...downloadableDetails, formId: value });
		setActivateDownloadable(false);
	};

	let handleSelectedDownloadableSubject = (value: string) => {
		setDownloadableDetails({ ...downloadableDetails, subjectId: value });
		setActivateDownloadable(false);
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

	//*examType
	let handleSelectedTopicSubjectExam = (value: string) => {
		setTopicDetailsExam({ ...topicDetailsExam, subjectId: value });
		setActivateExamType(false);
	};

	let handleSelectedTopicFormExam = (value: string) => {
		setTopicDetailsExam({ ...topicDetailsExam, formId: value });
		setActivateExamType(false);
	};

	//*Reference
	let handleSelectedSubjectReference = (value: string) => {
		setDetailsReference({ ...detailsReference, subjectId: value });
		setActivateReference(false);
	};

	let handleSelectedTopicFormReference = (value: string) => {
		setDetailsReference({ ...detailsReference, formId: value });
		setActivateReference(false);
	};

	//* notes

	let handleSelectedNotesSubject = (value: string) => {
		setNotesDetails({ ...notesDetails, subjectId: value });
		setChangerNotes(changerNotes + 1);
		setActivateNotesDisplay(false);
	};

	let handleSelectedNotesForm = (value: string) => {
		setNotesDetails({ ...notesDetails, formId: value });
		setChangerNotes(changerNotes + 1);
		setActivateNotesDisplay(false);
	};

	let handleSelectedNotes = (value: string) => {
		setNotesDetails({ ...notesDetails, topicId: value });
		setActivateNotesDisplay(false);
	};

	//* exam

	let handleSelectedExamSubject = (value: string) => {
		setDetailsExam({ ...DetailsExam, subjectId: value, examTypeId: '' });
		setChangerNotes(changerNotes + 1);
		setActivateExamDisplay(false);
	};

	let handleSelectedExamForm = (value: string) => {
		setDetailsExam({ ...DetailsExam, formId: value, examTypeId: '' });
		setChangerNotes(changerNotes + 1);
		setActivateExamDisplay(false);
	};

	let handleSelectedExam = (value: string) => {
		setDetailsExam({ ...DetailsExam, examTypeId: value });
		setActivateExamDisplay(false);
	};

	//* examDownloadable

	let handleSelectedExamListSubject = (value: string) => {
		setExamListDetails({
			...examListDetails,
			subjectId: value,
			examTypeId: '',
		});
		setChangerNotes(changerNotes + 1);
		setActivateExamDisplay(false);
		setActivateExamDisplayDownloadable(false);
	};

	let handleSelectedExamListForm = (value: string) => {
		setExamListDetails({
			...examListDetails,
			formId: value,
			examTypeId: '',
		});
		setChangerNotes(changerNotes + 1);
		setActivateExamDisplay(false);
		setActivateExamDisplayDownloadable(false);
	};

	let handleSelectedExamList = (value: string) => {
		setExamListDetails({
			...examListDetails,
			examTypeId: value,
			examId: '',
		});
		setActivateExamDisplay(false);
		setActivateExamDisplayCategory(false);
		setChangerNotes(changerNotes + 1);
		setActivateExamDisplayDownloadable(false);
	};

	let handleSelectedExamForDownload = (value: string) => {
		setExamListDetails({ ...examListDetails, examId: value });
		setActivateExamDisplay(false);
		setActivateExamDisplayDownloadable(false);
	};

	//* review

	let handleSelectedNotesSubjectReview = (value: string) => {
		setNotesDetailsReview({ ...notesDetailsReview, subjectId: value });
		setChangerNotes(changerNotes + 1);
		setActivateQuestionsDisplay(false);
	};

	let handleSelectedNotesFormReview = (value: string) => {
		setNotesDetailsReview({ ...notesDetailsReview, formId: value });
		setChangerNotes(changerNotes + 1);
		setActivateQuestionsDisplay(false);
	};

	let handleSelectedNotesReview = (value: string) => {
		setNotesDetailsReview({ ...notesDetailsReview, topicId: value });
		setActivateQuestionsDisplay(false);
	};

	//* question

	let handleSelectedSubjectQuestion = (value: string) => {
		setDetailsQuestions({ ...detailsQuestions, subjectId: value });
		setChangerNotes(changerNotes + 1);
		setActivateQuestionsDisplay(false);
	};

	let handleSelectedFormQuestion = (value: string) => {
		setDetailsQuestions({ ...detailsQuestions, formId: value });
		setChangerNotes(changerNotes + 1);
		setActivateQuestionsDisplay(false);
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
			setLoading(true);
			axios({
				method: 'post',
				url: url + '/api/topics',
				data: topicDetails,
			})
				.then(function (response) {
					const topicsFromServer = JSON.parse(JSON.stringify(response.data));
					// handle success
					if (topicsFromServer.length > 0) {
						setTopics(topicsFromServer);
						setActivateTopics(true);
					} else {
						setActivateTopics(false);
						notifyError('Ooops, No topics available yet.');
					}
					setLoading(false);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					notifyError('Something went wrong.');
					setLoading(false);
				})
				.then(function () {
					// always executed
				});
		} else {
			notifyError('All fields should be filled.');
		}
	};

	let retriaveDownloadable = () => {
		if (
			downloadableDetails.formId != '' &&
			downloadableDetails.subjectId != ''
		) {
			setLoading(true);
			axios({
				method: 'post',
				url: url + '/api/downloadable',
				data: downloadableDetails,
			})
				.then(function (response) {
					const topicsFromServer = JSON.parse(JSON.stringify(response.data));
					// handle success
					if (topicsFromServer.length > 0) {
						setDownloadable(topicsFromServer);
						setActivateDownloadable(true);
					} else {
						setActivateDownloadable(false);
						notifyError('Ooops, No topics available yet.');
					}
					setLoading(false);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					notifyError('Something went wrong.');
					setLoading(false);
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
			setLoading(true);
			axios({
				method: 'post',
				url: url + '/api/topicsReview',
				data: topicDetailsReview,
			})
				.then(function (response) {
					const topicsFromServer = JSON.parse(JSON.stringify(response.data));
					// handle success
					if (topicsFromServer.length > 0) {
						setTopicsReview(topicsFromServer);
						setActivateTopicsReview(true);
					} else {
						setActivateTopics(false);
						notifyError('Ooops, No topics available yet.');
					}
					setLoading(false);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					notifyError('Something went wrong.');
					setLoading(false);
				})
				.then(function () {
					// always executed
				});
		} else {
			notifyError('All fields should be filled.');
		}
	};

	let retriaveTopicsDataExamType = () => {
		if (topicDetailsExam.formId != '' && topicDetailsExam.subjectId != '') {
			setLoading(true);
			axios({
				method: 'post',
				url: url + '/api/examType',
				data: topicDetailsExam,
			})
				.then(function (response) {
					const topicsFromServer = JSON.parse(JSON.stringify(response.data));
					// handle success
					if (topicsFromServer.length > 0) {
						setExamTypeList(topicsFromServer);
						setActivateExamType(true);
					} else {
						setActivateExamType(false);
						notifyError('Ooops, No topics available yet.');
					}
					setLoading(false);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					notifyError('Something went wrong.');
					setLoading(false);
				})
				.then(function () {
					// always executed
				});
		} else {
			notifyError('All fields should be filled.');
		}
	};

	let retriaveTopicsDataReference = () => {
		if (detailsReference.formId != '' && detailsReference.subjectId != '') {
			setLoading(true);
			axios({
				method: 'post',
				url: url + '/api/reference',
				data: detailsReference,
			})
				.then(function (response) {
					const topicsFromServer = JSON.parse(JSON.stringify(response.data));
					// handle success
					if (topicsFromServer.length > 0) {
						setReferenceList(topicsFromServer);
						setActivateReference(true);
					} else {
						setActivateReference(false);
						notifyError('Ooops, No topics available yet.');
					}
					setLoading(false);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					notifyError('Something went wrong.');
					setLoading(false);
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
			setLoading(true);
			setActivateNotes(false);
			axios({
				method: 'post',
				url: url + '/api/topics',
				data: notesDetails,
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
						setTopicsNotes(data);
						setActivateNotes(true);
					} else {
						notifyError(`Ooops, No topics available for selection.`);
					}
					setLoading(false);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					notifyError('Something went wrong.');
					setLoading(false);
				})
				.then(function () {
					// always executed
				});
		}
	};

	let retriaveDataForExam = () => {
		if (DetailsExam.formId != '' && DetailsExam.subjectId != '') {
			setLoading(true);
			axios({
				method: 'post',
				url: url + '/api/examType',
				data: DetailsExam,
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
						for (const examType of topicsFromServer) {
							template = {
								value: examType.id,
								label: examType.name,
							};
							data.push(template);
						}
						SetexamListSelect(data);
						setActivateExam(true);
						setActivateExamDisplay(true);
					} else {
						notifyError(`Ooops, No Exam Category  available for selection.`);
						setActivateExamDisplay(false);
						setActivateExam(false);
					}
					setLoading(false);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					notifyError('Something went wrong.');
					setLoading(false);
					setActivateExamDisplay(false);
					setActivateExam(false);
				})
				.then(function () {
					// always executed
				});
		}

		if (examListDetails.formId != '' && examListDetails.subjectId != '') {
			setLoading(true);
			axios({
				method: 'post',
				url: url + '/api/examType',
				data: examListDetails,
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
						for (const examType of topicsFromServer) {
							template = {
								value: examType.id,
								label: examType.name,
							};
							data.push(template);
						}
						SetexamListSelectCategory(data);
						setActivateExamCategory(true);
					} else {
						notifyError(`Ooops, No Exam Category  available for selection.`);
						setActivateExamCategory(false);
						setActivateExamDisplayCategory(false);
					}
					setLoading(false);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					notifyError('Something went wrong.');
					setLoading(false);
					setActivateExamCategory(false);
					setActivateExamDisplayCategory(false);
				})
				.then(function () {
					// always executed
				});
		}
	};

	let retriaveDataForExamList = () => {
		if (
			examListDetails.formId != '' &&
			examListDetails.subjectId != '' &&
			examListDetails.examTypeId != ''
		) {
			setLoading(true);
			axios({
				method: 'post',
				url: url + '/api/examList',
				data: examListDetails,
			})
				.then(function (response) {
					const topicsFromServer = JSON.parse(JSON.stringify(response.data));
					// handle success
					if (topicsFromServer.exam.length > 0) {
						let data = [];
						let template: templateType = {
							value: '',
							label: '',
						};
						for (const examType of topicsFromServer.exam) {
							template = {
								value: examType.id,
								label: `${
									matches300
										? truncate(examType.description)
										: truncateCustom(examType.description, 12)
								}${examType.year}`,
							};
							data.push(template);
						}
						SetexamListSelectList(data);
						setActivateExamDisplayCategory(true);
					} else {
						notifyError(`Ooops, No Exam Category  available for selection.`);
						setActivateExamDisplayCategory(false);
					}
					setLoading(false);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					notifyError('Something went wrong.');
					setLoading(false);
					setActivateExamDisplayCategory(false);
				})
				.then(function () {
					// always executed
				});
		}
	};

	let retriaveTopicsDataForReview = () => {
		if (notesDetailsReview.formId != '' && notesDetailsReview.subjectId != '') {
			setLoading(true);
			setActivateNotesReview(false);
			axios({
				method: 'post',
				url: url + '/api/topicsReview',
				data: notesDetailsReview,
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
						setTopicsNotesReview(data);
						setActivateNotesReview(true);
					} else {
						notifyError(`Ooops, No Review topics available for selection.`);
					}
					setLoading(false);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					notifyError('Something went wrong.');
					setLoading(false);
				})
				.then(function () {
					// always executed
				});
		}

		if (detailsQuestions.formId != '' && detailsQuestions.subjectId != '') {
			setLoading(true);
			axios({
				method: 'post',
				url: url + '/api/topicsReview',
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
						notifyError(`Ooops, No Review topics available for selection.`);
						setActivateListTopicReview(false);
						setActivateListReview(false);
						setActivateQuestionsDisplay(false);
					}
					setLoading(false);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					notifyError('Something went wrong.');
					setLoading(false);
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
			setLoading(true);
			axios({
				method: 'post',
				url: url + '/api/review',
				data: detailsQuestions,
			})
				.then(function (response) {
					const reviewFromServer = JSON.parse(JSON.stringify(response.data));
					// handle success
					if (reviewFromServer.length > 0) {
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
						notifyError(`Ooops, No Review available for selection.`);
						setActivateQuestionsDisplay(false);
						setActivateListReview(false);
					}
					setLoading(false);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					notifyError('Something went wrong.');
					setLoading(false);
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
			setLoading(true);
			axios({
				method: 'post',
				url: url + '/api/notes',
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
					setLoading(false);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					notifyError('Something went wrong.');
					setLoading(false);
				})
				.then(function () {
					// always executed
				});
		} else {
			notifyError('Oops, All fields should be selected.');
		}
	};

	let retriaveExamDataNow = () => {
		if (
			DetailsExam.formId != '' &&
			DetailsExam.subjectId != '' &&
			DetailsExam.examTypeId != ''
		) {
			setLoading(true);
			axios({
				method: 'post',
				url: url + '/api/exam',
				data: DetailsExam,
			})
				.then(function (response) {
					const notesFromServer = JSON.parse(JSON.stringify(response.data));
					// handle success
					if (notesFromServer.length != 0) {
						setExamData(notesFromServer);
						setActivateExamDisplay(true);
					} else {
						setActivateExamDisplay(false);
						notifyError('Ooops, No exam found');
					}
					setLoading(false);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					notifyError('Something went wrong.');
					setLoading(false);
				})
				.then(function () {
					// always executed
				});
		} else {
			notifyError('Oops, All fields should be selected.');
		}
	};

	let retriaveExamDownloadableDataNow = () => {
		if (
			examListDetails.formId != '' &&
			examListDetails.subjectId != '' &&
			examListDetails.examTypeId != '' &&
			examListDetails.examId != ''
		) {
			setLoading(true);
			axios({
				method: 'post',
				url: url + '/api/examDownloadable',
				data: examListDetails,
			})
				.then(function (response) {
					const notesFromServer = JSON.parse(JSON.stringify(response.data));
					// handle success
					if (notesFromServer.length != 0) {
						setExamDownloadable(notesFromServer);
						setActivateExamDisplayDownloadable(true);
					} else {
						setActivateExamDisplayDownloadable(false);
						notifyError('Ooops, No exam found');
					}
					setLoading(false);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					notifyError('Something went wrong.');
					setLoading(false);
					setActivateExamDisplayDownloadable(false);
				})
				.then(function () {
					// always executed
					setLoading(false);
				});
		} else {
			notifyError('Oops, All fields should be selected.');
			setLoading(false);
		}
	};

	let retriaveReviewDataNow = () => {
		if (
			notesDetailsReview.formId != '' &&
			notesDetailsReview.subjectId != '' &&
			notesDetailsReview.topicId != ''
		) {
			setLoading(true);
			axios({
				method: 'post',
				url: url + '/api/review',
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
					setLoading(false);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					notifyError('Something went wrong.');
					setLoading(false);
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
			setLoading(true);
			axios({
				method: 'post',
				url: url + '/api/questions',
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
					setLoading(false);
				})
				.catch(function (error) {
					// handle error
					console.log(error);
					notifyError('Something went wrong.');
					setLoading(false);
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
			.post(url + '/api/updateDraftOrPublishedNotes', {
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

	let smoothScroll = () => {
		scroll({
			top: 0,
			behavior: 'smooth',
		});
	};

	useEffect(() => {
		retriaveTopicsDataForNotes();
		retriaveTopicsDataForReview();
		retriaveDataForExam();
		retriaveDataForExamList();
		setNavActive('Admin');

		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [changerNotes, navActive, matches300, status]);

	let truncateLimit = 20;
	function truncate(str: string) {
		return str.length > truncateLimit
			? str.slice(0, truncateLimit) + '...'
			: str;
	}

	function customTruncate(str: string, size) {
		return str.length > size ? str.slice(0, size) + '...' : str;
	}

	function truncateCustom(str: string, size: number) {
		return str.length > size ? str.slice(0, size) + '...' : str;
	}

	let handleTextInput = (
		event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
		name: string
	) => {
		let value = event.currentTarget.value;
		setUserDetail({ value });
		setActivateUserSearch(false);
	};

	const retriveUser = () => {
		if (userDetail.value != '') {
			handleSearchUser();
		} else {
			notifyError('Enter User Name');
		}
	};

	let handleSearchUser = () => {
		setLoading(true);
		axios
			.post(url + '/api/searchUser', {
				user: userDetail.value,
			})
			.then(function (response) {
				const userDataSearch = JSON.parse(JSON.stringify(response.data));
				if (userDataSearch.length > 0) {
					setUserSearchData(userDataSearch);
					setLoading(false);
					setActivateUserSearch(true);
				} else {
					setLoading(false);
					notifyError('User Not found.');
				}
			})
			.catch(function (error) {
				// handle error
				console.log(error);

				setLoading(false);
			})
			.then(function () {
				// always executed
			});
	};

	let handleAdmins = () => {
		setLoading(true);
		axios
			.post(url + '/api/getAdmins', {
				user: userDetail.value,
			})
			.then(function (response) {
				const adminData: [] = JSON.parse(JSON.stringify(response.data));
				setAdminsList(adminData);
				setLoading(false);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Error has occured, try later.');
				setLoading(false);
			})
			.then(function () {
				// always executed
			});
	};

	let handleOrder = () => {
		setLoading(true);
		axios
			.post(url + '/api/getOrder', {
				user: userDetail.value,
			})
			.then(function (response) {
				const orderData: [] = JSON.parse(JSON.stringify(response.data));
				if (orderData.length > 0) {
					setOrderList(orderData);
				} else {
					setOrderList([]);
				}
				setLoading(false);
			})
			.catch(function (error) {
				// handle error
				console.log(error);
				notifyError('Error has occured, try later.');
				setLoading(false);
			})
			.then(function () {
				// always executed
			});
	};

	function timeAgo(time) {
		switch (typeof time) {
			case 'number':
				break;
			case 'string':
				time = +new Date(time);
				break;
			case 'object':
				if (time.constructor === Date) time = time.getTime();
				break;
			default:
				time = +new Date();
		}
		var time_formats = [
			[60, 'seconds', 1], // 60
			[120, '1 minute ago', '1 minute from now'], // 60*2
			[3600, 'minutes', 60], // 60*60, 60
			[7200, '1 hour ago', '1 hour from now'], // 60*60*2
			[86400, 'hours', 3600], // 60*60*24, 60*60
			[172800, 'Yesterday', 'Tomorrow'], // 60*60*24*2
			[604800, 'days', 86400], // 60*60*24*7, 60*60*24
			[1209600, 'Last week', 'Next week'], // 60*60*24*7*4*2
			[2419200, 'weeks', 604800], // 60*60*24*7*4, 60*60*24*7
			[4838400, 'Last month', 'Next month'], // 60*60*24*7*4*2
			[29030400, 'months', 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
			[58060800, 'Last year', 'Next year'], // 60*60*24*7*4*12*2
			[2903040000, 'years', 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
			[5806080000, 'Last century', 'Next century'], // 60*60*24*7*4*12*100*2
			[58060800000, 'centuries', 2903040000], // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
		];
		var seconds = (+new Date() - time) / 1000,
			token = 'ago',
			list_choice = 1;

		if (seconds == 0) {
			return 'Just now';
		}
		if (seconds < 0) {
			seconds = Math.abs(seconds);
			token = 'from now';
			list_choice = 2;
		}
		var i = 0,
			format;
		while ((format = time_formats[i++]))
			if (seconds < format[0]) {
				if (typeof format[2] == 'string') return format[list_choice];
				else
					return (
						Math.floor(seconds / format[2]) + ' ' + format[1] + ' ' + token
					);
			}
		return time;
	}

	return (
		<div className={Styles.container}>
			<div className={Styles.innerContainer}>
				<Toaster position='top-center' />
				<div className={Styles.containerBody}>
					<div className={Styles.leftInnercontainerBody}>
						<div className={Styles.leftInner}>
							<div className={Styles.containerHeader}>
								<div className={Styles.TopicHeader}>Admin Dashboard</div>
							</div>
							<div className={Styles.scroller}>
								<div className={Styles.containerBody}>
									<div className={Styles.TopicHeaderNotes}>Notes</div>
									<div
										ref={subject}
										id='Subjects'
										onClick={(e) => handleNav(e.currentTarget.id)}
										className={Styles.topicTittle}>
										<Books />
										<div className={Styles.text}>Subjects</div>
									</div>
									<div
										ref={form}
										id='Forms'
										onClick={(e) => handleNav(e.currentTarget.id)}
										className={Styles.topicTittle}>
										<SchoolIcon />
										<div className={Styles.text}>Forms</div>
									</div>
									<div
										ref={topic}
										id='Topics'
										onClick={(e) => handleNav(e.currentTarget.id)}
										className={Styles.topicTittle}>
										<NotesIcon />
										<div className={Styles.text}>Topics</div>
									</div>
									<div
										ref={notes}
										id='Notes'
										onClick={(e) => handleNav(e.currentTarget.id)}
										className={Styles.topicTittle}>
										<SummarizeIcon />
										<div className={Styles.text}>Notes</div>
									</div>
									<div
										ref={downloads}
										id='Downloads'
										onClick={(e) => handleNav(e.currentTarget.id)}
										className={Styles.topicTittle}>
										<Downloads size={25} />
										<div className={Styles.text}>Downloadables</div>
									</div>
								</div>
								<div className={Styles.TopicHeaderNotes}>Quiz</div>
								<div className={Styles.containerBody}>
									<div
										ref={subjectReview}
										id='SubjectsReview'
										onClick={(e) => handleNav(e.currentTarget.id)}
										className={Styles.topicTittle}>
										<Books />
										<div className={Styles.text}>Subjects</div>
									</div>
									<div
										ref={formReview}
										id='FormsReview'
										onClick={(e) => handleNav(e.currentTarget.id)}
										className={Styles.topicTittle}>
										<SchoolIcon />
										<div className={Styles.text}>Forms</div>
									</div>
									<div
										ref={topicReview}
										id='TopicsReview'
										onClick={(e) => handleNav(e.currentTarget.id)}
										className={Styles.topicTittle}>
										<NotesIcon />
										<div className={Styles.text}>Topics</div>
									</div>
									<div
										ref={review}
										id='Review'
										onClick={(e) => handleNav(e.currentTarget.id)}
										className={Styles.topicTittle}>
										<AlignVerticalBottomIcon />
										<div className={Styles.text}>Quiz</div>
									</div>
									<div
										ref={questions}
										id='Questions'
										onClick={(e) => handleNav(e.currentTarget.id)}
										className={Styles.topicTittle}>
										<QuestionMarkIcon />
										<div className={Styles.text}>Questions</div>
									</div>
								</div>
								<div className={Styles.TopicHeaderNotes}>Exams</div>
								<div className={Styles.containerBody}>
									<div
										ref={subjectExam}
										id='SubjectsExam'
										onClick={(e) => handleNav(e.currentTarget.id)}
										className={Styles.topicTittle}>
										<Books />
										<div className={Styles.text}>Subjects</div>
									</div>
									<div
										ref={formExam}
										id='FormsExam'
										onClick={(e) => handleNav(e.currentTarget.id)}
										className={Styles.topicTittle}>
										<SchoolIcon />
										<div className={Styles.text}>Forms</div>
									</div>
									<div
										ref={examType}
										id='ExamType'
										onClick={(e) => handleNav(e.currentTarget.id)}
										className={Styles.topicTittle}>
										<NotesIcon />
										<div className={Styles.text}>Exam Types</div>
									</div>
									<div
										ref={exam}
										id='Exam'
										onClick={(e) => handleNav(e.currentTarget.id)}
										className={Styles.topicTittle}>
										<SummarizeIcon />
										<div className={Styles.text}>Exams</div>
									</div>
									<div
										ref={examDownloads}
										id='ExamDownloads'
										onClick={(e) => handleNav(e.currentTarget.id)}
										className={Styles.topicTittle}>
										<Downloads size={25} />
										<div className={Styles.text}>Downloadables</div>
									</div>
								</div>
								<div className={Styles.TopicHeaderNotes}>Library</div>
								<div className={Styles.containerBody}>
									<div
										ref={subjectReference}
										id='SubjectReference'
										onClick={(e) => handleNav(e.currentTarget.id)}
										className={Styles.topicTittle}>
										<Books />
										<div className={Styles.text}>Subjects</div>
									</div>
									<div
										ref={formReference}
										id='FormReference'
										onClick={(e) => handleNav(e.currentTarget.id)}
										className={Styles.topicTittle}>
										<SchoolIcon />
										<div className={Styles.text}>Forms</div>
									</div>
									<div
										ref={reference}
										id='Reference'
										onClick={(e) => {
											handleNav(`Reference`);
										}}
										className={Styles.topicTittle}>
										<NotesIcon />
										<div className={Styles.text}>Reference</div>
									</div>
								</div>
								{userfound.isSuperUser && (
									<>
										<div className={Styles.TopicHeaderNotes}>Users</div>
										<div className={Styles.containerBody}>
											<div
												ref={user}
												id={`User`}
												onClick={(e) => handleNav(`User`)}
												className={Styles.topicTittle}>
												<FaUsers size={23} />
												<div className={Styles.text}>User</div>
											</div>
											<div
												ref={admin}
												id={`Admin`}
												onClick={(e) => handleNav(`Admin`)}
												className={Styles.topicTittle}>
												<FaUserSecret size={23} />
												<div className={Styles.text}>Admins</div>
											</div>
											<div
												ref={order}
												id={`Order`}
												onClick={(e) => handleNav(`Order`)}
												className={Styles.topicTittle}>
												<NotesIcon />
												<div className={Styles.text}>Orders</div>
											</div>
										</div>
									</>
								)}
							</div>
						</div>
					</div>
					{/* //!start of default desplay */}
					<div className={Styles.rightInnercontainerBody}>
						<div className={Styles.mobile}>
							<Drawer
								textHeader={'Admin Dashboard'}
								active={active}
								handleClick={handleNav}
								userData={userfound}
							/>
						</div>

						{loading && (
							<div className={Styles.loading}>
								<Loader />
							</div>
						)}
						{!loading && (
							<>
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
													Subjects In Quiz Management
												</div>
												<Link passHref href='/Admin/Review/Create/Subject'>
													<div className={Styles.subjectHeaderButton}>
														Create Subject
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
								{/* //! start of downloads */}
								{navValue == 'Downloads' && (
									<div className={Styles.rightInnercontainerBody}>
										<div className={Styles.subject}>
											<div className={Styles.subjectHeader}>
												<div className={Styles.subjectHeaderText}>
													Downloadables In Notes Management
												</div>
												<Link passHref href='/Admin/Notes/Create/Downloadable'>
													<div className={Styles.subjectHeaderButton}>
														Create Downloadable
													</div>
												</Link>
											</div>
											<div className={Styles.selectDivTopic}>
												<SelectMiu
													displayLabel='Select Subject'
													show={true}
													forms={selectOption}
													handlechange={handleSelectedDownloadableSubject}
													value={downloadableDetails.subjectId}
												/>
												<SelectMiu
													displayLabel='Select Form'
													show={true}
													forms={selectOptionForms}
													handlechange={handleSelectedDownloadableForm}
													value={downloadableDetails.formId}
												/>
											</div>
											<div
												onClick={retriaveDownloadable}
												className={Styles.subjectHeaderButton}>
												Retrieve Downloadables
											</div>
											<div className={Styles.subjectBody}>
												{activateDownloadable &&
													downloadable.map((item: notesDownloadable) => (
														<CardBox
															handleUpdate={handleUpdateNotesDownloadable}
															link={'/Admin/Notes/Edit/Downloadable/' + item.id}
															label={`${truncate(item.name)} [${customTruncate(
																item.fileExtension.toUpperCase(),
																3
															)}]`}
															published={item.published}
															id={item.id}
															key={item.id}
														/>
													))}
											</div>
										</div>
									</div>
								)}
								{/* //! end of downloads */}
								{/* //! END OF SubjectsReview DISPLAY ONLY */}
								{/* //* START OF TopicsReview DISPLAY ONLY */}
								{navValue == 'TopicsReview' && (
									<div className={Styles.rightInnercontainerBody}>
										<div className={Styles.subject}>
											<div className={Styles.subjectHeader}>
												<div className={Styles.subjectHeaderText}>
													Topics In Quiz Management
												</div>
												<Link passHref href='/Admin/Review/Create/Topic'>
													<div className={Styles.subjectHeaderButton}>
														Create Topic
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
													Forms In Quiz Management
												</div>
												<Link passHref href='/Admin/Review/Create/Form'>
													<div className={Styles.subjectHeaderButton}>
														Create Form
													</div>
												</Link>
											</div>
											<div className={Styles.subjectBody}>
												{formsReview.map(
													(form: { id: number; formName: string }) => (
														<CardBox
															handleUpdate={handleUpdateSubject}
															link={'/Admin/Review/Edit/Form/' + form.id}
															label={form.formName}
															id={form.id}
															key={form.id}
															published={''}
														/>
													)
												)}
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
													Quiz Management
												</div>
												<Link passHref href='/Admin/Review/Create/Review'>
													<div className={Styles.subjectHeaderButton}>
														Create Quiz
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
												Retrieve Quiz
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
													<div className={Styles.subjectHeaderButton}>
														Create Question
													</div>
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
														Create Subject
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
														Create Form
													</div>
												</Link>
											</div>
											<div className={Styles.subjectBody}>
												{formsExam.map(
													(form: { id: number; formName: string }) => (
														<CardBox
															handleUpdate={handleUpdateSubjectExam}
															link={'/Admin/Exam/Edit/Form/' + form.id}
															label={form.formName}
															id={form.id}
															key={form.id}
															published={''}
														/>
													)
												)}
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
													Exam Types Management
												</div>
												<Link passHref href='/Admin/Exam/Create/ExamType'>
													<div className={Styles.subjectHeaderButton}>
														Create Exam Type
													</div>
												</Link>
											</div>
											<div className={Styles.selectDivTopic}>
												<SelectMiu
													displayLabel='Select Subject'
													show={true}
													forms={selectOptionExam}
													handlechange={handleSelectedTopicSubjectExam}
													value={topicDetailsExam.subjectId}
												/>
												<SelectMiu
													displayLabel='Select Form'
													show={true}
													forms={selectOptionFormsExam}
													handlechange={handleSelectedTopicFormExam}
													value={topicDetailsExam.formId}
												/>
											</div>
											<div
												onClick={retriaveTopicsDataExamType}
												className={Styles.subjectHeaderButton}>
												Retrieve Exam Type
											</div>
											<div className={Styles.subjectBody}>
												{activateExamType &&
													examTypeList.map(
														(examType: {
															name: string;
															id: number;
															published: boolean;
														}) => (
															<CardBox
																handleUpdate={handleUpdateExamType}
																link={
																	'/Admin/Exam/Edit/examType/' + examType.id
																}
																label={examType.name}
																published={examType.published}
																id={examType.id}
																key={examType.id}
															/>
														)
													)}
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
													Exam Management
												</div>
												<Link passHref href='/Admin/Exam/Create/Exam'>
													<div className={Styles.subjectHeaderButton}>
														Create Exam
													</div>
												</Link>
											</div>
											<div className={Styles.selectDivTopic}>
												<SelectMiu
													displayLabel='Select Subject'
													show={true}
													forms={selectOptionExam}
													handlechange={handleSelectedExamSubject}
													value={DetailsExam.subjectId}
												/>
												<SelectMiu
													displayLabel='Select Form'
													show={true}
													forms={selectOptionFormsExam}
													handlechange={handleSelectedExamForm}
													value={DetailsExam.formId}
												/>
												{activateExam && (
													<SelectMiu
														displayLabel='Select Exam Category'
														show={true}
														forms={examListSelect}
														handlechange={handleSelectedExam}
														value={DetailsExam.examTypeId}
													/>
												)}
											</div>
											<div
												onClick={retriaveExamDataNow}
												className={Styles.subjectHeaderButton}>
												Retrieve Exams
											</div>
											<div className={Styles.subjectBody}>
												{activateExamDisplay &&
													examData.map((exam: exam) => (
														<CardBox
															handleUpdate={handleUpdatePublishExam}
															link={`/Admin/Exam/Edit/Exam/${exam.id}`}
															label={`${truncate(exam.description)}  ${
																exam.year
															}${exam.hasAnswers ? `  [SOLVED]` : ''}`}
															published={exam.published}
															id={exam.id}
															key={exam.id}
														/>
													))}
											</div>
										</div>
									</div>
								)}
								{/* //! END OF EXAM DISPLAY ONLY */}
								{/* //! start of downloads */}
								{navValue == 'ExamDownloads' && (
									<div className={Styles.rightInnercontainerBody}>
										<div className={Styles.subject}>
											<div className={Styles.subjectHeader}>
												<div className={Styles.subjectHeaderText}>
													Downloadables In Exam Management
												</div>
												<Link passHref href='/Admin/Exam/Create/Downloadable'>
													<div className={Styles.subjectHeaderButton}>
														Create Downloadable
													</div>
												</Link>
											</div>
											<div className={Styles.selectDivTopic}>
												<SelectMiu
													displayLabel='Select Subject'
													show={true}
													forms={selectOptionExam}
													handlechange={handleSelectedExamListSubject}
													value={examListDetails.subjectId}
												/>
												<SelectMiu
													displayLabel='Select Form'
													show={true}
													forms={selectOptionFormsExam}
													handlechange={handleSelectedExamListForm}
													value={examListDetails.formId}
												/>
												{activateExamCategory && (
													<SelectMiu
														displayLabel='Select Exam Category'
														show={true}
														forms={examListSelectCategory}
														handlechange={handleSelectedExamList}
														value={examListDetails.examTypeId}
													/>
												)}
												{activateExamDisplayCategory && (
													<SelectMiu
														displayLabel='Select Exam'
														show={true}
														forms={examListSelectList}
														handlechange={handleSelectedExamForDownload}
														value={examListDetails.examId}
													/>
												)}
											</div>
											<div
												onClick={retriaveExamDownloadableDataNow}
												className={Styles.subjectHeaderButton}>
												Retrieve Downloadable
											</div>
											<div className={Styles.subjectBody}>
												{activateExamDisplayDownloadable &&
													examDownloadable.map((exam: examDownloadable) => (
														<CardBox
															handleUpdate={handleUpdateExamDownloadable}
															link={'/Admin/Exam/Edit/Downloadable/' + exam.id}
															label={`${truncate(exam.name)} [${customTruncate(
																exam.fileExtension.toUpperCase(),
																3
															)}]`}
															published={exam.published}
															id={exam.id}
															key={exam.id}
														/>
													))}
											</div>
										</div>
									</div>
								)}
								{/* //! end of downloads */}
								{/* //!start of subject Reference desplay */}
								{navValue == 'SubjectReference' && (
									<div className={Styles.rightInnercontainerBody}>
										<div className={Styles.subject}>
											<div className={Styles.subjectHeader}>
												<div className={Styles.subjectHeaderText}>
													Subjects In Library Management
												</div>
												<Link passHref href='/Admin/Reference/Create/Subject'>
													<div className={Styles.subjectHeaderButton}>
														Create Subject
													</div>
												</Link>
											</div>
											<div className={Styles.subjectBody}>
												{activateSubjectReferenceList &&
													subjectReferenceList.map(
														(subject: {
															subjectName: string;
															id: number;
															published: boolean;
														}) => (
															<CardBox
																handleUpdate={handleUpdateSubjectReference}
																link={
																	'/Admin/Reference/Edit/Subject/' + subject.id
																}
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
								{/* //! END OF subject Reference DISPLAY ONLY */}
								{/* //!start of form reference desplay */}
								{navValue == 'FormReference' && (
									<div className={Styles.rightInnercontainerBody}>
										<div className={Styles.subject}>
											<div className={Styles.subjectHeader}>
												<div className={Styles.subjectHeaderText}>
													Forms In Library Management
												</div>
												<Link passHref href='/Admin/Reference/Create/Form'>
													<div className={Styles.subjectHeaderButton}>
														Create Form
													</div>
												</Link>
											</div>
											<div className={Styles.subjectBody}>
												{activateFormsReference &&
													formsReference.map(
														(form: { id: number; formName: string }) => (
															<CardBox
																handleUpdate={handleUpdateSubjectExam}
																link={'/Admin/Reference/Edit/Form/' + form.id}
																label={form.formName}
																id={form.id}
																key={form.id}
																published={''}
															/>
														)
													)}
											</div>
										</div>
									</div>
								)}
								{/* //! END OF form reference DISPLAY ONLY */}
								{/* //!start of reference desplay */}
								{navValue == 'Reference' && (
									<div className={Styles.rightInnercontainerBody}>
										<div className={Styles.subject}>
											<div className={Styles.subjectHeader}>
												<div className={Styles.subjectHeaderText}>
													Reference Management
												</div>
												<Link passHref href='/Admin/Reference/Create/Reference'>
													<div className={Styles.subjectHeaderButton}>
														Create Reference
													</div>
												</Link>
											</div>
											<div className={Styles.selectDivTopic}>
												<SelectMiu
													displayLabel='Select Subject'
													show={true}
													forms={selectOptionReference}
													handlechange={handleSelectedSubjectReference}
													value={detailsReference.subjectId}
												/>
												<SelectMiu
													displayLabel='Select Form'
													show={true}
													forms={selectOptionFormsReference}
													handlechange={handleSelectedTopicFormReference}
													value={detailsReference.formId}
												/>
											</div>
											<div
												onClick={retriaveTopicsDataReference}
												className={Styles.subjectHeaderButton}>
												Retrieve Reference
											</div>
											<div className={Styles.subjectBody}>
												{activateReference &&
													referenceList.map((ref: reference) => (
														<CardBox
															handleUpdate={handleUpdateReference}
															link={'/Admin/Reference/Edit/Reference/' + ref.id}
															label={`${truncate(ref.name)}  ${
																ref.isPdf ? `  [PDF]` : ''
															}`}
															published={ref.published}
															id={ref.id}
															key={ref.id}
														/>
													))}
											</div>
										</div>
									</div>
								)}
								{/* //! END OF reference DISPLAY ONLY */}
								{/* //* this below is a fragment to loading.. */}
								{navValue == `User` && (
									<div className={Styles.rightInnercontainerBody}>
										<div className={Styles.subject}>
											<div className={Styles.subjectHeader}>
												<div className={Styles.subjectHeaderText}>
													User Management
												</div>
											</div>
											<div className={Styles.selectDivTopic}>
												<InputTextMui
													label='Enter User Name'
													content={userDetail.value}
													name='userDetail'
													handleChange={handleTextInput}
												/>
											</div>
											<div
												onClick={retriveUser}
												className={Styles.subjectHeaderButton}>
												Retrieve User
											</div>
											<div className={Styles.subjectBody}>
												{activateUserSearch &&
													userSearchData.map(
														(user: {
															id: number;
															username: string;
															name: string;
														}) => (
															<CardBox
																handleUpdate={handleUpdateSubjectExam}
																link={'/Admin/User/' + user.id}
																label={customTruncate(
																	`${user.name} as ${user.username}`,
																	24
																)}
																id={user.id}
																key={user.id}
																published={''}
															/>
														)
													)}
											</div>
										</div>
									</div>
								)}
								{/* //! END OF form reference DISPLAY ONLY */}
								{/* //* this below is a fragment to loading.. */}
								{navValue == `Admin` && (
									<div className={Styles.rightInnercontainerBody}>
										<div className={Styles.subject}>
											<div className={Styles.subjectHeader}>
												<div className={Styles.subjectHeaderText}>
													Admins Management
												</div>
											</div>
											<div className={Styles.subjectBody}>
												{adminsList.map(
													(user: {
														id: number;
														username: string;
														name: string;
													}) => (
														<CardBox
															handleUpdate={handleUpdateSubjectExam}
															link={'/Admin/User/' + user.id}
															label={customTruncate(
																`${user.name} as ${user.username}`,
																24
															)}
															id={user.id}
															key={user.id}
															published={''}
														/>
													)
												)}
											</div>
										</div>
									</div>
								)}
								{/* //! END OF form reference DISPLAY ONLY */}
								{navValue == `Order` && (
									<div className={Styles.rightInnercontainerBody}>
										<div className={Styles.subject}>
											<div className={Styles.subjectHeader}>
												<div className={Styles.subjectHeaderText}>
													{orderList.length +
														` ${
															orderList.length > 1 ? 'Orders' : 'Order'
														} List`}
												</div>
											</div>
											<div className={Styles.subjectBody}>
												{orderList.map(
													(
														order: {
															id: number;
															orderNumber: string;
															description: string;
															status: boolean;
															createdAt: Date;
														},
														index: number
													) => (
														<CardBoxView
															link={'/Admin/User/Order/' + order.id}
															label={customTruncate(
																`${index + 1}. Order ${order.orderNumber}`,
																24
															)}
															id={order.id}
															key={order.id}
															published={order.status}
															time={timeAgo(order.createdAt)}
														/>
													)
												)}
											</div>
										</div>
									</div>
								)}
							</>
						)}
					</div>
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
