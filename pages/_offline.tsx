import Link from "next/link";
import React from "react";
import Styles from "../styles/offline.module.scss";

const _offline = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainer}>
        <div className={Styles.sms}>
          <div className={Styles.header}>Sorry, you are offline.</div>
          <div className={Styles.text}>
            When you are online and view this page, it will be saved
            automatically for offline viewing.
          </div>
          <Link href="/">
            <a>
              <div className={Styles.Button}>Return Home</div>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default _offline;
