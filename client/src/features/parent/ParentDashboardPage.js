import React from 'react'

import AddChildModal from './AddChildModal'
import ChildTab from './ChildTab'
import { Tabs } from 'antd'
import styles from "./ParentDashboard.module.css"
export default function ParentDashboardPage() {
    return (
        <div>
            <div className={styles.addChild}>
            <AddChildModal />
            </div>
            <div>
            <ChildTab />
            </div>
        </div>
    )
}
