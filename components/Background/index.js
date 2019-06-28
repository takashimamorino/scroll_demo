import React from "react";

import styles from "./background.module.scss";

const Background = () => {
  return (
    <>
      <div className={styles.first_view}>First View</div>
      <div className={styles.background} />
    </>
  );
};

export default Background;
