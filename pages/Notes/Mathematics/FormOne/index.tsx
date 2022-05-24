import React from 'react'
import Styles from '../../../../styles/notes.module.scss'
import { ReactNode } from 'react';

const index = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainer}>
        <div className={Styles.containerHeader}>
          <div  className={Styles.header}>
          This is heading for Notes.
          </div>
        </div>
        <div className={Styles.containerBody}>
          <div className={Styles.leftInnercontainerBody}>
            <div className={Styles.topicTittle}>Topic Tittle</div>
            <div className={Styles.topicTittle}>Topic Tittle</div>
            <div className={Styles.topicTittle}>Topic Tittle</div>
            <div className={Styles.topicTittle}>Topic Tittle</div>
            <div className={Styles.topicTittle}>Topic Tittle</div>
            <div className={Styles.topicTittle}>Topic Tittle</div>
          </div>
          <div className={Styles.rightInnercontainerBody}>Div Right</div>
        </div>
      </div>
    </div>
  )
}

export default index


//*Removing default search bar :)
index.getLayout = function PageLayout(page:ReactNode) {
  return (
    <>
      {page}
    </>
  )
}