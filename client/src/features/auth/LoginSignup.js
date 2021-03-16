import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Tabs } from "antd";
import request from "../../utils/request";
import LoginTab from "./LoginTab";
import Register from "../register/Register";
import styles from "./LoginSignup.module.css";

const { TabPane } = Tabs;
function callback(key) {
  console.log(key);
}

export function LoginSignup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    request.login(username, password).then((r) => {
      history.push("/protected");
    });
  };
  return (
    <>
      <div>{/* <LoginTab /> */}</div>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
        <input type="text" onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">submit</button>
      </form>
    </>
  );
}
