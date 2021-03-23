import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { selectGoals } from '../common/goalSlice'
import Header from './Header'
import GoalList from '../commonComponents/GoalList'
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
    <div className={styles.main}>
      <div className={styles.childDashGlass}>
        <div className={styles.circle1}></div>
        <div className={styles.circle2}></div>
        <Header />

        <div className={styles.childDashFlexbox}>
          <div className={styles.childDashGoalsContain}>
            <GoalList
              goals={goals}
              onDelete={(id) => dispatch(deleteGoalById(id, childId))}
            />
            <div className={styles.goalCompleteBtn}>
              <GoalCompleteBtn />
            </div>
          </div>
        </div>
        <div className={styles.prizeBinContain}>
          <div className={styles.prizeListContainer}>
            <PrizesList prizes={prizes} />
          </div>
          <div className={styles.przRedemption}>
            <PrzBinRedeemModal />
          </div>
        </div>
      </div>
    </div>
  )
}
