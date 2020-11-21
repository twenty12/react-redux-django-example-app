import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./user.module.css";

export function CreateUser() {
  return (
    <div>
      <div className={styles.row}>
        <h1>Create your user</h1>
      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Enter Email"
          placeholder="Enter your email"
        />
      </div>
      <div className={styles.row}>
        <button className={styles.asyncButton}>Next</button>
      </div>
    </div>
  );
}
