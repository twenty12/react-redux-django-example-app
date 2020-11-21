import React from "react";
import styles from "./user.module.css";
import { useHistory } from "react-router-dom";

export function CreateUser() {

  let history = useHistory();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    history.push("/update-user");
  };

  return (
    <form onSubmit={handleSubmit}>
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
        <input className={styles.asyncButton} type="submit" value="Next" />
      </div>
    </form>
  );
}
