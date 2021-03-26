import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addPrize } from '../common/prizeSlice'
import Modal from 'react-modal'
import { Form, Input, InputNumber, Button } from 'antd'
import request from '../../utils/request'
import {
  approveTransaction,
  selectTransactions,
} from '../common/transactionSlice'

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
            <ul>
              {transactions.map((item) => {
                console.log(item)
                return (
                  <li>
                    {item.id}{' '}
                    <button
                      onClick={() =>
                        dispatch(approveTransaction(item.id, props.childId))
                      }
                    >
                      approve
                    </button>
                  </li>
                )
              })}
            </ul>
          </Form>
        </div>
        <Button type type="primary" htmlType="submit" onClick={handleSubmit}>
          Approve
        </Button>
        <Button type type="primary" htmlType="submit" onClick={closeModal}>
          Close
        </Button>
      </Modal>
    </div>
  )
}
