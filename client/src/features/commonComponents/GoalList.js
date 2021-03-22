import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { List, Avatar, Space } from 'antd'
import styles from './GoalList.module.css'
import GoalItem from './goals/GoalItem'
// import { getGoalsByChildId } from './goals/goalSlice'

export default function GoalList(props) {
  return (
    <div className={styles.goalListWrap}>
      {props.goals.map((goal) => (
        <GoalItem
          key={'goal-' + goal.id}
          className={styles.goalContainer}
          goal={goal}
          onDelete={props.onDelete}
          onStatusChange={props.onStatusChange}
        />
      ))}
    </div>
  )
}
