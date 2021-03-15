import React from "react"
import { Tabs } from "antd"
import AddGoalModal from "./AddGoalModal"
import AddPrizeModal from "./AddPrizeModal"
import GoalList from "../commonComponents/GoalList"
import PrizesList from "../commonComponents/PrizesList"
import styles from "./Tabs.module.css"

const { TabPane } = Tabs

function callback(key) {
  console.log(key)
}

export default function ChildTab() {
  return (
    <div>
      <Tabs onChange={callback} type="card">
        <TabPane className={styles.componentContainer} tab="Child 1" key="1">
          <div>
            <AddGoalModal />
            <h1>Goal List</h1>
            <GoalList />
          </div>
          <div>
            <AddPrizeModal />
            <h1>Prize List</h1>
            <PrizesList />
          </div>
        </TabPane>
        <TabPane className={styles.componentContainer} tab="Child 2" key="2">
          <div>
            <AddGoalModal />
            <h1>Goal List</h1>
            <GoalList />
          </div>
          <div>
            <AddPrizeModal />
            <h1>Prize List</h1>
            <PrizesList />
          </div>
        </TabPane>
        <TabPane className={styles.componentContainer} tab="Child 3" key="3">
          <div>
            <AddGoalModal />
            <h1>Goal List</h1>
            <GoalList />
          </div>
          <div>
            <AddPrizeModal />
            <h1>Prize List</h1>
            <PrizesList />
          </div>
        </TabPane>
      </Tabs>
      ,
    </div>
  )
}
