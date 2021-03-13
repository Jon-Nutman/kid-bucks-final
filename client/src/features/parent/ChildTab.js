import React from "react"
import { Tabs } from 'antd'
import AddGoalModal from './AddGoalModal'
import AddPrizeModal from './AddPrizeModal'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function ChildTab() {
  return <div>
<Tabs onChange={callback} type="card">
    <TabPane tab="Child 1" key="1">
      <AddGoalModal />
      <AddPrizeModal />
    </TabPane>
    <TabPane tab="Child 2" key="2">
      <AddGoalModal />
      <AddPrizeModal />
    </TabPane>
    <TabPane tab="Child 3" key="3">
      <AddGoalModal />
      <AddPrizeModal />
    </TabPane>
  </Tabs>,
  </div>
}
