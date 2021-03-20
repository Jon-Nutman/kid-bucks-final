import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteGoal, updateGoalStatus } from './goalSlice'
import Checkbox from '../componentParts/CmpntCheckbox'
import styles from './GoalItem.module.css'

export default function GoalItem(props) {

  const dispatch = useDispatch()
  const goal = props.goal
  return (
    <div className={styles.goalCard}>
      <div className={styles.goalTitle}>{goal.title}</div>
      <div className={styles.pointGoalAvatar}>{goal.points}</div>
      <span onClick={() => dispatch(deleteGoal(goal.id))}>x</span>
      <Checkbox
        type="checkbox"
        checked={goal.status === 'completed'}
        onChange={() => dispatch(updateGoalStatus(goal.id, goal.status))}
      />
    </div>
  )
}
