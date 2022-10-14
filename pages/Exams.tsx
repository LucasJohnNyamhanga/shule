import type { NextPage, InferGetStaticPropsType } from "next";
import Hero from "../components/layout/Hero";
import { type } from "os";
import Study from "../components/layout/Study";
import { prisma } from "../db/prisma";
import type { GetStaticProps } from "next";
import { useContext, useEffect } from "react";
import { NavContext } from "../components/context/StateContext";
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
  const subjectsFromServer = await prisma.subjectExams.findMany({
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

  let majungu = [1, 2, 3];

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

const Exams: NextPage = ({
  subjects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { navActive, setNavActive } = useContext(NavContext);

  useEffect(() => {
    setNavActive("Exams");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navActive]);

  return (
    <>
      <Head>
        <title>
          Past Exams For O level and Advances level subject with answers from
          schools across the country. - Download Now
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={`Get answered and unanswered past examinations from all schools accross all regions. To get you ready and well prepared for your next exam.`}
        />
        {/* //!add keywords */}
        <meta
          name="keywords"
          content={`Past Paper Examinations, Form One, Form Two, Form Three, Form Four, Form Five, Form Six, Biology, Book Keeping, Chemistry, Civics, Commerce, English, History, Information And Computer Studies, Kiswahili, Literature, Mathematics, Physics`}
        />
        <meta
          property="og:description"
          content="Notes, Form One, Form Two, Form Three, Form Four, Form Five, Form Six, Biology, Book Keeping, Chemistry, Civics, Commerce, English, History, Information And Computer Studies, Kiswahili, Literature, Mathematics, Physics"
        />
        <meta property="og:image" content="/favicon.ico" />
      </Head>
      <Hero
        image={"/darasaplus.gif"}
        header={`All past exams from everywhere.`}
        explanation={`Get answered and unanswered past examinations from all schools accross all regions. To get you ready and well prepared for your next exam.`}
      />
      <Study subjects={subjects} link={`Exams`} focus={`Let's Examinate`} />
    </>
  );
};

export default Exams;
