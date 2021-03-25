import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectGoals,
  getGoalsByChildId,
  deleteGoalById,
} from '../common/goalSlice'
import { selectPrizes } from '../common/prizeSlice'
import Header from './Header'
import GoalList from '../commonComponents/goals/GoalList'
import PrizesList from '../commonComponents/PrizesList'
import PrzBinRedeemModal from '../commonComponents/prizeBin/PrzBinRedeemModal'
import GoalCompleteBtn from '../commonComponents/goals/GoalCompleteBtn'
import styles from './ChildDashboardPage.module.css'

export default function ChildDashboardPage() {
  const goals = useSelector(selectGoals)
  const prizes = useSelector(selectPrizes)
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

      <div className={styles.tabMain}>
        <Header />
        <div className={styles.componentContainer}>
        <div className={styles.leftContainer}>
          <GoalList goals={goals} />
          <GoalCompleteBtn />
        </div>
        <div className={styles.rightContainer}>
          <PrzBinRedeemModal />
          <PrizesList childId={childId.id} />
        </div>
      </div>
    </div>
  )
}
