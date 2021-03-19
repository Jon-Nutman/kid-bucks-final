import React, { useState } from 'react'
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
  var subtitle
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
  const [prizePoints, setPrizePoints] = useState('')
  const [prizeDescription, setPrizeDescription] = useState('')
  const [prizes, setPrizes] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    const obj = {
      title: prizeTitle,
      points: prizePoints,
      description: prizeDescription,
      prize_thumbnail: 'https://placedog.net/500',
    }
    console.log(obj)

    request.post('/prizes', obj)
  }

  return (
    <div>
      <Button onClick={openModal}>Add Prize +</Button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <h1>Add Prize</h1>
          <Form>
            <Input
              onChange={(e) => setPrizeTitle(e.target.value)}
              placeholder="Add Prize Name Here"
            />
            <Input
              onChange={(e) => setPrizePoints(e.target.value)}
              placeholder="Points"
            />
            <TextArea
              onChange={(e) => setPrizeDescription(e.target.value)}
              rows={4}
              placeholder="description..."
            />
          </Form>
        </div>
        <Button type type="primary" htmlType="submit" onClick={handleSubmit}>
          Add Prize
        </Button>
        <Button type type="primary" htmlType="submit" onClick={closeModal}>
          Close
        </Button>
      </Modal>
    </div>
  )
}
