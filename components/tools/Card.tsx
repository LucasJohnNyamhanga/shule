import styles from "../../styles/card.module.scss";
import Image from "next/image";
import Chip from './Chip'

type dataType = {
    headerText: string,
    image: string,
    imageDescription: string,
  forms: {
    formName:string
  }[],
  link:string,
}

const card = ({ headerText, image, imageDescription, forms, link }: dataType) => {


  return (
    <div
    className={styles.card}
    >
    <Image
    src={image}
    alt={imageDescription}
    placeholder='blur'
    blurDataURL={image}
    width={400}
    height={200}
    objectFit="cover"
    />
    
    <div className={styles.header}>
         <h1>{headerText}</h1>
    </div>
    <div className={styles.content}>
        {forms.map((form, index) => (
            // <div key={index} onClick={(e) => { handleModal(headerText, form) }}> <p>{ form }</p> </div>
          <Chip  key={index} headerText={headerText} label={form.formName} link={link}/>
        ))}
    </div>
  </div>
  )
}

export default card