import { useRouter } from "next/router";
import React, { ReactNode, useContext, useEffect, useState } from "react";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import { subjectReference } from "@prisma/client";
import Styles from "../../../../../styles/createNotes.module.scss";
import SelectMiu from "../../../../../components/tools/SelectMui";
import dynamic from "next/dynamic";
import axios from "axios";
import { NavContext } from "../../../../../components/context/StateContext";
import { prisma } from "../../../../../db/prisma";
import InputTextMui from "../../../../../components/tools/InputTextMui";
import Progress from "../../../../../components/tools/progressFileUpload";
//load when browser kicks in, on page load
const CkEditor = dynamic(() => import("../../../../../components/tools/Ck"), {
  ssr: false,
});

import FileUpload from "../../../../../components/tools/FileUpload";
import DisplayChip from "../../../../../components/tools/displayChip";
import SnackBar from "../../../../../components/tools/SnackBar";
import { getSession } from "next-auth/react";
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

  const referenceServer = await prisma.reference.findUnique({
    where: {
      id: Id,
    },
    select: {
      id: true,
      description: true,
      isPdf: true,
      subjectId: true,
      subjectReference: {
        select: {
          forms: true,
        },
      },
      data: true,
      formReference: {
        select: {
          formName: true,
          id: true,
        },
      },
      name: true,
    },
  });

  const reference = JSON.parse(JSON.stringify(referenceServer));

  const subjectsFromServer = await prisma.subjectReference.findMany({
    select: {
      id: true,
      subjectName: true,
    },
  });
  const subjects = JSON.parse(JSON.stringify(subjectsFromServer));
  await prisma.$disconnect();
  return {
    props: {
      reference,
      subjects,
      userfound,
      url,
    },
  };
};

type dataTypeSelect = {
  id: string;
  label: string;
}[];

type formData = {
  label: string;
  value: string;
}[];

type templateType = {
  id: string;
  label: string;
};

type selectFormType = {
  value: string;
  label: string;
}[];

