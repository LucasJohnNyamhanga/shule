import type { NextPage } from 'next'
import Hero from '../components/layout/Hero'
import { type } from 'os'
import Study from '../components/layout/Study'
import { prisma } from '../db/prisma'
import type { GetStaticProps } from 'next'
import { InferGetStaticPropsType } from 'next'
import { useContext, useEffect } from 'react'
import { NavContext } from '../components/context/StateContext'

type userData = {
  id:number,
  subjectName:string,
  subjectDefinition:string|null,
  imageLocation:string|null,
  forms: {
      formName:String
  }[],
}[]

export const getStaticProps: GetStaticProps = async () => {
  
  const subjectsFromServer: userData = await prisma.subject.findMany({
    where: {
      published: true,
    },
    select: {
      id:true,
      subjectName:true,
      subjectDefinition:true,
      imageLocation:true,
      forms: {
        select: {
          formName:true
        }
      },
    }
  })
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
          subjects
      }
  }
  
}

const Home: NextPage = ({ subjects }: InferGetStaticPropsType<typeof getStaticProps>) => {

  const { navActive, setNavActive } = useContext(NavContext);

  useEffect(() => {
    setNavActive("Notes");
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [navActive])
 
  return (
    <>
      <Hero
        textStart={'Notes you need,'}
        textFinish={'With the best examples and pictures.'}
        image={"/darasaplus.gif"}
        explanation={'We have everything to get you an A+, and all you have to give is dedication.'}
        buttonText={'Register Now.'}
        linker={`/`} />
      <Study subjects={subjects} focus={"Notes"} />
    </>
  )
}

export default Home
