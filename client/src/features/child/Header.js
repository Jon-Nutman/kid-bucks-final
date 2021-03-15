import React from "react";
import { useState } from "react";
import styles from './Header.module.css'

export default function Header() {
  const [userName, setUserName] = useState("Kiddo");

  return (
    <>
      <div className={styles.header}>
        <div className={styles.avatar}>K</div>
        <h2>Hello, {userName}, You are ready to achieve!</h2>
      </div>
    </>
  );
}
