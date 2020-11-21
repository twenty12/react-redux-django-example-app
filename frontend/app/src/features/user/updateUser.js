import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./user.module.css";

export function UpdateUser() {
  return (
    <div>
      <div className={styles.row}>
        <h1>Finish Your Setup</h1>
      </div>

      <div className={styles.row}>
        <input className={styles.textbox} placeholder="Your email" />
      </div>
      <div className={styles.row}>
        <input className={styles.textbox} placeholder="First name" />
        <input className={styles.textbox} placeholder="Last name" />
      </div>
      <div className={styles.row}>
        <button className={styles.asyncButton}>Submit</button>
      </div>
    </div>
  );
}
