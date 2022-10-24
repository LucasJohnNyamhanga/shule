import React, { useContext, useEffect, useState } from "react";
import Styles from "../../../../../styles/notesDisplay.module.scss";
import ChevronRightOutlinedIcon from "@mui/icons-material/ChevronRightOutlined";
import { prisma } from "../../../../../db/prisma";
import type { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";
import { NavContext } from "../../../../../components/context/StateContext";
import { notesDownloadable } from "@prisma/client";
import FileSaver from "file-saver";
import { useRouter } from "next/router";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const subjectLocator = "Civics";
const formLocator = "Form Four";
const subjectLocatorLink = "Civics";
const formLocatorLink = "FormFour";

export const getStaticProps: GetStaticProps = async () => {
  const topicsFromServer = await prisma.notesDownloadable.findMany({
    where: {
      published: true,
      subject: {
        subjectName: subjectLocator,
      },
      form: {
        formName: formLocator,
      },
    },
    select: {
      id: true,
      name: true,
      link: true,
      fileExtension: true,
    },
  });
  const downloads = JSON.parse(JSON.stringify(topicsFromServer));

  return {
    props: {
      downloads,
    },
    revalidate: 15,
  };
};

const Index = ({
  downloads,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const notify = (message: string) => toast(message);
  const notifySuccess = (message: string) => toast.success(message);
  const notifyError = (message: string) => toast.error(message);
  const { navActive, setNavActive, userData } = useContext(NavContext);
  const { push, asPath } = useRouter();
  const [salio, setSalio] = useState({
    notesDownload: 0,
    examsSolvedDownload: 0,
    examsUnsolvedDownload: 0,
    quizExcercises: 0,
    booksDownload: 0,
  });

  useEffect(() => {
    setNavActive("Notes");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navActive]);

  let handleDownload = (link: string) => {
    if (userData.id != "") {
      checkUser(link);
    } else {
      push(`/Auth/SignIn?callbackUrl=${asPath}`);
    }
  };

  let checkUser = async (link: string) => {
    let data = { username: userData.userName };
    axios
      .post("http://localhost:3000/api/getUser", data)
      .then(function (response) {
        //responce
        const userData = JSON.parse(JSON.stringify(response.data));

        userData.vifurushi.find(
          ({ name, value }: { name: string; value: number }) => {
            if (name === "notesDownload") {
              if (value > 0) {
                FileSaver.saveAs(link, link.replace(/(.*)\//g, ""));

                //!call decrement code
                decrementData({ name: "notesDownload", id: userData.id });
              } else {
                push(`/Pricing?callbackUrl=${asPath}`);
              }
            }
          }
        );
      })
      .catch(function (error) {
        // handle error
        console.log("Something went wrong");
      });
  };

  let decrementData = (databaseData: { name: string; id: string }) => {
    axios({
      method: "post",
      url: "http://localhost:3000/api/updateKifurushiUse",
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
      <Toaster position="bottom-left" reverseOrder={false} />
      <Head>
        <title>{`${subjectLocator} ${formLocator} Notes Download`}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta
          name="description"
          content={`${subjectLocator} ${subjectLocator} Notes Download`}
        />
        <meta
          name="keywords"
          content={`${subjectLocator} ${subjectLocator} Notes Download`}
        />
      </Head>
      <div className={Styles.innerContainer}>
        <div className={Styles.rightInnercontainerBody}>
          <div className={Styles.BodyHeader}>
            <div className={Styles.statusBar}>
              {subjectLocator} <ChevronRightOutlinedIcon /> {formLocator}{" "}
              <ChevronRightOutlinedIcon /> {`Downloads`}
            </div>
          </div>
          <div
            className={Styles.downloadCenterHeader}
          >{`Download Center For ${subjectLocator} ${formLocator} Notes.`}</div>
          <div className={Styles.BodyContent}>
            <div>
              {`Following ${downloads.length > 1 ? `Files  are` : `File is`}
							available for download.`}
            </div>
            <div>
              {downloads.map((download: notesDownloadable) => (
                <div key={download.id} className={Styles.downloadCard}>
                  <div className={Styles.child1}>
                    <span>Name:</span> {download.name}
                  </div>
                  <div className={Styles.child2}>
                    <span>Format:</span> {download.fileExtension.toUpperCase()}
                  </div>

                  <div
                    className={Styles.download}
                    onClick={() => {
                      handleDownload(download.link);
                    }}
                  >
                    Download
                  </div>
                </div>
              ))}
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
