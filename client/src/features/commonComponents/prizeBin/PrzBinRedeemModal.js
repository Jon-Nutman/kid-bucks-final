import React from 'react'
import ReactDOM from "react-dom"
import Modal from "react-modal"
import { Form, Input, InputNumber, Button } from "antd"


export default function PrzBinRedeemModal() {

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
  
    const onFinish = (values) => {
        console.log(values)
      }
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
          <Button onClick={openModal}>Redeem Points +</Button>
    
          <Modal
            isOpen={modalIsOpen}
            onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
          >
            <div>
                
            </div>
            <Button type type="primary" htmlType="submit" onClick={closeModal}>
              Submit
            </Button>
          </Modal>
        </div>
      )
    }