import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPrize } from '../common/prizeSlice'
import Modal from 'react-modal'
import { Form, Input, InputNumber, Button, List } from 'antd'
import request from '../../utils/request'
import {
  approveTransaction,
  selectTransactions,
  denyTransaction,
} from '../common/transactionSlice'

import styles from './TransactionModal.module.css'

const { TextArea } = Input

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}

export default function TransactionModal(props) {
  const transactions = useSelector(selectTransactions)
  const dispatch = useDispatch()
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    setIsOpen(true)
    // dispatch(getTransactions(props))
    // can map with with info
    console.log()
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const obj = {
      status: 'approved',
    }
    dispatch(approveTransaction(obj))
  }

  return (
    <div>
      <Button onClick={openModal}>View Prize Requests</Button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <h1>Prize Requests</h1>
          <Form>
          <List>
      {transactions.map((item) => {
        return (
          <List.Item
            actions={[
              <a
                key="list-loadmore-edit"
                onClick={() => dispatch(approveTransaction(item.id, props.childId))}
              >
                approve
              </a>,
              <a 
              key="list-loadmore-more"
              onClick={() => dispatch(denyTransaction(item.id, props.childId)) }
              >
                deny </a>,
            ]}
          >
            <List.Item.Meta
              // avatar={<Avatar src={item.prize_thumbnail} />}
              title={<a>{item.title}</a>}
              description={<span>{item.points} points</span>}
            />
          </List.Item>
        )
      })}
    </List>
            {/* <ul className={styles.list}>
              {transactions.map((item) => {
                console.log(item)
                return (
                  <li className={styles.list_item} >
                    {item.title}{' '}{item.points}points
                    <Button
                      onClick={() =>
                        dispatch(approveTransaction(item.id, props.childId))
                      }
                    >
                      approve
                    </Button>
                  </li>
                )
              })}
            </ul> */}
          </Form>
        </div>
        {/* <Button type type="primary" htmlType="submit" onClick={handleSubmit}>
          Approve
        </Button> */}
        <Button type type="primary" htmlType="submit" onClick={closeModal}>
          Close
        </Button>
      </Modal>
    </div>
  )
}
