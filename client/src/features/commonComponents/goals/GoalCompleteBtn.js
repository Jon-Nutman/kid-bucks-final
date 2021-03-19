import React from 'react'
import { Button } from 'antd'
import styles from './GoalCompleteBtn.module.css'

export default function GoalCompleteBtn() {
  return (
    <div className={styles.completeBtn}>
      <Button>Mark Goals As Complete</Button>
    </div>
  )
}
