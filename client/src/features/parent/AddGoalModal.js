import React, { useState } from "react"
import Modal from "react-modal"
import { Form, Input, InputNumber, Button } from "antd"
import SwitchablePicker from "./SwitchablePicker"

const { TextArea } = Input

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
}

export default function AddGoalModal(props) {
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

  const [todoTitle, setTodoTitle] = useState("")
  const [todoPoints, setTodoPoints] = useState("")
  const [todoDescription, setTodoDescription] = useState("")
  const [todos, setTodos] = useState({})

  function handleSubmit(e) {
    e.preventDefault()
    // props.MakeTodoObject(todoTitle, todoPoints, todoDescription)
    setTodos({
      title: { todoTitle },
      points: { todoPoints },
      description: { todoDescription },
    })
  }
  console.log(todos)
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
            <div>{todoTitle}</div>
            <Input
              onChange={(e) => setTodoPoints(e.target.value)}
              placeholder="How many points is this goal worth?"
            />
            <div>{todoPoints}</div>
            <SwitchablePicker />
            <TextArea
              onChange={(e) => setTodoDescription(e.target.value)}
              rows={4}
              placeholder="Instructions..."
            />
            <div>{todoDescription}</div>
          </Form>
        </div>
        <Button type="primary" onClick={handleSubmit}>
          Add Goal
        </Button>
        <Button type="primary" onClick={closeModal}>
          Close
        </Button>
      </Modal>
    </div>
  )
}


