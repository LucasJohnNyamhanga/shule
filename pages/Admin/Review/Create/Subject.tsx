import ImageUpload from '../../../../components/tools/ImageUpload';
import InputTextMui from '../../../../components/tools/InputTextMui'
import { type } from 'os';
import DisplayChip from '../../../../components/tools/displayChip';
import { PrismaClient } from '@prisma/client'
import { InferGetStaticPropsType } from 'next'
import SelectMiu from '../../../../components/tools/SelectMui'
import axios from "axios";
import { useContext, useEffect, useState } from 'react'
import Styles from '../../../../styles/createNotes.module.scss'
import { ReactNode } from 'react';
import SnackBar from '../../../../components/tools/SnackBar'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import Progress from '../../../../components/tools/progressFileUpload'
import { NavContext } from '../../../../components/context/StateContext'

export const getServerSideProps: GetServerSideProps = async () => {
    const prisma = new PrismaClient();
    const formsFromServer: userData = await prisma.formReview.findMany({
      select: {
        id:true,
        formName:true,
      }
    })
    const forms = JSON.parse(JSON.stringify(formsFromServer));
  
  //* FUNCTION TO UPDATE
  //   let update = async () => {
  //     for (let subject of subjects) {
  //       await prisma.subject.update({
  //         where: { id: subject.id },
  //         data: {
  //           forms: { set: [{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }, { id: 5 }, { id: 6 }, ],},
  //         },
  //     })
  //     }
      
  //  }
   
  //    update();
    
    let deactiveteImage = true;
    await prisma.$disconnect();
    return {
        props: {
            forms,
            deactiveteImage
        }
    }
  }

type userData = {
    id:number,
    formName:string,
  }[]

  
type dataTypeSelect = {
    id: string,
    label:string
}[]

const CreateNotes = ({ forms, deactiveteImage }: InferGetServerSidePropsType<typeof getServerSideProps>) => {

    const { navActive, setNavActive } = useContext(NavContext);

  useEffect(() => {
    setNavActive("Admin");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navActive])

    const [selectOption, setSelectOption] = useState<dataTypeSelect>([]);
    const [open, setOpen] = useState(false);
    const [ToastMessage, setToastMessage] = useState("");
    const [image, setImage] = useState<string | Blob>("");
    const [clearData, setclearData] = useState(false);
    const [uploadData, setUploadData] = useState(0);
    const [showUpload, setShowUpload] = useState(false);

    const [subjectDetails, setsubjectDetails] = useState({
        subjectName: '',
        subjectDefinition:''
    });

    let handleTextInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name:string) => {
        let value = event.currentTarget.value;
        setsubjectDetails({ ...subjectDetails, [name]: value });
        
    }

    type templateType = {
        id: string,
        label: string
    }


    let options: { label: string; value: string; }[] = [];

    for (const form of forms) {
        options.push({
            label: form.formName,
            value: form.id
        })
    }

    let handleSelect = (value:string) => {
        let template:templateType = {
            id: "",
            label: ""
        };
        for (const form of options) {
            if (form.value == value) {
                template = {
                    id: value,
                    label: form.label
                }
            }
        }
        add(selectOption, template);
    }

    function add(arrName:dataTypeSelect, tamplate:templateType) {
        const { length } = arrName;
        const id = length + 1;
        const found = arrName.some(item => item.id === tamplate.id);
        if (!found) {
            setSelectOption([...selectOption, tamplate]);
        }
    }

    let handleDeleteFormDisplay = (label:string) => {
        let filtered = selectOption.filter((data) => {
            return data.label != label
        })

        setSelectOption(filtered);
    }

    let uploadForServer = (image : string | Blob) => {
        setImage(image);
        //!TO BE CALLED FOR UPLOAD
        // uploadToServer();
    }

