import React from 'react'
import { List, Avatar, Space } from 'antd'
import styles from './GoalList.module.css'
import GoalItem from './goals/GoalItem'
import request from '../../utils/request'
export default function GoalList(props) {
  console.log(props.goals)

  const yourGoals = request.get('/goals/:childId')
  console.log(yourGoals)

  return (
    <div className={styles.goalListWrap}>
      {/* {props.goals.map(goal => (
        <GoalItem 
        key={'goal-' + goal.id} 
        className={styles.goalContainer} 
        goal={goal}
        onDelete={props.onDelete}
        onStatusChange={props.onStatusChange}
        />
      ))} */}
    </div>
  )
}
