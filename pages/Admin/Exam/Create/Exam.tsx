import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { examType, form, subject, topic } from "@prisma/client";
import { prisma } from "../../../../db/prisma";
import Styles from "../../../../styles/notesMaker.module.scss";
import SelectMiu from "../../../../components/tools/SelectMui";
import toast, { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
import axios from "axios";
import { NavContext } from "../../../../components/context/StateContext";
import InputTextMui from "../../../../components/tools/InputTextMui";

//load when browser kicks in, on page load
const CkEditor = dynamic(() => import("../../../../components/tools/Ck"), {
  ssr: false,
});

import { getSession } from "next-auth/react";
import LoaderWait from "../../../../components/tools/loaderWait";
export const getServerSideProps: GetServerSideProps = async (context) => {
  const session = await getSession(context);
  const url = process.env.MAIN_URL;
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
        destination: "/",
        permanent: false,
      },
    };
  }

  const formsFromServer: userData = await prisma.formExams.findMany({
    select: {
      id: true,
      formName: true,
    },
  });
  const forms = JSON.parse(JSON.stringify(formsFromServer));

  const subjectsFromServer = await prisma.subjectExams.findMany({
    select: {
      id: true,
      subjectName: true,
    },
  });
  const subjects = JSON.parse(JSON.stringify(subjectsFromServer));

  const examTypeFromServer = await prisma.examType.findMany({
    select: {
      id: true,
      name: true,
    },
  });
  const examType = JSON.parse(JSON.stringify(examTypeFromServer));

  await prisma.$disconnect();
  return {
    props: {
      forms,
      subjects,
      examType,
      userfound,
      url,
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

const Notes = ({
  forms,
  subjects,
  examType,
  userfound,
  url,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { navActive, setNavActive } = useContext(NavContext);

  const [formOptions, setFormOptions] = useState<formData>([]);
  const [subjectOptions, setSubjectOptions] = useState<formData>([]);
  const [topicOptions, setTopicOptions] = useState<formData>([]);
  const [change, setChange] = useState(0);
  const [hideShow, setHideShow] = useState(false);
  const [examDetails, setExamDetails] = useState({
    formId: "",
    subjectId: "",
  });
  const [loading, setLoad] = useState(false);
  const [examSelectValue, setExamSelectValue] = useState({
    examTypeId: "",
    exam: "",
    description: "",
    year: "",
    hasAnswers: "",
    userId: "",
  });

  const notify = (message: string) => toast(message);
  const notifySuccess = (message: string) => toast.success(message);
  const notifyError = (message: string) => toast.error(message);

  useEffect(() => {
    setExamSelectValue({
      examTypeId: "",
      exam: "",
      description: "",
      year: "",
      hasAnswers: "",
      userId: userfound.id,
    });

    setNavActive("Admin");
    let subjectFromServer: formData = [];
    subjects.map((subject: subject) => {
      subjectFromServer.push({
        label: subject.subjectName,
        value: subject.id as unknown as string,
      });
    });
    setSubjectOptions(subjectFromServer);

    let formFromServer: formData = [];
    forms.map((form: form) => {
      formFromServer.push({
        label: form.formName,
        value: form.id as unknown as string,
      });
    });
    setFormOptions(formFromServer);

    if (examDetails.formId != "" && examDetails.subjectId != "") {
      retriaveExamTypeData();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [change, navActive]);

  let retriaveExamTypeData = () => {
    setHideShow(false);
    axios({
      method: "post",
      url: url + "/api/examType",
      data: examDetails,
    })
      .then(function (response) {
        const exams: [] = JSON.parse(JSON.stringify(response.data));
        // handle success
        if (exams.length > 0) {
          console.log(exams);
          let examFromServer: formData = [];
          exams.map((exam: examType) => {
            examFromServer.push({
              label: exam.name,
              value: exam.id as unknown as string,
            });
          });
          setTopicOptions(examFromServer);
          setHideShow(true);
          notifySuccess("Select topic to proceed..");
        } else {
          notifyError("No topics available for your selection.");
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        notifyError("Something went wrong.");
      })
      .then(function () {
        // always executed
      });
  };

  let handleContent = (data: string) => {
    let convertedData = data.replaceAll(
      `img`,
      `Image layout="fill" objectFit="cover"`
    );
    setExamSelectValue({ ...examSelectValue, exam: convertedData });
  };

  let handleSelectSubject = (value: string) => {
    setExamDetails({ ...examDetails, subjectId: value });
    setChange(change + 1);
  };

  let handleSelectForm = (value: string) => {
    setExamDetails({ ...examDetails, formId: value });
    setChange(change + 1);
  };

  let handleSelectTopic = (value: string) => {
    setExamSelectValue({ ...examSelectValue, examTypeId: value });
  };

  let handleCreateNotes = () => {
    if (examSelectValue.examTypeId != "" && examSelectValue.exam.length > 200) {
      sendToDatabase();
    } else {
      if (examSelectValue.exam.length < 200) {
        notifyError("Notes content should exceed 200 characters..");
      } else {
        notifyError("Fill in all fields including selections.");
      }
    }
  };

  function allnumeric(inputtxt: string) {
    var numbers = /^[0-9]+$/;
    if (inputtxt.match(numbers)) {
      return true;
    } else {
      return false;
    }
  }
  let today = new Date().getFullYear();
  let sendToDatabase = () => {
    //!CHANGE TO DATE PICKER..
    setLoad(true);
    let year = examSelectValue.year;
    let yearInNumber = parseInt(examSelectValue.year);
    if (allnumeric(year) && 1999 < yearInNumber && yearInNumber < today + 1) {
      axios({
        method: "post",
        url: url + "/api/addExam",
        data: examSelectValue,
      })
        .then(function (response) {
          // handle success

          let jibu: string = response.data.message;
          let type: string = response.data.type;

          if (type == "success") {
            notifySuccess(jibu);
            setExamSelectValue({
              examTypeId: "",
              exam: "",
              description: "",
              year: "",
              hasAnswers: "",
              userId: userfound.id,
            });

            setExamDetails({
              formId: "",
              subjectId: "",
            });
          } else {
            notifyError(jibu);
          }
          setLoad(false);
        })
        .catch(function (error) {
          // handle error
          console.log(error);
          notifyError("Error has occured, try later.");
          setLoad(false);
        })
        .then(function () {
          // always executed
        });
    } else {
      notifyError(`Wrong date. Should be a number between 2000 and ${today}`);
    }
  };

  let handleOnReady = () => {
    console.log("Editor is ready");
  };

  let handleTextInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    let value = event.currentTarget.value;
    setExamSelectValue({ ...examSelectValue, [name]: value });
  };

  const [trueAndFalse, setTrueAndFalse] = useState([
    {
      label: "True",
      value: "true",
    },
    {
      label: "False",
      value: "false",
    },
  ]);

  let handleAnswerValid = (value: string) => {
    setExamSelectValue({ ...examSelectValue, hasAnswers: value });
  };

  return (
    <div className={Styles.container}>
      <Toaster position="top-center" />
      <div className={Styles.innerContainer}>
        <div className={Styles.content}>
          <div className={Styles.mainContent}>
            <InputTextMui
              label={`Year Between 2000 - ${today}`}
              content={examSelectValue.year}
              name="year"
              handleChange={handleTextInput}
            />
            <InputTextMui
              label="Exam Description"
              content={examSelectValue.description}
              name="description"
              handleChange={handleTextInput}
            />
            <SelectMiu
              displayLabel="Exam has Answers"
              show={true}
              forms={trueAndFalse}
              handlechange={handleAnswerValid}
              value={examSelectValue.hasAnswers}
            />
            <CkEditor
              content={handleContent}
              dataCk={examSelectValue.exam}
              onReadyToStart={handleOnReady}
            />
          </div>
          <div className={Styles.controlContent}>
            <SelectMiu
              show={true}
              displayLabel="Select Subject"
              forms={subjectOptions}
              handlechange={handleSelectSubject}
              value={examDetails.subjectId}
            />
            <SelectMiu
              show={true}
              displayLabel="Select Form"
              forms={formOptions}
              handlechange={handleSelectForm}
              value={examDetails.formId}
            />
            {hideShow && (
              <SelectMiu
                show={true}
                displayLabel="Select Exam Type"
                forms={topicOptions}
                handlechange={handleSelectTopic}
                value={examSelectValue.examTypeId}
              />
            )}
          </div>
        </div>
        <div>
          {loading ? (
            <div className={Styles.imageSelect}>
              <LoaderWait sms={"Wait.."} />
            </div>
          ) : (
            <div onClick={handleCreateNotes} className={Styles.imageSelect}>
              Create Notes
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Notes;

//*Removing default search bar :)
Notes.getLayout = function PageLayout(page: ReactNode) {
  return <>{page}</>;
};
