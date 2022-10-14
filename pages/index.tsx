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
  const subjectsFromServer: userData = await prisma.subject.findMany({
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
  //   let update = async () => {
  //     for (let subject of subjects) {
  //       await prisma.subject.update({
  //         where: { id: subject.id },
  //         data: {
  //           category: { set: [{ id: 1 }, { id: 2 }, ],},
  //         },
  //     })
  //     }

  //  }

  //    update();

  return {
    props: {
      subjects,
    },
    revalidate: 15,
  };
};

const Home: NextPage = ({
  subjects,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const { navActive, setNavActive } = useContext(NavContext);

  useEffect(() => {
    setNavActive("Notes");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navActive]);

  return (
    <>
      <Head>
        <title>
          Notes For O level and advance level all subjects - Download Now
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          key="desc"
          name="description"
          content={`Well written by the best teachers using language easy to
									understand. This is the perfect learning point for you, start
									by searching or go straight to subjects below.`}
        />
        {/* //!add keywords */}
        <meta
          name="keywords"
          content={`Well Prepared Notes, Form One, Form Two, Form Three, Form Four, Form Five, Form Six, Biology, Book Keeping, Chemistry, Civics, Commerce, English, History, Information And Computer Studies, Kiswahili, Literature, Mathematics, Physics`}
        />
        <meta
          property="og:description"
          content="Well Prepared Notes, Form One, Form Two, Form Three, Form Four, Form Five, Form Six, Biology, Book Keeping, Chemistry, Civics, Commerce, English, History, Information And Computer Studies, Kiswahili, Literature, Mathematics, Physics"
        />
        <meta property="og:image" content="/favicon.ico" />
      </Head>
      <Hero
        image={"/darasaplus.gif"}
        header={`Get the Best prepared notes.`}
        explanation={`Well written by the best teachers using language easy to
									understand. This is the perfect learning point for you, start
									by searching or go straight to subjects below.`}
      />
      <Study subjects={subjects} focus={`Let's study Notes`} link={"Notes"} />
    </>
  );
};

export default Home;
