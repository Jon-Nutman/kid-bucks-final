import React from "react"
import Modal from "react-modal"
import { Form, Input, InputNumber, Button } from "antd"


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

export default function ModalTest() {
  
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
      <Form>
        <Input placeholder="Add Prize Name Here" />
        <InputNumber placeholder="Points" />
        <TextArea rows={4} placeholder="description..." />
      </Form>
    </div>
        <Button type type="primary" htmlType="submit" onClick={closeModal}>
          Add Prize
        </Button>
      </Modal>
    </div>
  )
}
