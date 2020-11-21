import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import styles from "./user.module.css";

export function UpdateUser() {
  let history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    history.push("/accounts");
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <input className={styles.asyncButton} type="submit" value="Next" />
      </div>
    </form>
  );
}
