import React from 'react'
import { FaAdd } from 'react-icons'
import styles from './PrzBnPointBalance.module.css'

export const PrzBnPointBalance = () => {
  return (
    <>
      <div className={styles.balanceWrapper}>
      <h4>total point balance</h4>
      <h1 className={styles.balanceText}> <span>+</span><span>550</span></h1>
      </div>
    </>
  )
}
