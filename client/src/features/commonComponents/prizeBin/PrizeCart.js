// This all was moved to Prize Redeem Modal


import React from 'react'
import { Table } from 'antd'
import Prize from './Prize'
import { useSelector, useDispatch } from 'react-redux'
import styles from './PrizeCart.module.css'
import {
  selectCart,
  selectTotal,
  selectTotalPoints,
  increment,
  decrement,
  removePrize,
  clearCart
} from './prizeCartSlice'
import { selectBalance } from '../../common/transactionSlice'

export default function PrizeCart(props) {
  const dispatch = useDispatch()
  const prizeCart = useSelector(selectCart)
  const total = useSelector(selectTotal)
  const totalPoints = useSelector(selectTotalPoints)
  const balance = useSelector(selectBalance)

  console.log('your quantity is' + ' ' + prizeCart.quantity)

  const userActions = [
    {
        title: '',
        dataIndex: '',
        key: 'x',
        render: (prize) => (
            <a
            disabled={prizeCart.quantity <= 0}
            onClick={() => dispatch(decrement(prize))}
            >
            -
            </a>
        ),
    },
    {
        title: '',
        dataIndex: '',
        key: 'x',
        render: (prize) => (
            <a
            disabled={balance < totalPoints}
            onClick={() => dispatch(increment(prize))}
            >
            +
            </a>
        ),
    },
    {
        title: '',
        dataIndex: '',
        key: 'x',
        render: (prize) => (
          <a
          onClick={() => dispatch(removePrize(prize))}>
            Remove
          </a>
        ),
      },
  
  ]


  console.log(props)

  const columns = [
    { title: 'Quantity', dataIndex: 'quantity', key: 'quantity' },
    { title: 'Prize', dataIndex: 'title', key: 'title' },
    { title: 'Points', dataIndex: 'points', key: 'points' },
    { title: 'Total Points', dataIndex: 'total', key: 'total' },

    ...userActions,
  ]

  const cart = useSelector(selectCart)

  return (
    <>
      <Table
        columns={columns}
        expandable={{
          expandedRowRender: (prizeCart) => (
            <p style={{ margin: 0 }}>{prizeCart.description}</p>
          ),
          rowExpandable: (prizeCart) => prizeCart.name !== 'Not Expandable',
        }}
        dataSource={prizeCart}
      />
    </>
  )
}
