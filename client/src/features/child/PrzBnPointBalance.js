import React, { useEffect } from 'react'
import { FaAdd } from 'react-icons'
import styles from './PrzBnPointBalance.module.css'
import { useSelector, useDispatch } from 'react-redux'
import {
  getBalanceByChildId,
  selectBalance,
  selectDeduction,
} from '../common/transactionSlice'
import { useAuth } from '../auth/auth'

export const PrzBnPointBalance = () => {
  const dispatch = useDispatch()
  const balance = useSelector(selectBalance)
  const deduction = useSelector(selectDeduction)
  const { user } = useAuth()
  console.log(user)
  useEffect(() => {
    dispatch(getBalanceByChildId(user.id))
  }, [])
  return (
    <>
      <div className={styles.balanceWrapper}>
        {/* <h4>total point balance</h4> */}
        <h1 className={styles.balanceText}>
          <span>+</span>
          <span>{balance}</span>
        </h1>
        {deduction > 0 && (
          <h4 className={styles.deductionText}>
            <span>(-</span>
            <span>{deduction})</span>
          </h4>
        )}
        {deduction > 0 && (
          <div>
            <h4 className={styles.resultText}>
              <span className={styles.resultBalance}>
                {balance - deduction} points left
              </span>
            </h4>
          </div>
        )}
      </div>
    </>
  )
}
