import React from 'react'

import AddChildModal from './AddChildModal'
import ChildTab from './ChildTab'
import { Tabs } from 'antd'
import styles from './ParentDashboard.module.css'
export default function ParentDashboardPage() {
  return (
    <div className={styles.container}>
      <div>
        <ChildTab />
      </div>
    </div>
  )
}
