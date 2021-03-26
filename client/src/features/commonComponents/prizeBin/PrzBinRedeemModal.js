import React from 'react'
// import ReactDOM from "react-dom";
import Modal from 'react-modal'
import { Button } from 'antd'
import styles from './PrzBinRedeemModal.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { 
  selectCart,
  selectTotal,
  selectTotalPoints,
  removePrize,
  increment,
  decrement,
  createTransactions,
} from './prizeCartSlice'
import PrizeCart from './PrizeCart'

export default function PrzBinRedeemModal() {
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

  const prizeCart = useSelector(selectCart);
  const total = useSelector(selectTotal);
  const totalPrice = useSelector(selectTotalPoints);
  const dispatch = useDispatch()

  // const onFinish = (values) => {
  //   console.log(values);
  // };
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

  function sendTransactions() {
    console.log('yooooo')
    dispatch(createTransactions(prizeCart))
  }

  return (
    <div>
      <div className={styles.buttonWrap}>
      <Button onClick={openModal}>Your Prize Cart</Button>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
      <ul>
        {prizeCart.map((prize) => (
          <li key={'prizeCart-' + prize.id} className={styles.prizeCartPrize}>
            <img className={styles.imgThumb} src={prize.prize_thumbnail} />
            <div className={styles.prizeCartpTag}>
              <p>{prize.title} | {prize.qty}</p>
              <br />
            </div>
            <button
              className={styles.delBtn}
              onClick={
                () => dispatch(removePrize(prize))
              }
            >
              X
            </button>
            <button
              className={styles.btn}
              onClick={() => dispatch(decrement(prize))}
            >
              -
            </button>
            <button
              className={styles.btn}
              onClick={() => dispatch(increment(prize))}
            >
              +
            </button>
          </li>
        ))}
      </ul>

        <Button type="primary" htmlType="submit" onClick={sendTransactions}>
          Send this to the parents
        </Button>
      </Modal>
    </div>
  )
}
