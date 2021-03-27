import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addGoal } from '../common/goalSlice'
import Modal from 'react-modal'
import { Form, Input, InputNumber, Button } from 'antd'
import SwitchablePicker from './SwitchablePicker'


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

export default function AddGoalModal(props) {
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

  const [todoTitle, setTodoTitle] = useState('')
  const [todoPoints, setTodoPoints] = useState('')
  const [todoDescription, setTodoDescription] = useState('')
  const [todos, setTodos] = useState({})
  const [type, setType] = useState('time')
  const [time, setTime] = useState()

  function handleSubmit(e) {
    e.preventDefault()
    const obj = {
      title: todoTitle,
      description: todoDescription,
      deadline: '01-20-2020',
      points: todoPoints,
      status: 'not_started',
      parent_id: 1,
      child_id: props.childId,
    }
    console.log(obj)
    dispatch(addGoal(obj))
    setIsOpen(false)
    // request.post('/goals', obj)
  }

  return (
    <div>
      <Button onClick={openModal}>Add Goal +</Button>

      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <div>
          <h1>Add Goal Modal</h1>
          <Form onSubmit={handleSubmit}>
            <Input
              onChange={(e) => setTodoTitle(e.target.value)}
              placeholder="What do you want you minion to accomplish?"
            />
            <InputNumber
              onChange={setTodoPoints}
              placeholder="Points"
            />

            {/* <SwitchablePicker type={type} onChange={setType} /> */}
            <TextArea
              onChange={(e) => setTodoDescription(e.target.value)}
              rows={4}
              placeholder="Instructions..."
            />
          </Form>
        </div>
        <Button type="primary" onClick={handleSubmit}>
          Add Goal
        </Button>
        {/* <Button type="primary" onClick={closeModal}>
          Close
        </Button> */}
      </Modal>
    </div>
  )
}
