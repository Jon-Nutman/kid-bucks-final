import React from 'react'
// import ReactDOM from "react-dom";
import Modal from 'react-modal'
import { ShoppingCartOutlined } from '@ant-design/icons'
import { Button, Space } from 'antd'
import styles from './PrzBinRedeemModal.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  selectCart,
  selectTotal,
  selectTotalPoints,
  createTransactions,
} from './prizeCartSlice'
import {
  selectBalance,
  getBalanceByChildId,
} from '../../common/transactionSlice'
import PrizeCart from './PrizeCart'

export default function PrzBinRedeemModal(props) {
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
  const balance = useSelector(selectBalance)
  const prizeCart = useSelector(selectCart)
  const total = useSelector(selectTotal)
  const totalPoints = useSelector(selectTotalPoints)
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

  function sendTransactions() {
    dispatch(createTransactions(prizeCart)).then(() => {
      closeModal()
      dispatch(getBalanceByChildId(props.childId))
    })
  }

  // function cancelTransaction() {
  //   dispatch(clearCart(prizeCart))
  //     closeModal()
  //   })
  // }

  return (
    <div>
      <div className={styles.buttonWrap}>
        <Button onClick={openModal}>
          <ShoppingCartOutlined />| {total} prizes in Cart
        </Button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <PrizeCart />
        <Space>
          <Button
            type="primary"
            htmlType="submit"
            disabled={balance < totalPoints}
            onClick={sendTransactions}
          >
            Request Prizes
          </Button>
          <Button type="primary" htmlType="submit" onClick={closeModal}>
            Cancel
          </Button>
        </Space>
      </Modal>
    </div>
  )
}
