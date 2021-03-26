import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List, Avatar, Space, Table } from 'antd'
import GoalItem from './GoalItem'
import {
  deleteGoalById,
  getGoalsByChildId,
  selectGoals,
  updateGoalStatusById
} from '../../common/goalSlice'


export default function GoalList(props) {
  const dispatch = useDispatch()

  // useEffect(() => {
  //   dispatch(getGoalsByChildId(props.childId))
  // }, [props.childId])

  const columns = [
    { title: 'Goal', dataIndex: 'title', key: 'title' },
    { title: 'Points', dataIndex: 'points', key: 'age' },
    { title: 'Status', dataIndex: 'status', key: 'address' },
    {
      title: 'Action Parent',
      dataIndex: '',
      key: 'x',
      render: (item) => <a
      onClick={() => dispatch(deleteGoalById(item.id, item.child_id))}>Delete</a>,
    },
    {
      title: 'Action Parent',
      dataIndex: '',
      key: 'x',
      render: (item) => (
        <a
          onClick={() =>
            dispatch(updateGoalStatusById(item.id, item.child_id, 'complete'))
          }
        >
          Approved
        </a>
      ),
    },

    {
      title: 'Action Child',
      dataIndex: '',
      key: 'x',
      render: (item) => <a
      onClick={() =>
        dispatch(updateGoalStatusById(item.id, item.child_id, 'reported'))
      }>Redeem to Parents</a>,
    },
  ]

  const goals = useSelector(selectGoals)

  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (goal) => (
            <p style={{ margin: 0 }}>{goal.description}</p>
          ),
          rowExpandable: (goal) => goal.name !== 'Not Expandable',
        }}
        dataSource={goals}
      />
    </>
  )
}

{
  /* <GoalItem
key={'goal-' + goal.id}
goal={goal}
onDelete={(id) => dispatch(deleteGoalById(id))}
onStatusChange={props.onStatusChange}
/> */
}
