import React from "react";
import { useState } from "react";
import './Header.css'

export default function Header() {
  const [userName, setUserName] = useState("Kiddo");

  return (
    <>
      <div className="header">
        <div className="avatar">K</div>
        <h2>Hello, {userName}, You are ready to achieve!</h2>
      </div>
    </>
  );
}
