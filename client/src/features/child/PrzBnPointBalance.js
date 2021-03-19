import React from 'react'
import styles from './PrzBnPointBalance.module.css'

export const PrzBnPointBalance = () => {
  return (
    <>
      <div className={styles.balanceWrapper}>
        <h4>Point Balance</h4>
        <h1 className={styles.balance}>50 pts</h1>
      </div>
    </>
  )
}
