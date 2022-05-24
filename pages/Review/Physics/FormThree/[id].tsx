
import { GetStaticProps, GetStaticPaths } from 'next'
import { InferGetStaticPropsType } from 'next'
import { PrismaClient } from '@prisma/client'
import React, { useContext, useEffect } from 'react';
import Styles from '../../../../styles/notesDisplay.module.scss';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import parse from 'html-react-parser';
import Head from 'next/head'
import Link from 'next/link';
import Drawer from '../../../../components/tools/Drawer'
import { NavContext } from '../../../../components/context/StateContext';

const subjectLocator = "Physics";
const formLocator = "Form Three";
const subjectLocatorLink = "Physics";
const formLocatorLink = "FormThree";

export const getStaticProps: GetStaticProps = async (context) => {
    
    
    const  id = context.params?.id;
    let Id = parseInt(String(id));
    // ...
    const prisma = new PrismaClient();
    const topicData = await prisma.topic.findUnique({
        where: {
            id: Id,
        },
        select: {
            id: true,
            topicName: true,
            topicDefinition: true,
            subject: {
                select: {
                    subjectName:true,
                }
            },
            form: {
                select: {
                    formName:true,
                }
            },
            note: {
                select: {
                    content: true,
                }
            }
            
        }
    })

    const thisTopicData = JSON.parse(JSON.stringify(topicData));
    
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
            subject: {
                select: {
                    subjectName:true,
                }
            },
            form: {
                select: {
                    formName:true,
                }
            }
        }
      })
      const topics = JSON.parse(JSON.stringify(topicsFromServer));
    
  return {
      props: {
        topics,
        thisTopicData
    }
}
}

export const getStaticPaths: GetStaticPaths = async () => {
  // ...
    const prisma = new PrismaClient();
    const notesServer = await prisma.topic.findMany({
        select: {
            id: true,
        }
    });

    type dataNote = {
        id:number
    }
    const notesData = JSON.parse(JSON.stringify(notesServer));
    const paths = notesData.map((note: dataNote) => {
        let id = String(note.id);
        return {
            params: {
                id: `${id}`
            }
        }
    });
    return {
        paths,
        fallback: false,
    }
}



const Index = ({ topics, thisTopicData }: InferGetStaticPropsType<typeof getStaticProps>) => {
  
  const { navActive, setNavActive } = useContext(NavContext);

  useEffect(() => {
    setNavActive("Notes");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navActive])
  
    let htmlServer;

    if (thisTopicData.note ==  null) {
        htmlServer =  `<div className={Styles.notFound} >Notes for ${thisTopicData.topicName} topic will be available soon.</div>`;
    } else {
      let result = thisTopicData.note.content.replaceAll(`img`, `Image layout="fill" objectfit="cover"`);
      htmlServer = result;
  }

  type dataTopic = {
    id:number,
    topicName:string,
    topicDefinition: string,
    subject: {
            subjectName:string,
    },
    form: {
            formName:string,
    }
}
    
      //!mambo yanaanza
    
      return (
        <div className={Styles.container}>
          <Head>
            <title>
              {thisTopicData.topicName}
            </title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta name="description" content={thisTopicData.topicDefinition} />
            {/* //!add keywords */}
            <meta name="keywords" content={thisTopicData.topicName}/>
          </Head>
          <div className={Styles.innerContainer}>
            <div className={Styles.leftInnercontainerBody}>
              <div className={Styles.sticky}>
                <div  className={Styles.topicHeader}>
                  Topics list
                </div>
              
                <div className={Styles.titleList}>
                  {
                    topics.map((topic: dataTopic) => (
                        <div key={topic.id}>
                            <Link passHref href={`/Notes/${subjectLocatorLink}/${formLocatorLink}/${topic.id}`}>
                                <a>
                                    <div key={topic.id}  className={topic.id == thisTopicData.id ?`${ Styles.topicTittle} ${Styles.Active}` : Styles.topicTittle}>
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
              <Drawer textHeader={'LIST OF TOPICS'} topic={topics} active={thisTopicData.id} />
            </div>
              <div className={Styles.BodyHeader}>
                {thisTopicData.subject.subjectName} <ChevronRightOutlinedIcon/>  {thisTopicData.form.formName}  <ChevronRightOutlinedIcon/> {thisTopicData.topicName}
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

export default Index