import React from 'react'

import AddChildModal from './AddChildModal'
import ChildTab from './ChildTab'
import { Tabs } from 'antd'
export default function ParentDashboardPage() {
    return (
        <div>
            <AddChildModal />
            <ChildTab />
        </div>
    )
}
