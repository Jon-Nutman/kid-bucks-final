import React from 'react'
import { Button } from 'antd'
import styles from './GoalCompleteBtn.module.css'

export default function GoalCompleteBtn() {
  return (
    <>
      <Button className={styles.completeBtn}>Mark Goals As Complete</Button>
    </>
  )
}
