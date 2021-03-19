import React from 'react'
import Checkbox from '../componentParts/CmpntCheckbox'
import styles from './GoalItem.module.css'

export default function GoalItem(props) {
  // const obj = {
  //   title: todoTitle,
  //   description: todoDescription,
  //   deadline: '01-20-2020',
  //   points: todoPoints,
  //   status: 'not_started',
  //   parent_id: 1,
  //   child_id: 2,
  // }

  const goal = props.goal
  return (
    <div className={styles.goalCard}>
      <div className={styles.goalTitle}>{goal.title}</div>
      <div className={styles.pointGoalAvatar}>{goal.points}</div>
      <span onClick={() => props.onDelete(goal.id)}>x</span>
      <Checkbox
        type="checkbox"
        checked={goal.status.complete}
        onChange={() => props.onStatusChange(goal.id)}
      />
    </div>
  )
}
