import React from 'react'
import Header from './Header'
import GoalList from '../commonComponents/GoalList'
import PrizesList from '../commonComponents/PrizesList'

export default function ChildDashboardPage() {
    return (
        <>
            <Header />
            <div className="childDashContain">
            <GoalList />
            <PrizesList></PrizesList>
            </div>
        </>
    )
}
