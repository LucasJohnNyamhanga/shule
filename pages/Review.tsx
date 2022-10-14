import type { NextPage, InferGetStaticPropsType } from "next";
import Hero from "../components/layout/Hero";
import { type } from "os";
import Study from "../components/layout/Study";
import { prisma } from "../db/prisma";
import type { GetStaticProps } from "next";
import { NavContext } from "../components/context/StateContext";
import { useContext, useEffect } from "react";
import Head from "next/head";

type userData = {
  id: number;
  subjectName: string;
  subjectDefinition: string | null;
  imageLocation: string | null;
  forms: {
    formName: String;
  }[];
}[];

export const getStaticProps: GetStaticProps = async () => {
  const subjectsFromServer: userData = await prisma.subjectReview.findMany({
    where: {
      published: true,
    },
    select: {
      id: true,
      subjectName: true,
      subjectDefinition: true,
      imageLocation: true,
      forms: {
        select: {
          formName: true,
        },
      },
    },
  });
  const subjects = JSON.parse(JSON.stringify(subjectsFromServer));

  // //* FUNCTION TO UPDATE
  // let update = async () => {
  //   for (let subject of subjects) {
  //     await prisma.subject.update({
  //       where: { id: subject.id },
  //       data: {
  //         forms: { set: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, ],},
  //       },
  //   })
  //   }

  //  }

  //    update();

  return {
    props: {
      subjects,
    },
    revalidate: 15,
  };
};

const Review: NextPage = ({
  subjects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { navActive, setNavActive } = useContext(NavContext);

  useEffect(() => {
    setNavActive("Review");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navActive]);

  return (
    <>
      <Head>
        <title>
          Questions and Answers for O level and A level Subjects - Collection of
          Quizzes with well prepared answers
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={`Test your self with questions prepared from national level examinations and get instant detailed answers. Best preparations get you the best results.`}
        />
        {/* //!add keywords */}
        <meta
          name="keywords"
          content={`Questions and Answers, Form One, Form Two, Form Three, Form Four, Form Five, Form Six, Biology, Book Keeping, Chemistry, Civics, Commerce, English, History, Information And Computer Studies, Kiswahili, Literature, Mathematics, Physics`}
        />
        <meta
          property="og:description"
          content="Questions and Answers, Form One, Form Two, Form Three, Form Four, Form Five, Form Six, Biology, Book Keeping, Chemistry, Civics, Commerce, English, History, Information And Computer Studies, Kiswahili, Literature, Mathematics, Physics"
        />
        <meta property="og:image" content="/favicon.ico" />
      </Head>
      <Hero
        image={"/darasaplus.gif"}
        header={`Excercise to get you ready.`}
        explanation={`Test your self with questions prepared from national level examinations and get instant detailed answers. Best preparations get you the best results.`}
      />
      <Study subjects={subjects} focus={`Let's Review`} link={"Review"} />
    </>
  );
};

export default Review;
