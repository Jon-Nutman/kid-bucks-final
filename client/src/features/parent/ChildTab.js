import React from "react"
import { Tabs } from 'antd'
import AddGoalModal from './AddGoalModal'

const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

export default function ChildTab() {
  return <div>
<Tabs onChange={callback} type="card">
    <TabPane tab="Child 1" key="1">
      <AddGoalModal/>
    </TabPane>
    <TabPane tab="Child 2" key="2">
      Content of Tab Pane 2
    </TabPane>
    <TabPane tab="Child 3" key="3">
      Content of Tab Pane 3
    </TabPane>
  </Tabs>,
  </div>
}
