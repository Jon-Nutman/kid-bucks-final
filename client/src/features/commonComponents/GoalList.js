import React from "react"
import { List, Avatar, Space } from "antd"
import styles from "./GoalList.module.css"
import GoalItem from "./goals/GoalItem"

export default function GoalList(props) {
  console.log(props.goals)

  return (
    <div className="goalListWrap">
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
