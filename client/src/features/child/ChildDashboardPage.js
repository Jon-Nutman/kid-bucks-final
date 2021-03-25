import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectGoals,
  getGoalsByChildId,
  deleteGoalById,
} from '../common/goalSlice'
import { selectPrizes, prizesAsync } from '../common/prizeSlice'
import Header from './Header'
import GoalList from '../commonComponents/goals/GoalList'
import PrizesList from '../commonComponents/PrizesList'
import PrzBinRedeemModal from '../commonComponents/prizeBin/PrzBinRedeemModal'
import GoalCompleteBtn from '../commonComponents/goals/GoalCompleteBtn'
import styles from './ChildDashboardPage.module.css'
import { useAuth, UseAuth } from '../auth/auth'

export default function ChildDashboardPage() {
  const goals = useSelector(selectGoals)
  const prizes = useSelector(selectPrizes)
  const dispatch = useDispatch()
  const { user } = useAuth()
  console.log(user)
  // selectGoals == state.goal.goals

  useEffect(() => {
    console.log('%c State from Child Dash and goalSlice', 'color:red;')
    console.table(goals)
  }, [goals])

  useEffect(() => {
    dispatch(getGoalsByChildId(user.id))
    dispatch(prizesAsync(user.id))
  }, [])




  return (

      <div className={styles.tabMain}>
        <Header />
        <div className={styles.componentContainer}>
        <div className={styles.leftContainer}>
          <GoalList goals={goals} />
        </div>
        <div className={styles.rightContainer}>
          <PrzBinRedeemModal />
          <PrizesList childId={user.id} />
        </div>
      </div>
    </div>
  )
}
