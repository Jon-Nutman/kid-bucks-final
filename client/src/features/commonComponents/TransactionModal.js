import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPrize } from '../common/prizeSlice'
import Modal from 'react-modal'
import { Form, Input, InputNumber, Button } from 'antd'
import request from '../../utils/request'

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

export default function AddPrizeModal() {
  const dispatch = useDispatch()
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    setIsOpen(true)
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false)
  }
  const [prizeTitle, setPrizeTitle] = useState('')
  

  function handleSubmit(e) {
    e.preventDefault()
    const obj = {
      
    }
    // dispatch(approveTransaction(obj))
    // request.post('/prizes', obj)
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
                <li>
                    prize 1
                </li>
                <li>
                    prize 2
                </li>
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
