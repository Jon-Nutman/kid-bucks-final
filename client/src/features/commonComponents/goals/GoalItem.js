import React from 'react'
import Checkbox from '../componentParts/CmpntCheckbox'
import styles from './GoalItem.module.css'

export default function GoalItem(props) {

  const goal = props.goal
  return (
    <>
    <button type="submit" className={styles.goalBtn}>
      <div className={styles.goalItemWrapper}>
      
      <Checkbox
        type="checkbox"
        checked={goal.status.complete}
        onChange={() => props.onStatusChange(goal.id)}
      />
      <div className={styles.goalCard}>
      <div className={styles.flexColumn}>
      <span className={styles.goalTitle}>{goal.title}</span>
      {/* <span className={styles.goalDescript}>{goal.description}</span> */}
      </div>
      <div className={styles.pointGoalAvatar}>        
        {goal.points}
      </div>
      </div>
      </div>
      </button>
    </>
  )
}
