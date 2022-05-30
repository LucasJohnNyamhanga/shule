import React, { ReactNode, useContext, useEffect } from 'react'
import { GetServerSideProps, InferGetServerSidePropsType } from 'next'
import { prisma } from '../../../../../db/prisma'
import InputTextMui from '../../../../../components/tools/InputTextMui'
import SelectMiu from '../../../../../components/tools/SelectMui'
import axios from "axios";
import { useState } from 'react'
import Styles from '../../../../../styles/createNotes.module.scss'
import { useRouter } from 'next/router'
import toast, { Toaster } from 'react-hot-toast';
import { NavContext } from '../../../../../components/context/StateContext'

export const getServerSideProps: GetServerSideProps = async (context) => {
  let id = context.params?.id as string
  let Id = parseInt(id);
  
    const formServer = await prisma.formReview.findUnique({
      where: {
        id: Id,
      },
      select: {
        id:true,
        formName: true,
    }
    })

  const form = JSON.parse(JSON.stringify(formServer));
  
  await prisma.$disconnect();

    return {
        props: {
          form
        }
    }
}
type userData = {
    id:number,
    formName:string,
  }[]


type formData = {
  label: string,
  value: string
}[]

const EditForm = ({ form }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  
  const [formData, setFormData] = useState({
    formName: '',
    id:''
  })
  const router = useRouter();

  const { navActive, setNavActive } = useContext(NavContext);


  useEffect(() => {
    setNavActive("Admin");
    setFormData({
      formName: form.formName,
      id:form.id
    })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[navActive])

const notify = (message: string) => toast(message);
const notifySuccess = (message: string) => toast.success(message);
const notifyError = (message: string) => toast.error(message);

let handleTextInput = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, name:string) => {
    let value = event.currentTarget.value;
    setFormData({...formData, formName: value });
}

let handleCreateNotes = () => {
  if (formData.formName != ''
  ) {
    sendToDatabase();
  } else {
      notifyError('Fill in form name to proceed.');
    }
}
let sendToDatabase = () => {

  axios({
    method: 'post',
    url: 'http://localhost:3000/api/updateFormReview',
    data: formData,
  }).then(function (response) {
    // handle success
      setFormData({
        formName: '',
        id:''
      })
      let jibu: string = response.data.message;
      notifySuccess(jibu);
      delayRedirect();
  })
  .catch(function (error) {
    // handle error
    console.log(error);
    notifyError("Error has occured, try later.")
  })
  .then(function () {
    // always executed
  });
}
    
     //!delay redirect
     function delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }

    let delayRedirect = async () => {
        await new Promise(f => setTimeout(() => {
            router.back();
        }, 1000));
    }
    
      return (
        <div className={Styles.container}>
          <Toaster
              position="bottom-left"
            />
        <div className={Styles.innerContainer}>
          <div className={Styles.content}>
            <div className={Styles.mainContent}>
            <InputTextMui label='Subject Name' content={formData.formName}  name='formName' handleChange={handleTextInput} />
            </div>
          
          </div>
          <div>
            <div onClick={handleCreateNotes} className={Styles.imageSelect}>Create Form</div>
          </div>
        </div>
      </div>
      )
    }
    
export default EditForm;
    
    //*Removing default search bar :)
    EditForm.getLayout = function PageLayout(page:ReactNode) {
      return (
          <>
              {page}
          </>
      )
    }