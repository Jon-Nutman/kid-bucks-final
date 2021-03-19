import React from "react";
import { useState } from "react";
import styles from "./Header.module.css";

export default function Header() {
  const [userName, setUserName] = useState("Kiddo");

  return (
    <>
      <div className={styles.header}>
        <div className={styles.avatar}>K</div>
        <div className={styles.headerGreet}>
          <h2>Hey {userName}!</h2>
          <h3>You are ready to achieve.</h3>
        </div>
      </div>
    </>
  );
}
