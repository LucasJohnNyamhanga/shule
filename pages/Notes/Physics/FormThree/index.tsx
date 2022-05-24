import React, { ReactNode, useContext, useEffect, useState } from 'react';
import Styles from '../../../../styles/notesDisplay.module.scss';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { type } from 'os'
import { PrismaClient, topic } from '@prisma/client'
import type { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'
import parse from 'html-react-parser';
import Head from 'next/head'
import Link from 'next/link'
import Error from 'next/error'
import Drawer from '../../../../components/tools/Drawer'
import { NavContext } from '../../../../components/context/StateContext';

const subjectLocator = "Physics";
const formLocator = "Form Three";
const subjectLocatorLink = "Physics";
const formLocatorLink = "FormThree";

export const getStaticProps: GetStaticProps = async () => {
  
  const prisma = new PrismaClient();
  const topicsFromServer = await prisma.topic.findMany({
    where: {
      published: true,
      subject: {
        subjectName: subjectLocator,
      },
      form: {
        formName:formLocator,
      }
    },
    select: {
      id:true,
      topicName:true,
      topicDefinition: true,
      form: {
        select: {
          formName:true
        }
      },
      subject: {
        select: {
          subjectName:true,
        }
      }
    }
  })
  const topics = JSON.parse(JSON.stringify(topicsFromServer));

  const noteFromServer = await prisma.topic.findMany({
    take: 1,
    where: {
      published: true,
      subject: {
        subjectName:subjectLocator,
      },
      form: {
        formName:formLocator,
      }
    },
    select: {
      id:true,
      note: {
        select: {
          content:true,
        }
      },
      form:{
        select: {
              formName: true,
            }
      },
      subject: {
        select: {
          subjectName:true,
        }
      },
      topicName: true,
      topicDefinition:true,
    }
  })
  const note = JSON.parse(JSON.stringify(noteFromServer));


  return {
      props: {
      topics,
      note
      }
  }
  
}

const Index = ({ topics, note }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const { navActive, setNavActive } = useContext(NavContext);

  useEffect(() => {
    setNavActive("Notes");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navActive])

  if (topics.length < 1) {
    return <Error statusCode={404} />
}

  let htmlServer;

  if (note[0].note ==  null || note[0].note == "undefined") {
    htmlServer =  `<div className={Styles.notFound} >Notes for ${note[0].topicName} topic will be available soon.</div>`;
  } else {
    let result = note[0].note.content.replaceAll(`img`, `Image layout="fill" objectfit="cover"`);
    htmlServer = result;
 }

  //!mambo yanaanza
  

  return (
    <div className={Styles.container}>
      <Head>
        <title>
          {note[0].topicName}
        </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta name="description" content={note[0].topicDefinition} />
        <meta name="keywords" content={note[0].topicName}/>
      </Head>
      <div className={Styles.innerContainer}>
        <div className={Styles.leftInnercontainerBody}>
          <div className={Styles.sticky}>
              <div  className={Styles.topicHeader}>
                Topics list
              </div>
              <div className={Styles.titleList}>
                {
                  topics.map((topic: topic) => (
                    <div key={topic.id}>
                      <Link passHref  href={`/Notes/${subjectLocatorLink}/${formLocatorLink}/${topic.id}`}>
                        <a>
                          <div key={topic.id} className={topic.id == note[0].id ? `${Styles.topicTittle} ${Styles.Active}` : Styles.topicTittle}>
                            {topic.topicName}
                          </div>
                        </a>
                      </Link>
                    </div>
                  ))
                }
              </div>
          </div>
        </div>
        <div className={Styles.rightInnercontainerBody}>
          <div className={Styles.mobile}>
            <Drawer textHeader={'LIST OF TOPICS'} topic={topics} active={note[0].id} />
          </div>
          <div className={Styles.BodyHeader}>
            {note[0].subject.subjectName} <ChevronRightOutlinedIcon/>  {note[0].form.formName}  <ChevronRightOutlinedIcon/> {note[0].topicName}
          </div>
          <div className={Styles.BodyContent}>
            <div className="ckContent">
              {parse(htmlServer)}
            </div>
           
          </div>
        </div>
      </div>
    </div>
  )
}

export default Index;

// //*Removing default search bar :)
// Index.getLayout = function PageLayout(page:ReactNode) {
//   return (
//       <>
//           {page}
//       </>
//   )
// }