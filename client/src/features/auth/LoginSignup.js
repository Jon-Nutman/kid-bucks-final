import React from "react";
import { useState } from "react";
import { useHistory } from "react-router-dom";
import request from "../../utils/request";
import { Form, Input, Button } from "antd";

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
  function handleClick() {
    setUsername("");
    setPassword("");
  }

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Input
          value={username}
          type="text"
          placeholder="Username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <Input
          value={password}
          type="text"
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
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
    </>
  );
}
