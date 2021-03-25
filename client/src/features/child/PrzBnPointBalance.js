import React, { useEffect } from 'react'
import { FaAdd } from 'react-icons'
import styles from './PrzBnPointBalance.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { getBalanceByChildId, selectBalance } from '../common/transactionSlice'

export const PrzBnPointBalance = () => {
  const dispatch = useDispatch()
  const balance = useSelector(selectBalance)
  useEffect(() => {
    dispatch(getBalanceByChildId(2))
  }, [])
  return (
    <>
      <div className={styles.balanceWrapper}>
      <h4>total point balance</h4>
      <h1 className={styles.balanceText}> <span>+</span><span>{balance}</span></h1>
      </div>
    </>
  )
}
