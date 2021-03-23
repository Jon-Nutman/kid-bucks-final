import React, { useState } from 'react'
import styles from './Prize.module.css'
import { useDispatch } from 'react-redux'
import { addPrizeToCart } from './prizeCartSlice'
import { FaPlus } from 'react-icons/fa'

export default function Prize(props) {
  const dispatch = useDispatch()

  return (
    <>
    <button type="submit" className={styles.prizeCard}>
      <span key={props.id}>
        <p>{props.title}</p>
        <span className={styles.points}>{props.points}</span> <br />
        <button
          className={styles.prizeCard}
          onClick={() => dispatch(addPrizeToCart(props.id))}
        >
          <FaPlus /> Prize to Cart
        </button>
      </span>
      </button>
      </>
  )
}
