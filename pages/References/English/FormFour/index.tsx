import React, { useContext, useEffect } from "react";
import Styles from "../../../../styles/reviewDisplay.module.scss";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { prisma } from "../../../../db/prisma";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { NavContext } from "../../../../components/context/StateContext";
import Book from "../../../../components/tools/Book";

const subjectLocator = "English";
const formLocator = "Form Four";
const subjectLocatorLink = "English";
const formLocatorLink = "FormFour";

export const getStaticProps: GetStaticProps = async () => {
  const referenceFromServer = await prisma.reference.findMany({
    where: {
      published: true,
      subjectReference: {
        subjectName: subjectLocator,
      },
      formReference: {
        some: {
          formName: formLocator,
        },
      },
    },
    orderBy: {
      createdAt: "desc",
    },
    select: {
      id: true,
      formReference: {
        select: {
          formName: true,
        },
      },
      subjectReference: {
        select: {
          subjectName: true,
        },
      },
      name: true,
      description: true,
      isPdf: true,
    },
  });
  const reference = JSON.parse(JSON.stringify(referenceFromServer));

  return {
    props: {
      reference,
    },
    revalidate: 15,
  };
};

type tableKey = {
  keys: string[];
};

const Index = ({
  reference,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { navActive, setNavActive } = useContext(NavContext);

  useEffect(() => {
    setNavActive("References");

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navActive]);

  if (reference.length < 1) {
    return (
      <div className={Styles.container}>
        <div className={Styles.innerContainer}>
          <div className={Styles.rightInnercontainerBody}>
            <div className={Styles.BodyHeader}></div>
            <div className={Styles.BodyContent}>
              <div className={Styles.conteinerTable}>
                <h2>Contents will be published soon.</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  //!mambo yanaanza

  return (
    <div className={Styles.container}>
      <Head>
        <title>{reference[0].topicName}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={reference[0].topicDefinition} />
        <meta name="keywords" content={reference[0].topicName} />
      </Head>
      <div className={Styles.innerContainer}>
        <div className={Styles.rightInnercontainerBody}>
          <div className={Styles.BodyHeader}>
            <div className={Styles.statusBar}>
              {subjectLocator} <ChevronRightOutlinedIcon /> {formLocator}
            </div>
          </div>
          <div className={Styles.BodyContent}>
            <div className={Styles.conteinerTable}>
              <Book
                reference={reference}
                link={`/References/${subjectLocatorLink}/${formLocatorLink}`}
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
