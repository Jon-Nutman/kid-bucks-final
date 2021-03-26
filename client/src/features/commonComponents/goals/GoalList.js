import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { List, Avatar, Space, Table } from 'antd'
import GoalItem from './GoalItem'
import { deleteGoalById, getGoalsByChildId, selectGoals } from '../../common/goalSlice'

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
      render: () => <a>Delete</a>,
    },
    {
      title: 'Action Parent',
      dataIndex: '',
      key: 'x',
      render: () => <a>Approved</a>,
    },

    {
      title: 'Action Child',
      dataIndex: '',
      key: 'x',
      render: () => <a>Redeem to Parents</a>,
    },

  ];
  
  const goals = useSelector(selectGoals)

  
  return (
    <>
     <Table
          columns={columns}
          expandable={{
            expandedRowRender: goal => <p style={{ margin: 0 }}>{goal.description}</p>,
            rowExpandable: goal => goal.name !== 'Not Expandable',
          }}
          dataSource={goals}
        />
      
    </>
  )
}


{/* <GoalItem
key={'goal-' + goal.id}
goal={goal}
onDelete={(id) => dispatch(deleteGoalById(id))}
onStatusChange={props.onStatusChange}
/> */}
