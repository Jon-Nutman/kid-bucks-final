import React from 'react'
import Header from './Header'
import GoalList from '../commonComponents/GoalList'
import PrizesList from '../commonComponents/PrizesList'
import { PrzBnPointBalance } from './PrzBnPointBalance'
import styles from './Header.module.css'

export default function ChildDashboardPage() {
    return (
        <>
            <Header />
            <div className={styles.childDashContain}>
            <GoalList />
            <PrzBnPointBalance />
            <PrizesList></PrizesList>
            </div>
        </>
    )
}
