import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { List, Avatar, Space } from 'antd'
import styles from './GoalList.module.css'
import GoalItem from './goals/GoalItem'
import { deleteGoalById } from '../commonComponents/goals/goalSlice'
// import { getGoalsByChildId } from './goals/goalSlice'

export default function GoalList(props) {
  const dispatch = useDispatch()
  return (
    <div className={styles.goalListWrap}>
      {props.goals.map((goal) => (
        <GoalItem
          key={'goal-' + goal.id}
          className={styles.goalContainer}
          goal={goal}
          onDelete={(id) => dispatch(deleteGoalById(id))}
          onStatusChange={props.onStatusChange}
        />
      ))}
    </div>
  )
}
