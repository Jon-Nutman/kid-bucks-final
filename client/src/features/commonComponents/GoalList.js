import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List, Avatar, Space } from 'antd'
import styles from './GoalList.module.css'
import GoalItem from './goals/GoalItem'
import {
  selectGoals,
  getGoals,
} from './goals/goalSlice'

export default function GoalList(props) {
  console.log(props.goals)
  const dispatch = useDispatch()
  const goals = useSelector(selectGoals)
  useEffect(() => {
    dispatch(getGoals())
  }, [])
  useEffect(() => {
    console.log('%c State from GoalList and the goalSlice', 'color:green;')
    console.table(goals)
  }, [goals])

  return (
    <div className={styles.goalListWrap}>
      {props.goals.map(goal => (
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
