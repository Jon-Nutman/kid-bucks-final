import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteGoal, updateGoalStatus } from './goalSlice'
import Checkbox from '../componentParts/CmpntCheckbox'
import styles from './GoalItem.module.css'

export default function GoalItem({title, points, status}) {

  const dispatch = useDispatch()
  const goal = {goal}
  return (
    <div className={styles.goalCard}>
      <div className={styles.goalTitle}>{title}</div>
      <div className={styles.pointGoalAvatar}>{points}</div>
      <span onClick={() => dispatch(deleteGoal(goal.id))}>x</span>
      <Checkbox
        type="checkbox"
        checked={status === 'completed'}
        onChange={() => dispatch(updateGoalStatus(goal.id, status))}
      />
    </div>
  )
}
