import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectGoals,
  getGoalsByChildId,
} from '../common/goalSlice'
import { selectPrizes, getPrizesByChildId } from '../common/prizeSlice'
import Header from './Header'
import { Space } from 'antd'
import GoalList from '../commonComponents/goals/GoalList'
import PrizesList from '../commonComponents/PrizesList'
import PrzBinRedeemModal from '../commonComponents/prizeBin/PrzBinRedeemModal'
import styles from './ChildDashboardPage.module.css'
import { useAuth } from '../auth/auth'

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
    console.table(prizes)
  }, [goals])

  useEffect(() => {
    dispatch(getGoalsByChildId(user.id))
    dispatch(getPrizesByChildId(user.id))
  }, [])

  return (

      <div className={styles.tabMain}>
        <Header />
        <div className={styles.componentContainer}>
        <div className={styles.leftContainer}>
        <Space>
          <GoalList goals={goals} />
        </Space>
        </div>
        <div className={styles.rightContainer}>
          <PrzBinRedeemModal />
          <PrizesList prizes={prizes} childId={user.id} />
        </div>
        {/* </Space> */}
      </div>
    </div>
  )
}
