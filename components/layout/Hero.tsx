import React from "react";
import styles from "../../styles/hero.module.scss";
import Button from '@mui/material/Button';
import Image from "next/image";
import Link from "next/link";

type dataHero = {
  textStart: string,
  textFinish: string,
  image: string,
  explanation: string,
  buttonText: string,
  linker:string
}

function hero({textStart, textFinish, explanation, image, buttonText, linker}:dataHero) {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <div className={styles.hero}>
          <div className={styles.info}>
            <div className={styles.details}>
              <h1>
                &ldquo;{`${textStart}`}<br/> <span>{`${textFinish}`}&rdquo;</span>
              </h1>
              <p>
                {explanation}
              </p>
              <Link passHref href={linker}>
                <Button variant="contained" className={styles.button}>
                  {buttonText}
                </Button>
              </Link>
            </div>
          </div>
          <div className={styles.image}>
            <Image alt="" src={image} objectFit={"contain"}  placeholder="blur" blurDataURL={image } width={400} height={400}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default hero;
