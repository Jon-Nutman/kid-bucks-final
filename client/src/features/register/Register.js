import React from "react";
import { useState } from "react";
import styles from "./Register.module.css";
// import validator from "validator";

export default function Register() {
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState("");
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState("");
  const [userName, setUserName] = useState("");
  const [userNameError, setUserNameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  function resetForm() {
    setFirstName("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (firstName === "") {
      setFirstNameError("must be entered");
    } else {
      setFirstNameError("");
    }
    e.preventDefault();
    if (lastName === "") {
      setLastNameError("must be entered");
    } else {
      setLastNameError("");
    }
    e.preventDefault();
    if (userName === "") {
      setUserNameError("must be entered");
    } else {
      setUserNameError("");
    }
    e.preventDefault();
    if (password === "") {
      setPasswordError("must be entered");
    } else {
      setPasswordError("");
    }
    e.preventDefault();
    if (confirmPassword !== password) {
      setConfirmPasswordError("passwords must match");
    } else {
      setConfirmPasswordError("");
    }
    // e.preventDefault();
    // if (validator.isEmail(email)) {
    //   setEmailError("");
    // } else {
    //   setEmailError("Please enter a valid email");
    // }
  }

  return (
    <div>
      <form className={styles.theForm} onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className={
            styles.firstNameError ? "text-label text-label-red" : "text-label"
          }
        >
          <h4>First Name: {firstNameError}</h4>
        </label>
        <input
          id="firstname"
          type="text"
          name="name"
          placeholder=""
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label
          htmlFor="lastname"
          className={
            styles.lastNameError ? "text-label text-label-red" : "text-label"
          }
        >
          <h4>Last Name: {lastNameError}</h4>
        </label>
        <input
          id="name"
          type="text"
          name="name"
          placeholder=""
          onChange={(e) => setLastName(e.target.value)}
        />

        <label
          htmlFor="username"
          className={
            styles.userNameError ? "text-label text-label-red" : "text-label"
          }
        >
          <h4>Username: {userNameError}</h4>
        </label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder=""
          onChange={(e) => setUserName(e.target.value)}
        />

        <label
          htmlFor="password"
          className={
            styles.passwordError ? "text-label text-label-red" : "text-label"
          }
        >
          <h4>Password: {passwordError}</h4>
        </label>
        <input
          id="password"
          type="text"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <label
          htmlFor="confirmpassword"
          className={
            styles.confirmPasswordError
              ? "text-label text-label-red"
              : "text-label"
          }
        >
          <h4>Confirm password: {confirmPasswordError}</h4>
        </label>
        <input
          id="confirm-password"
          type="text"
          name="confirm-password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <label
          htmlFor="email"
          className={
            styles.emailError ? "text-label text-label-red" : "text-label"
          }
        >
          <h4>Email: {emailError}</h4>
        </label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder=""
          onChange={(e) => setEmail(e.target.value)}
        />
        <button id="mybtn" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
