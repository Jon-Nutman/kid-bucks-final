import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { List, Avatar, Space } from 'antd'
import GoalItem from './goals/GoalItem'
import { deleteGoalById } from '../commonComponents/goals/goalSlice'
// import { getGoalsByChildId } from './goals/goalSlice'

export default function GoalList(props) {
  const dispatch = useDispatch()
  return (
    <>
      {props.goals.map((goal) => (
        <GoalItem
          key={'goal-' + goal.id}
          goal={goal}
          onDelete={(id) => dispatch(deleteGoalById(id))}
          onStatusChange={props.onStatusChange}
        />
      ))}
    </>
  )
}
