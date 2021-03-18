import React from "react";
import ReactDOM from "react-dom";
import Modal from "react-modal";
import { Form, Input, InputNumber, Button } from "antd";
import styles from "./PrzBinRedeemModal.module.css";

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
  };

  const onFinish = (values) => {
    console.log(values);
  };
  var subtitle;
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const prizeCart = [
    {
      id: 1,
      points: 5,
      title: "robux",
      description: "1000 robux",
      prize_thumbnail:
        "https://m.media-amazon.com/images/I/71QMkXmLVCL._SY606_.jpg",
      prize_bin_id: 1,
    },
    {
      id: 1,
      points: 5,
      title: "robux",
      description: "1000 robux",
      prize_thumbnail:
        "https://m.media-amazon.com/images/I/71QMkXmLVCL._SY606_.jpg",
      prize_bin_id: 1,
    },
    {
      id: 1,
      points: 5,
      title: "robux",
      description: "1000 robux",
      prize_thumbnail:
        "https://m.media-amazon.com/images/I/71QMkXmLVCL._SY606_.jpg",
      prize_bin_id: 1,
    },
  ];

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
        <ul>
          {prizeCart.map((prize) => (
            <li className={styles.prizeCartPrize}>
              <img className={styles.imgThumb} src={prize.prize_thumbnail} />
              <div className={styles.prizeCartpTag}>
                <p>{prize.title}</p>
                <br />
              </div>
              <button
                className={styles.delBtn}
                onClick={() =>
              //  dispatch(removeFromPrizeCart(prize))}
              console.log("they want to delete this prize")}
              >
                X
              </button>
              <button
                className={styles.btn}
                onClick={() => 
                  // dispatch(decrePrize(prize))}
                  console.log("they want less of this prize")}
              >
                -
              </button>
              <button
                className={styles.btn}
                onClick={() => 
                  // dispatch(increProduct(prize))}
                  console.log("they want more of this prize")}
              >
                +
              </button>
            </li>
          ))}
        </ul>
        <Button type type="primary" htmlType="submit" onClick={closeModal}>
          Submit
        </Button>
      </Modal>
    </div>
  );
}
