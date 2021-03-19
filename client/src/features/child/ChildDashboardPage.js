import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { selectGoals } from '../commonComponents/goals/goalSlice'
import Header from './Header'
import GoalList from '../commonComponents/GoalList'
import PrizesList from '../commonComponents/PrizesList'
import PrzBinRedeemModal from '../commonComponents/prizeBin/PrzBinRedeemModal'
import GoalCompleteBtn from '../commonComponents/goals/GoalCompleteBtn'
import { PrzBnPointBalance } from './PrzBnPointBalance'
import styles from './ChildDashboardPage.module.css'

export default function ChildDashboardPage() {
  const goals = useSelector(selectGoals)
  // selectGoals == state.goal.goals

  useEffect(() => {
    console.log('%c State from Child Dash and goalSlice', 'color:red;')
    console.table(goals)
  }, [goals])

  return (
    <div className={styles.appChildView}>
      <Header />
      <div className={styles.childDashContain}>
        <div className={styles.goalListChildContain}>
          <GoalList goals={goals} />
          <div className={styles.goalCompleteBtn}>
            <GoalCompleteBtn />
          </div>
        </div>
        <div className={styles.prizeBinContain}>
          <PrzBnPointBalance />
          <div className={styles.prizeListContainer}>
            <PrizesList />
          </div>
          <div className={styles.przRedemption}>
            <PrzBinRedeemModal />
          </div>
        </div>
      </div>
    </div>
  )
}
