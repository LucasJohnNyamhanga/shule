import { useRouter } from "next/router";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { form, subject, topic } from "@prisma/client";
import { prisma } from "../../../../../db/prisma";
import Styles from "../../../../../styles/notesMaker.module.scss";
import SelectMiu from "../../../../../components/tools/SelectMui";
import toast, { Toaster } from "react-hot-toast";
import dynamic from "next/dynamic";
import axios from "axios";
import { NavContext } from "../../../../../components/context/StateContext";

//load when browser kicks in, on page load
const CkEditor = dynamic(() => import("../../../../../components/tools/Ck"), {
  ssr: false,
});

import { getSession } from "next-auth/react";
import LoaderWait from "../../../../../components/tools/loaderWait";
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
  let id = context.params?.id as string;
  let Id = parseInt(id);

  const notesServer = await prisma.note.findUnique({
    where: {
      id: Id,
    },
    select: {
      id: true,
      topicId: true,
      formId: true,
      subjectId: true,
      content: true,
      published: true,
    },
  });

  const notesData = JSON.parse(JSON.stringify(notesServer));

  const formsFromServer = await prisma.form.findMany({
    select: {
      id: true,
      formName: true,
    },
  });
  const formsList = JSON.parse(JSON.stringify(formsFromServer));

  const subjectsFromServer = await prisma.subject.findMany({
    select: {
      id: true,
      subjectName: true,
    },
  });
  const subjects = JSON.parse(JSON.stringify(subjectsFromServer));
  await prisma.$disconnect();
  return {
    props: {
      notesData,
      formsList,
      subjects,
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

const EditNotes = ({
  notesData,
  formsList,
  subjects,
  userfound,
  url,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { navActive, setNavActive } = useContext(NavContext);

  useEffect(() => {
    setNavActive("Admin");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navActive]);
  const [loading, setLoad] = useState(false);
  const [formOptions, setFormOptions] = useState<formData>([]);
  const [subjectOptions, setSubjectOptions] = useState<formData>([]);
  const [topicOptions, setTopicOptions] = useState<formData>([]);
  const [change, setChange] = useState(0);
  const [hideShow, setHideShow] = useState(false);
  const [loadOnce, setLoadOnce] = useState(true);
  const [topicDetails, setTopicDetails] = useState({
    formId: "",
    subjectId: "",
  });

  const [topicSelectValue, setTopicSelectValue] = useState({
    formId: "",
    subjectId: "",
    topicId: "",
    content: "",
    id: "",
    userId: "",
  });

  useEffect(() => {
    if (loadOnce) {
      let subjectFromServer: formData = [];
      subjects.map((subject: subject) => {
        subjectFromServer.push({
          label: subject.subjectName,
          value: `${subject.id}`,
        });
      });
      setSubjectOptions(subjectFromServer);

      let formFromServer: formData = [];
      formsList.map((form: form) => {
        formFromServer.push({
          label: form.formName,
          value: `${form.id}`,
        });
      });
      setFormOptions(formFromServer);

      setTopicDetails({
        formId: notesData.formId,
        subjectId: notesData.subjectId,
      });

      setTopicSelectValue({
        formId: notesData.formId,
        subjectId: notesData.subjectId,
        topicId: notesData.topicId,
        content: notesData.content,
        id: notesData.id,
        userId: userfound.id,
      });

      setLoadOnce(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const notify = (message: string) => toast(message);
  const notifySuccess = (message: string) => toast.success(message);
  const notifyError = (message: string) => toast.error(message);
  const router = useRouter();

  //!delay redirect
  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  let delayRedirect = async () => {
    await new Promise((f) =>
      setTimeout(() => {
        router.back();
      }, 1000)
    );
  };

  useEffect(() => {
    retriaveTopicsData();
  }, [topicDetails]);

  let retriaveTopicsData = () => {
    setHideShow(false);
    console.log("form Id:" + topicDetails.formId);
    if (topicDetails.formId != "" && topicDetails.subjectId != "") {
      axios({
        method: "post",
        url: url + "/api/topics",
        data: topicDetails,
      })
        .then(function (response) {
          const topics: [] = JSON.parse(JSON.stringify(response.data));
          // handle success
          console.log(topics);
          if (topics.length > 0) {
            let topicFromServer: formData = [];
            topics.map((topic: topic) => {
              topicFromServer.push({
                label: topic.topicName,
                value: topic.id as unknown as string,
              });
            });
            setTopicOptions(topicFromServer);
            setHideShow(true);
            notifySuccess("Select topic to proceed..");
          } else {
            notifyError("No topics available for your selection.");
            setHideShow(false);
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
    }
  };

  let handleContent = (data: string) => {
    setTopicSelectValue({ ...topicSelectValue, content: data });
  };

  let handleSelectSubject = (value: string) => {
    setTopicDetails({ ...topicDetails, subjectId: value });
    setTopicSelectValue({ ...topicSelectValue, subjectId: value });
  };

  let handleSelectForm = (value: string) => {
    setTopicDetails({ ...topicDetails, formId: value });
    setTopicSelectValue({ ...topicSelectValue, formId: value });
  };

  let handleSelectTopic = (value: string) => {
    setTopicSelectValue({ ...topicSelectValue, topicId: value });
  };

  let handleCreateNotes = () => {
    if (
      topicSelectValue.formId != "" &&
      topicSelectValue.subjectId != "" &&
      topicSelectValue.topicId &&
      topicSelectValue.content.length > 200
    ) {
      sendToDatabase();
      setLoad(true);
    } else {
      if (topicSelectValue.content.length < 200) {
        notifyError("Notes content should exceed 200 characters..");
      } else {
        notifyError("Fill in all fields including selections.");
      }
    }
  };

  let sendToDatabase = () => {
    axios({
      method: "post",
      url: url + "/api/updateNotes",
      data: topicSelectValue,
    })
      .then(function (response) {
        // handle success
        // updateContent(`/Notes/Physics/FormOne/1`);
        // updateContent(`/Notes/Physics/FormOne`);
        let jibu: string = response.data.message;
        notifySuccess(jibu);
        setTopicSelectValue({
          formId: "",
          subjectId: "",
          topicId: "",
          content: "",
          id: "",
          userId: "",
        });
        setLoad(false);
        delayRedirect();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
        notifyError("Error has occured, try later.");
      })
      .then(function () {
        // always executed
      });
  };

  let updateContent = (path: string) => {
    const data = {
      secret: "X-ilZeBDa22ktzz24FDP4BB7NLzbTp",
      path,
    };
    axios({
      method: "post",
      url: url + "/api/revalidate",
      data,
    })
      .then(function (response) {})
      .catch(function (error) {
        // handle error
        console.log(error);
        notifyError("Validation Error has occured, try later.");
      })
      .then(function () {
        // always executed
      });
  };

  let handleOnReady = () => {
    console.log("Editor is ready");
  };

  return (
    <div className={Styles.container}>
      <Toaster position="top-center" />
      <div className={Styles.innerContainer}>
        <div className={Styles.content}>
          <div className={Styles.mainContent}>
            <CkEditor
              content={handleContent}
              dataCk={notesData.content}
              onReadyToStart={handleOnReady}
            />
          </div>
          <div className={Styles.controlContent}>
            <SelectMiu
              show={true}
              displayLabel="Select Subject"
              forms={subjectOptions}
              handlechange={handleSelectSubject}
              value={topicSelectValue.subjectId}
            />
            <SelectMiu
              show={true}
              displayLabel="Select Form"
              forms={formOptions}
              handlechange={handleSelectForm}
              value={topicSelectValue.formId}
            />
            {hideShow && (
              <SelectMiu
                show={true}
                displayLabel="Select Topic"
                forms={topicOptions}
                handlechange={handleSelectTopic}
                value={topicSelectValue.topicId}
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
              Update Notes
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default EditNotes;

//*Removing default search bar :)
EditNotes.getLayout = function PageLayout(page: ReactNode) {
  return <>{page}</>;
};
