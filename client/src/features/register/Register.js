import React from "react";
import { useState } from "react";
import styles from "./Register.module.css";
import { Form, Input, Button } from "antd";
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

  function handleClick() {
    setFirstName("");
    setLastName("");
    setUserName("");
    setPassword("");
    setConfirmPassword("");
    setEmail("");
  }

  return (
    <div>
      <Form className={styles.theForm} onSubmit={handleSubmit}>
        <label
          htmlFor="name"
          className={
            styles.firstNameError ? "text-label text-label-red" : "text-label"
          }
        >
          <h4> {firstNameError}</h4>
        </label>
        <Input
          value={firstName}
          type="text"
          name="name"
          placeholder="First Name"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label
          htmlFor="lastname"
          className={
            styles.lastNameError ? "text-label text-label-red" : "text-label"
          }
        >
          <h4>{lastNameError}</h4>
        </label>
        <Input
          value={lastName}
          type="text"
          name="name"
          placeholder="Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />

        <label
          htmlFor="username"
          className={
            styles.userNameError ? "text-label text-label-red" : "text-label"
          }
        >
          <h4>{userNameError}</h4>
        </label>
        <Input
          value={userName}
          type="text"
          name="username"
          placeholder="Create username"
          onChange={(e) => setUserName(e.target.value)}
        />

        <label
          htmlFor="password"
          className={
            styles.passwordError ? "text-label text-label-red" : "text-label"
          }
        >
          <h4>{passwordError}</h4>
        </label>
        <Input
          value={password}
          type="text"
          name="password"
          placeholder="Password"
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
          <h4>{confirmPasswordError}</h4>
        </label>
        <Input
          value={confirmPassword}
          type="text"
          name="confirm-password"
          placeholder="Confirm password"
          onChange={(e) => setConfirmPassword(e.target.value)}
        />

        <label
          htmlFor="email"
          className={
            styles.emailError ? "text-label text-label-red" : "text-label"
          }
        >
          <h4>{emailError}</h4>
        </label>
        <Input
          value={email}
          type="email"
          name="email"
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <div>
          <Button
            type="submit"
            onClick={() => {
              handleClick();
            }}
          >
            Submit
          </Button>
        </div>
      </Form>
    </div>
  );
}
