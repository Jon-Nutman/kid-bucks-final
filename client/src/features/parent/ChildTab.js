import React from "react"
import { Tabs } from 'antd'
import AddGoalModal from './AddGoalModal'
import AddPrizeModal from './AddPrizeModal'
import styles from "./Tabs.module.css"

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function ChildTab() {
  return <div>
<Tabs onChange={callback} type="card">
    <TabPane className={styles.componentContainer} tab="Child 1" key="1">
      <AddGoalModal />
      <AddPrizeModal />
    </TabPane>
    <TabPane className={styles.componentContainer} tab="Child 2" key="2">
      <AddGoalModal />
      <AddPrizeModal />
    </TabPane>
    <TabPane className={styles.componentContainer} tab="Child 3" key="3">
      <AddGoalModal />
      <AddPrizeModal />
    </TabPane>
  </Tabs>,
  </div>
}
