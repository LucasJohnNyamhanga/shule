import Styles from "../../../../styles/orderDetail.module.scss";
import React, { ReactNode, useEffect, useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { prisma } from "../../../../db/prisma";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";
import { getSession } from "next-auth/react";
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
      isAdmin: true,
      id: true,
    },
  });
  const userfound = await JSON.parse(JSON.stringify(userFromServer));

  if (!userfound.isAdmin && !userfound.isSuperUser) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  let id = context.params?.id as string;
  let Id = parseInt(id);

  const orderFromServer = await prisma.order.findUnique({
    where: {
      id: Id,
    },

    select: {
      id: true,
      orderNumber: true,
      description: true,
      amountPaid: true,
      booksDownload: true,
      examAccess: true,
      examsSolvedDownload: true,
      examsUnsolvedDownload: true,
      notesDownload: true,
      quizExcercises: true,
      createdAt: true,
      status: true,
      userId: true,
    },
  });
  const order = await JSON.parse(JSON.stringify(orderFromServer));

  await prisma.$disconnect();
  return {
    props: {
      order,
      userfound,
    },
  };
};

const EditExam = ({
  order,
  userfound,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const notifySuccess = (message: string) => toast.success(message);
  const notifyError = (message: string) => toast.error(message);
  const [once, setOnce] = useState(true);
  const [paymentOk, setPaymentOk] = useState("");

  function timeAgo(time) {
    switch (typeof time) {
      case "number":
        break;
      case "string":
        time = +new Date(time);
        break;
      case "object":
        if (time.constructor === Date) time = time.getTime();
        break;
      default:
        time = +new Date();
    }
    var time_formats = [
      [60, "seconds", 1], // 60
      [120, "1 minute ago", "1 minute from now"], // 60*2
      [3600, "minutes", 60], // 60*60, 60
      [7200, "1 hour ago", "1 hour from now"], // 60*60*2
      [86400, "hours", 3600], // 60*60*24, 60*60
      [172800, "Yesterday", "Tomorrow"], // 60*60*24*2
      [604800, "days", 86400], // 60*60*24*7, 60*60*24
      [1209600, "Last week", "Next week"], // 60*60*24*7*4*2
      [2419200, "weeks", 604800], // 60*60*24*7*4, 60*60*24*7
      [4838400, "Last month", "Next month"], // 60*60*24*7*4*2
      [29030400, "months", 2419200], // 60*60*24*7*4*12, 60*60*24*7*4
      [58060800, "Last year", "Next year"], // 60*60*24*7*4*12*2
      [2903040000, "years", 29030400], // 60*60*24*7*4*12*100, 60*60*24*7*4*12
      [5806080000, "Last century", "Next century"], // 60*60*24*7*4*12*100*2
      [58060800000, "centuries", 2903040000], // 60*60*24*7*4*12*100*20, 60*60*24*7*4*12*100
    ];
    var seconds = (+new Date() - time) / 1000,
      token = "ago",
      list_choice = 1;

    if (seconds == 0) {
      return "Just now";
    }
    if (seconds < 0) {
      seconds = Math.abs(seconds);
      token = "from now";
      list_choice = 2;
    }
    var i = 0,
      format;
    while ((format = time_formats[i++]))
      if (seconds < format[0]) {
        if (typeof format[2] == "string") return format[list_choice];
        else
          return (
            Math.floor(seconds / format[2]) + " " + format[1] + " " + token
          );
      }
    return time;
  }

  const activatePackage = (
    booksDownload: number,
    examAccess: number,
    examsSolvedDownload: number,
    examsUnsolvedDownload: number,
    notesDownload: number,
    quizExcercises: number
  ) => {
    if (once) {
      setPaymentOk("Activating Order...");
      sendToDatabase({
        booksDownload,
        examAccess,
        examsSolvedDownload,
        examsUnsolvedDownload,
        notesDownload,
        quizExcercises,
      });
    } else {
      notifyError("This order is already active.");
    }
    setOnce(false);
  };

  let sendToDatabase = (databaseData: {}) => {
    let database = { ...databaseData, id: order.userId };
    axios({
      method: "post",
      url: "/api/updateKifurushi",
      data: database,
    })
      .then(function (response) {
        // handle success
        if (response.data.type == "success") {
          notifySuccess(response.data.message);
          orderDone();
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

  const orderDone = () => {
    let database = { id: order.id, status: false };
    axios({
      method: "post",
      url: "/api/updateOrder",
      data: database,
    })
      .then(function (response) {
        // handle success
        if (response.data.type == "success") {
          notifySuccess(response.data.message);
          setPaymentOk("Order Activated");
        } else {
          notifyError(response.data.message);
          setPaymentOk("Order Activation Failed");
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

  useEffect(() => {
    if (order.status) setPaymentOk("Order Active");
    setOnce(false);
  }, []);

  return (
    <div className={Styles.container}>
      <Toaster position="top-center" reverseOrder={false} />
      <div className={Styles.innerContainer}>
        <div className={Styles.orderNumber}>
          Order Number {order.orderNumber}
        </div>
        <div className={Styles.orderDescription}>{order.description}.</div>
        <div className={Styles.table}>
          <table>
            <caption>{`Order Content`}</caption>
            <thead>
              <tr>
                <th scope="col">Package Content</th>
                <th scope="col">Quantity</th>
              </tr>
            </thead>
            <tbody>
              {order.notesDownload != 0 && (
                <tr>
                  <td>{`Notes Download`}</td>
                  <td>{`${order.notesDownload} `}</td>
                </tr>
              )}
              {order.quizExcercises != 0 && (
                <tr>
                  <td>{`Quiz Excercises`}</td>
                  <td>{`${order.quizExcercises} `}</td>
                </tr>
              )}
              {order.examsUnsolvedDownload != 0 && (
                <tr>
                  <td>{`Unsolved Exam Download`}</td>
                  <td>{`${order.examsUnsolvedDownload} `}</td>
                </tr>
              )}
              {order.examsSolvedDownload != 0 && (
                <tr>
                  <td>{`Solved Exam Download`}</td>
                  <td>{`${order.examsSolvedDownload} `}</td>
                </tr>
              )}
              {order.examAccess != 0 && (
                <tr>
                  <td>{`Solved Exam Access`}</td>
                  <td>{`${order.examAccess} `}</td>
                </tr>
              )}
              {order.booksDownload != 0 && (
                <tr>
                  <td>{`Books Download`}</td>
                  <td>{`${order.booksDownload} `}</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <div className={`toc ${Styles.planCntainerToc}`}>
          <div className={Styles.creation}>
            Order creation:{" "}
            <span className={Styles.text}>{`${timeAgo(order.createdAt)}`}</span>
          </div>
        </div>
        {once ? (
          <div
            className={Styles.Button}
            onClick={() =>
              activatePackage(
                order.booksDownload,
                order.examAccess,
                order.examsSolvedDownload,
                order.examsUnsolvedDownload,
                order.notesDownload,
                order.quizExcercises
              )
            }
          >
            Confirm Payment
          </div>
        ) : (
          <div className={Styles.Button}>{paymentOk}</div>
        )}
      </div>
    </div>
  );
};

export default EditExam;

//*Removing default search bar :)
EditExam.getLayout = function PageLayout(page: ReactNode) {
  return <>{page}</>;
};
