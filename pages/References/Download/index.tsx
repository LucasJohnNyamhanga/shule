import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { prisma } from "../../../db/prisma";
import React, { useContext, useEffect, useState } from "react";
import Styles from "../../../styles/notesDisplay.module.scss";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import Head from "next/head";
import { NavContext } from "../../../components/context/StateContext";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import FileSaver from "file-saver";
import axios from "axios";
import { getSession } from "next-auth/react";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { resolvedUrl } = context;
  const session = await getSession(context);
  if (!session) {
    return {
      redirect: {
        destination: `/Auth/SignIn?callbackUr=${resolvedUrl}`,
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
      username: true,
      name: true,
      vifurushi: {
        select: {
          name: true,
          value: true,
        },
      },
      purchase: {
        select: {
          name: true,
          value: true,
        },
      },
    },
  });
  const userfound = await JSON.parse(JSON.stringify(userFromServer));
  // const searchText = context.query.find!.toString();
  const id = context.query.id!.toString();
  const Id = parseInt(String(id));
  // ...
  const examServer = await prisma.reference.findUnique({
    where: {
      id: Id,
    },
    select: {
      name: true,
      data: true,
      description: true,
      isPdf: true,
      subjectReference: {
        select: {
          subjectName: true,
        },
      },
    },
  });

  const downloads = JSON.parse(JSON.stringify(examServer));

  return {
    props: {
      downloads,
      userfound,
    },
  };
};

const Index = ({
  downloads,
  userfound,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const notify = (message: string) => toast(message);
  const notifySuccess = (message: string) => toast.success(message);
  const notifyError = (message: string) => toast.error(message);
  const { navActive, setNavActive } = useContext(NavContext);
  const { push, asPath } = useRouter();

  useEffect(() => {
    setNavActive("References");
  }, [navActive]);

  let handleDownload = (link: string) => {
    checkUser(link);
  };

  let checkUser = async (link: string) => {
    userfound.vifurushi.find(
      ({ name, value }: { name: string; value: number }) => {
        if (name === "booksDownload") {
          if (value > 0) {
            FileSaver.saveAs(link, link.replace(/(.*)\//g, ""));

            //!call decrement code
            decrementData({ name: "booksDownload", id: userfound.id });
          } else {
            push(`/Pricing?callbackUrl=${asPath}`);
          }
        }
      }
    );
  };

  let decrementData = (databaseData: { name: string; id: string }) => {
    axios({
      method: "post",
      url: "/api/updateKifurushiUse",
      data: databaseData,
    })
      .then(function (response) {
        // handle success

        if (response.data.type == "success") {
          notifySuccess(response.data.message);
        } else {
          notifyError(response.data.message);
        }
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  //!mambo yanaanza

  return (
    <div className={Styles.container}>
      <Toaster position="top-center" />
      <Head>
        <title>{`${downloads.subjectReference.subjectName} Library Download`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={`${downloads.subjectReference.subjectName} ${downloads.subjectReference.subjectName} Notes Download`}
        />
        <meta
          name="keywords"
          content={`${downloads.subjectReference.subjectName} ${downloads.subjectReference.subjectName} Notes Download`}
        />
      </Head>
      <div className={Styles.innerContainer}>
        <div className={Styles.rightInnercontainerBody}>
          <div className={Styles.BodyHeader}>
            <div className={Styles.statusBar}>
              {downloads.subjectReference.subjectName}{" "}
              <ChevronRightOutlinedIcon /> {`Library`}{" "}
              <ChevronRightOutlinedIcon /> {`Downloads`}
            </div>
          </div>
          <div
            className={Styles.downloadCenterHeader}
          >{`Download Center For ${downloads.name}.`}</div>
          <div className={Styles.BodyContent}>
            <h3>Book Description</h3>
            <p>{downloads.description}</p>
            <div>
              {`Following ${downloads.length > 1 ? `Files  are` : `File is`}
							available for download.`}
            </div>
            <div>
              <div key={downloads.id} className={Styles.downloadCard}>
                <div className={Styles.child1}>
                  <span>Name:</span> {downloads.name}
                </div>
                <div className={Styles.child2}>
                  <span>Format:</span> {`PDF`}
                </div>

                <div
                  className={Styles.download}
                  onClick={() => {
                    handleDownload(downloads.data);
                  }}
                >
                  Download
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