const Reference = ({
  reference,
  subjects,
  userfound,
  url,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const { navActive, setNavActive } = useContext(NavContext);

  const [selectOption, setSelectOption] = useState<dataTypeSelect>([]);
  const [subjectOptions, setSubjectOptions] = useState<formData>([]);
  const [open, setOpen] = useState(false);
  const [ToastMessage, setToastMessage] = useState("");
  const [image, setImage] = useState<string | Blob>("");
  const [clearData, setclearData] = useState(false);
  const [uploadData, setUploadData] = useState(0);
  const [showUpload, setShowUpload] = useState(false);
  const [activateForm, setActivateForm] = useState(false);
  const [isPDF, setIsPDF] = useState(false);
  const [referenceDetails, setReferenceDetails] = useState({
    name: "",
    description: "",
    data: "",
    isPdf: "",
    subjectId: "",
    formReference: "",
    id: "",
  });

  const [trueAndFalse, setTrueAndFalse] = useState([
    {
      label: `Yes, it's PDF.`,
      value: "True",
    },
    {
      label: `No, it's not a PDF.`,
      value: "False",
    },
  ]);

  let handleTextInput = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    name: string
  ) => {
    let value = event.currentTarget.value;
    setReferenceDetails({ ...referenceDetails, [name]: value });
  };

  let handleSelectSubject = (value: string) => {
    setReferenceDetails({ ...referenceDetails, subjectId: value });

    let options: selectFormType = [];
    for (const subject of subjects) {
      if (subject.id == value) {
        for (const form of subject.forms) {
          options.push({
            label: form.formName,
            value: form.id,
          });
        }
        break;
      }
    }
    setFormOption(options);

    if (options.length > 0) {
      setActivateForm(true);
    } else {
      setActivateForm(false);
      setToastMessage(`${value} has no forms option`);
      setOpen(true);
    }
  };

  const [formOption, setFormOption] = useState<selectFormType>([]);
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
    let subjectFromServer: formData = [];
    subjects.map((subject: subjectReference) => {
      subjectFromServer.push({
        label: subject.subjectName,
        value: subject.id as unknown as string,
      });
    });
    setSubjectOptions(subjectFromServer);

    let options: selectFormType = [];
    let value = reference.subjectId;
    for (const form of reference.subjectReference.forms) {
      options.push({
        label: form.formName,
        value: form.id,
      });
    }
    setFormOption(options);

    let templateData = [];
    for (const form of reference.formReference) {
      let template = {
        id: form.id,
        label: form.formName,
      };
      templateData.push(template);
    }
    setSelectOption(templateData);

    setReferenceDetails({
      name: reference.name,
      description: reference.description,
      data: reference.data,
      isPdf: reference.isPdf ? "True" : "False",
      subjectId: reference.subjectId,
      formReference: reference.formReference,
      id: reference.id,
    });
    setIsPDF(reference.isPdf);
    setActivateForm(true);

    setNavActive("Admin");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navActive]);

  let handleSelect = (value: string) => {
    console.log(value);
    let template: templateType = {
      id: "",
      label: "",
    };
    for (const form of formOption) {
      if (form.value == value) {
        template = {
          id: value,
          label: form.label,
        };
      }
    }
    add(selectOption, template);
  };

  function add(arrName: dataTypeSelect, tamplate: templateType) {
    const { length } = arrName;
    const id = length + 1;
    const found = arrName.some((item) => item.id === tamplate.id);
    if (!found) {
      setSelectOption([...selectOption, tamplate]);
    }
  }

  let handleIsPdf = (value: string) => {
    setReferenceDetails({ ...referenceDetails, isPdf: value });
    setIsPDF(value == "True" ? true : false);
  };

  let handleDeleteFormDisplay = (label: string) => {
    let filtered = selectOption.filter((data) => {
      return data.label != label;
    });

    setSelectOption(filtered);
  };

  let uploadForServer = (image: string | Blob) => {
    setImage(image);
    //!TO BE CALLED FOR UPLOAD
    // uploadToServer();
  };

  //! for uploading
  const uploadToServer = async () => {
    setShowUpload(true);
    const body = new FormData();
    body.append("file", image);
    axios
      .post(url + "/api/upload", body, {
        onUploadProgress: (progressEvent) => {
          // console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + "%");
          setUploadData(
            Math.round((progressEvent.loaded / progressEvent.total) * 100)
          );
        },
      })
      .then(
        (res) => {
          let location = res.data.file;
          console.log(location);
          setReferenceDetails({ ...referenceDetails, data: location });
          setclearData(true);
          clearDataProcess();
          sendToDatabase(location);
        },
        (err) => {
          //some error
        }
      );
  };

  let sendToDatabase = (location: string) => {
    let forms = [];
    for (const formData of selectOption) {
      let Id = parseInt(formData.id);
      forms.push({
        id: Id,
      });
    }

    let databaseData = {
      name: referenceDetails.name,
      description: referenceDetails.description,
      data: location.length > 0 ? location : referenceDetails.data,
      formReference: forms,
      subjectId: referenceDetails.subjectId,
      isPdf: referenceDetails.isPdf,
      id: reference.id,
      userId: userfound.id,
    };
    console.log(databaseData);

    axios({
      method: "post",
      url: "/api/updateReference",
      data: databaseData,
    })
      .then(function (response) {
        // handle success
        setToastMessage(response.data.message);
        setOpen(true);

        setSelectOption([]);
        setReferenceDetails({
          name: "",
          description: "",
          subjectId: "",
          data: "",
          isPdf: "",
          formReference: "",
          id: "",
        });
        setImage("");
        setShowUpload(false);
        setUploadData(0);
        delayRedirect();
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .then(function () {
        // always executed
      });
  };

  let clearDataProcess = () => {
    setclearData(false);
  };

  let handleCreateSubject = () => {
    if (
      referenceDetails.name != "" &&
      referenceDetails.description != "" &&
      referenceDetails.subjectId != "" &&
      //  &&
      selectOption.length > 0
    ) {
      if (referenceDetails.isPdf == "True") {
        if (image != "") {
          uploadToServer();
        } else {
          setToastMessage(
            "No file change detected. Sytem PDF file will be used!."
          );
          setOpen(true);
          sendToDatabase("");
        }
      } else {
        if (referenceDetails.data != "") {
          sendToDatabase("");
        } else {
          setToastMessage("No data, Please write data!.");
          setOpen(true);
        }
      }
    } else {
      setToastMessage(
        "Fill in all fields including image and forms selection."
      );
      setOpen(true);
    }
  };

  let handleClearToast = () => {
    setOpen(false);
  };

  let handleContent = (data: string) => {
    let convertedData = data.replaceAll(
      `img`,
      `Image layout="fill" objectFit="cover"`
    );
    setReferenceDetails({ ...referenceDetails, data: convertedData });
  };

  let handleOnReady = () => {};

  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainer}>
        <div className={Styles.rightInnercontainerBody}>
          <div className={Styles.mainMain}>
            <div className={Styles.formHeader}>Reference Details.</div>
            <InputTextMui
              label="Reference Name"
              content={referenceDetails.name}
              name="name"
              handleChange={handleTextInput}
            />
            <InputTextMui
              label="Reference Definition"
              content={referenceDetails.description}
              name="description"
              handleChange={handleTextInput}
            />

            {isPDF && (
              <FileUpload
                image={referenceDetails.data}
                uploadToServer={uploadForServer}
              />
            )}
            {!isPDF && (
              <CkEditor
                content={handleContent}
                dataCk={referenceDetails.data}
                onReadyToStart={handleOnReady}
              />
            )}
          </div>
          <div className={Styles.mainLeft}>
            <div className={Styles.formHeader}>
              Relations For This Reference.
            </div>
            <SelectMiu
              show={true}
              displayLabel="Select Subject"
              forms={subjectOptions}
              handlechange={handleSelectSubject}
              value={referenceDetails.subjectId}
            />
            <SelectMiu
              displayLabel="Is Reference PDF?"
              show={true}
              forms={trueAndFalse}
              handlechange={handleIsPdf}
              value={
                referenceDetails.isPdf.toString().charAt(0).toUpperCase() +
                referenceDetails.isPdf.toString().slice(1)
              }
            />
            {activateForm && (
              <SelectMiu
                displayLabel="Select Form"
                forms={formOption}
                handlechange={handleSelect}
                value={""}
              />
            )}
            <div className={Styles.chipDisplay}>
              {selectOption.map((option, index) => (
                <DisplayChip
                  handleDelete={handleDeleteFormDisplay}
                  label={option.label}
                  key={index}
                />
              ))}
            </div>
          </div>
        </div>
        {showUpload && <Progress data={uploadData} />}
        {showUpload ? (
          <div className={Styles.imageSelect}>Please wait...</div>
        ) : (
          <div onClick={handleCreateSubject} className={Styles.imageSelect}>
            Update Reference
          </div>
        )}
        <SnackBar
          textMessage={ToastMessage}
          opener={open}
          handleClearToast={handleClearToast}
        />
      </div>
    </div>
  );
};

export default Reference;

//*Removing default search bar :)
Reference.getLayout = function PageLayout(page: ReactNode) {
  return <>{page}</>;
};
