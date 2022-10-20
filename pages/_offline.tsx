import React from "react";
import Styles from "../styles/offline.module.scss";

const _offline = () => {
  return (
    <div className={Styles.container}>
      <div className={Styles.innerContainer}>
        <div className={Styles.sms}>
          <h2>Sorry, you are offline.</h2>
          <div>
            When you are online and view this page, it will be saved
            automatically for offline viewing.
          </div>
        </div>
      </div>
    </div>
  );
};

export default _offline;