//! for uploading
    const uploadToServer = async () => {  
        setShowUpload(true);
        const body = new FormData();
        body.append("file", image);  
        axios.post("/api/upload", body, {
            onUploadProgress: progressEvent => {
                // console.log('Upload Progress: ' + Math.round(progressEvent.loaded / progressEvent.total * 100) + "%");
                setUploadData(Math.round(progressEvent.loaded / progressEvent.total * 100));
            }
        })
        .then((res) => {
            let location = res.data.file;
            setclearData(true);
            clearDataProcess();
            sendToDatabase(location);

            }, (err) => {
          //some error
             })
    };

    let sendToDatabase = (location: string) => {
        let forms = [];
        for (const formData of selectOption) {
            let Id = parseInt(formData.id)
            forms.push({
                id: Id
            })
        }

        let databaseData = {
            subjectName: subjectDetails.subjectName,
            subjectDefinition: subjectDetails.subjectDefinition,
            imageLocation: location,
            forms
        }

        axios({
            method: 'post',
            url: 'http://localhost:3000/api/addSubjectReview',
            data: databaseData
          }).then(function (response) {
            // handle success
              setToastMessage(response.data.message);
              setOpen(true);

              setSelectOption([]);
              setsubjectDetails({
                subjectName: '',
                subjectDefinition:''
            })
              setImage("");
              setShowUpload(false);
              setUploadData(0)
          })
          .catch(function (error) {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
    }
    
    let clearDataProcess = () => {
        setclearData(false);
    }

    let handleCreateSubject = () => {
        if (
            (subjectDetails.subjectDefinition != "")
            && (subjectDetails.subjectName != "")
            && (image != "")
            && (selectOption.length > 0)
        ) {
            verifySubject();
            
        } else {
            setToastMessage("Fill in all fields including image and forms selection.");
            setOpen(true);
        }
    }

    let handleClearToast = () => { setOpen(false) }
    
    let verifySubject = () => {
        let dataSubject = {
            subjectName: subjectDetails.subjectName,
            subjectDefinition: subjectDetails.subjectDefinition,
            imageLocation: location,
            forms
        }
        axios({
          method: 'post',
          url: 'http://localhost:3000/api/subjectsReviewVerify',
          data: dataSubject
        })
        .then(function (response) {
            const FormsFromServer = JSON.parse(JSON.stringify(response.data));
            // handle success
            if (FormsFromServer.length > 0) {
                setToastMessage("Database contain another copy of this subject.");
                setOpen(true);
           } else {
            uploadToServer();
           }
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .then(function () {
            // always executed
        });
      }


    return (
        <div className={Styles.container}>
            <div className={Styles.innerContainer}>
                <div className={Styles.rightInnercontainerBody}>
                    <div className={Styles.mainMain}>
                        <div className={Styles.formHeader}>
                            Subject Details.
                        </div>
                        <InputTextMui label='Subject Name' content={subjectDetails.subjectName}  name='subjectName' handleChange={handleTextInput} />
                        <InputTextMui  label='Subject Definition'  content={subjectDetails.subjectDefinition} name='subjectDefinition' handleChange={handleTextInput} />

                        <ImageUpload deactiveteImage={deactiveteImage} clear={clearData} clearData={clearDataProcess}  uploadToServer={uploadForServer} />
                    </div>
                    <div className={Styles.mainLeft}>
                        <div className={Styles.formHeader}>
                            Forms for this subject.
                        </div>
                            <SelectMiu displayLabel="Select Form" forms={options} handlechange={handleSelect} value={''} />
                            <div className={Styles.chipDisplay}>
                                {selectOption.map((option, index) => (
                                    <DisplayChip handleDelete={handleDeleteFormDisplay} label={option.label}  key={index} />
                                ))}
                            </div>
                        </div>
                </div>
                { showUpload && <Progress data={uploadData} />}
                {showUpload ?
                    <div className={Styles.imageSelect}>Please wait...</div>
                   : <div onClick={handleCreateSubject} className={Styles.imageSelect}>Create Subject</div>}
                <SnackBar textMessage={ToastMessage} opener={open} handleClearToast={handleClearToast} />
           </div>
        </div>
    )
}

export default CreateNotes;

//*Removing default search bar :)
CreateNotes.getLayout = function PageLayout(page:ReactNode) {
    return (
        <>
            {page}
        </>
    )
}