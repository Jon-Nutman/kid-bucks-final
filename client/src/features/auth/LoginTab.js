import React from "react";
import { Tabs } from "antd";
import styles from "./LoginSignup.module.css";
import Register from "../register/Register";
import { LoginSignup } from "./LoginSignup";
// import styles from "./Tabs.module.css"

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function LoginTab() {
  return (
    <div>
      <Tabs onChange={callback} type="card">
        <TabPane className={styles.componentContainer} tab="Login" key="1">
          {/* <div>
            <Register />
          </div> */}
          <LoginSignup />
        </TabPane>
        <TabPane className={styles.componentContainer} tab="Sign up" key="2">
          <div>
            <Register />
          </div>
        </TabPane>
      </Tabs>
    </div>
  );
}
