import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Tabs } from "antd";
import request from "../../utils/request";
import LoginTab from "./LoginTab";
import Register from "../register/Register";
import styles from "./LoginSignup.module.css";
import { Form, Input, Button } from "antd";

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
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />

        <Input
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <Button type="submit">submit</Button>
        </div>
      </Form>
    </>
  );
}
