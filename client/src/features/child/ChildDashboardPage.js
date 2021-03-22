import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectGoals } from '../commonComponents/goals/goalSlice'
import Header from './Header'
import GoalList from '../commonComponents/GoalList'
import PrizesList from '../commonComponents/PrizesList'
import PrzBinRedeemModal from '../commonComponents/prizeBin/PrzBinRedeemModal'
import GoalCompleteBtn from '../commonComponents/goals/GoalCompleteBtn'
import { PrzBnPointBalance } from './PrzBnPointBalance'
import styles from './ChildDashboardPage.module.css'
import {
  getGoalsByChildId,
  deleteGoalById,
} from '../commonComponents/goals/goalSlice'

export default function ChildDashboardPage() {
  const goals = useSelector(selectGoals)
  const dispatch = useDispatch()
  const childId = 2
  // selectGoals == state.goal.goals

  useEffect(() => {
    console.log('%c State from Child Dash and goalSlice', 'color:red;')
    console.table(goals)
  }, [goals])

  useEffect(() => {
    dispatch(getGoalsByChildId(childId))
  }, [])

  return (
    <div className={styles.appChildView}>
      <Header />
      <div className={styles.childDashContain}>
        <div className={styles.goalListChildContain}>
          <GoalList
            goals={goals}
            onDelete={(id) => dispatch(deleteGoalById(id, childId))}
          />
          <div className={styles.goalCompleteBtn}>
            <GoalCompleteBtn />
          </div>
        </div>
        <div className={styles.prizeBinContain}>
          <PrzBnPointBalance />
          <div className={styles.prizeListContainer}>
            <PrizesList id={goals.child_id} />
          </div>
          <div className={styles.przRedemption}>
            <PrzBinRedeemModal />
          </div>
        </div>
      </div>
    </div>
  )
}
