import React, { useState } from 'react'
import styles from './PrzBinRedeemModal.module.css'
import { useDispatch } from 'react-redux'
import { addPrizeToCart, selectPrizes } from './prizeCartSlice'

export default function Prize(props) {
  const dispatch = useDispatch()

  return (
    <ul className={styles.prizeCard}>
      <li key={props.id}>
        <img className={styles.imgThumb} src={props.prize.img.normal} /> <br />
        <p>{props.prize.title}</p> <br />
        {<p className={styles.yellowline}></p>}
        {<span className={styles.points}>{props.prize.points}</span>} <br />
        <button
          className={styles.addBtn}
          onClick={() => dispatch(addPrizeToCart(props.prize))}
        >
          Add Prize
        </button>
      </li>
    </ul>
  )
}
