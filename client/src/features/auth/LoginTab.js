import React, { useState } from 'react'
import { Tabs } from 'antd'
import styles from './LoginSignup.module.css'
import Register from './Register'
// import Registercopy from './Registercopy'
import { LoginSignup } from './LoginSignup'
// import styles from "./Tabs.module.css"

const { TabPane } = Tabs

export default function LoginTab() {
  const [tab, setTab] = useState('1')
  function onTabChange(key) {
    setTab(key)
  }
  return (
    <div>
      <Tabs activeKey={tab} onChange={onTabChange} type="card">
        <TabPane className={styles.componentContainer} tab="Login" key="1">
          <LoginSignup />
        </TabPane>
        <TabPane className={styles.componentContainer} tab="Sign up" key="2">
          <div>
            <Register onSignup={() => setTab('1')} />
          </div>
        </TabPane>
      </Tabs>
    </div>
  )
}
