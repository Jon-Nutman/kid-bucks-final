import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List, Avatar, Space, Table } from 'antd'
import { SmileTwoTone, CheckCircleOutlined, DeleteOutlined } from '@ant-design/icons'

import GoalItem from './GoalItem'
import {
  deleteGoalById,
  getGoalsByChildId,
  selectGoals,
  updateGoalStatusById,
} from '../../common/goalSlice'
import { useAuth } from '../../auth/auth'

export default function GoalList(props) {
  const dispatch = useDispatch()
  const goals = useSelector(selectGoals)
  const { user } = useAuth()
  const isAdmin = user.is_admin


  const parentActions = [
    {
      title: 'Delete this Goal?',
      dataIndex: '',
      key: 'x',
      render: (item) => (
        <a onClick={() => dispatch(deleteGoalById(item.id, item.child_id))}>
          <DeleteOutlined />
        </a>
      ),
    },
    {
      title: 'Accomplished?',
      dataIndex: '',
      key: 'x',
      render: (item) => (
        <a
          onClick={() =>
            dispatch(updateGoalStatusById(item.id, item.child_id, 'complete'))
          }
        >
          <CheckCircleOutlined />
        </a>
      ),
    },
  ]

  const childActions = [
    {
      title: 'Mark this goal accomplished?',
      dataIndex: '',
      key: 'x',
      render: (item) => (
        <a
          onClick={() =>
            dispatch(updateGoalStatusById(item.id, item.child_id, 'reported'))
          }
        >
          <SmileTwoTone /> done!
        </a>
      ),
    },
  ]

  const userActions = isAdmin ? parentActions : childActions

  const columns = [
    { title: 'Goal', dataIndex: 'title', key: 'title' },
    { title: 'Points', dataIndex: 'points', key: 'age' },
    { title: 'Status', dataIndex: 'status', key: 'address' },
    ...userActions,
  ]

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
