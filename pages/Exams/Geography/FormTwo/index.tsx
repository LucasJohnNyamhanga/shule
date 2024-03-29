import React, { ReactNode, useContext, useEffect, useState } from "react";
import Styles from "../../../../styles/reviewDisplay.module.scss";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { type } from "os";
import {
  exam,
  examType,
  formExams,
  note,
  review,
  topic,
  topicReview,
} from "@prisma/client";
import { prisma } from "../../../../db/prisma";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import parse from "html-react-parser";
import Head from "next/head";
import Link from "next/link";
import Error from "next/error";
import Drawer from "../../../../components/tools/DrawerExam";
import { NavContext } from "../../../../components/context/StateContext";
import Modal from "../../../../components/tools/modal";
import Table from "../../../../components/tools/Table";

const subjectLocator = "Geography";
const formLocator = "Form Two";
const subjectLocatorLink = "Geography";
const formLocatorLink = "FormTwo";

export const getStaticProps: GetStaticProps = async () => {
  const topicsFromServer = await prisma.examType.findMany({
    where: {
      exam: {
        some: {
          published: true,
        },
      },
      published: true,
      subjectExams: {
        subjectName: subjectLocator,
      },
      formExams: {
        formName: formLocator,
      },
    },
    select: {
      id: true,
      name: true,
      definition: true,
      formExams: {
        select: {
          formName: true,
        },
      },
      subjectExams: {
        select: {
          subjectName: true,
        },
      },
    },
  });
  const topics = JSON.parse(JSON.stringify(topicsFromServer));

  const noteFromServer = await prisma.examType.findMany({
    take: 1,
    where: {
      exam: {
        some: {
          published: true,
        },
      },

      subjectExams: {
        subjectName: subjectLocator,
      },
      formExams: {
        formName: formLocator,
      },
    },
    select: {
      id: true,
      formExams: {
        select: {
          formName: true,
        },
      },
      subjectExams: {
        select: {
          subjectName: true,
        },
      },
      name: true,
      definition: true,
      exam: {
        where: {
          published: true,
        },
        select: {
          id: true,
          description: true,
          year: true,
          hasAnswers: true,
        },
      },
    },
  });
  const note = JSON.parse(JSON.stringify(noteFromServer));

  return {
    props: {
      topics,
      note,
    },
    revalidate: 15,
  };
};

type tableKey = {
  keys: string[];
};

const Index = ({
  topics,
  note,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { navActive, setNavActive } = useContext(NavContext);

  const [keyInTable, setKeyInTable] = useState<tableKey>({
    keys: [],
  });

  useEffect(() => {
    setNavActive("Exams");
  }, [navActive]);

  if (topics.length < 1) {
    return (
      <div className={Styles.container}>
        <div className={Styles.innerContainer}>
          <div className={Styles.leftInnercontainerBody}></div>
          <div className={Styles.rightInnercontainerBody}>
            <h2>Examinations will soon be available.</h2>
          </div>
        </div>
      </div>
    );
  }

  useEffect(() => {
    setNavActive("Exams");

    let listKey: string[] = [];

    for (const exam of note[0].exam) {
      listKey = Object.keys(exam);
      break;
    }
    setKeyInTable({ keys: listKey });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navActive]);

  let truncateLimit = 12;
  function truncate(str: string) {
    return str.length > truncateLimit
      ? str.slice(0, truncateLimit) + "..."
      : str;
  }

  //!mambo yanaanza

  return (
    <div className={Styles.container}>
      <Head>
        <title>{note[0].topicName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={note[0].topicDefinition} />
        <meta name="keywords" content={note[0].topicName} />
      </Head>
      <div className={Styles.innerContainer}>
        <div className={Styles.leftInnercontainerBody}>
          <div className={Styles.sticky}>
            <div className={Styles.topicHeader}>Exam Category List</div>
            <div className={Styles.titleList}>
              {topics.map((topic: examType) => (
                <div key={topic.id}>
                  <Link
                    passHref
                    href={`/Exams/${subjectLocatorLink}/${formLocatorLink}/${topic.id}`}
                  >
                    <a>
                      <div
                        key={topic.id + 100}
                        className={
                          topic.id == note[0].id
                            ? `${Styles.topicTittle} ${Styles.Active}`
                            : Styles.topicTittle
                        }
                      >
                        {topic.name}
                      </div>
                    </a>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={Styles.rightInnercontainerBody}>
          <div className={Styles.mobile}>
            <Drawer
              textHeader={"Exam Category List"}
              topic={topics}
              active={note[0].id}
              link={"Exams"}
            />
          </div>
          <div className={Styles.BodyHeader}>
            <div className={Styles.statusBar}>
              {note[0].subjectExams.subjectName} <ChevronRightOutlinedIcon />{" "}
              {note[0].formExams.formName} <ChevronRightOutlinedIcon />{" "}
              {truncate(note[0].name)}
            </div>
          </div>
          <div className={Styles.BodyContent}>
            <div className={Styles.conteinerTable}>
              <Table
                header={keyInTable.keys}
                body={note[0].exam}
                form={formLocatorLink}
                subject={subjectLocatorLink}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;

// //*Removing default search bar :)
// Index.getLayout = function PageLayout(page:ReactNode) {
//   return (
//       <>
//           {page}
//       </>
//   )
// }
