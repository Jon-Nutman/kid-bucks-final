import React from 'react'
import { useState } from 'react'
import styles from './Header.module.css'
import { PrzBnPointBalance } from './PrzBnPointBalance'

export default function Header() {
  const [userName, setUserName] = useState('Kiddo')

  return (
    <>
      <div className={styles.header}>

        <span className={styles.headerGreet}>
          <h1>{userName},</h1> your goals await...
        </span>
        <div>
        <PrzBnPointBalance />
        </div>
        {/* <div className={styles.avatar}>K</div> */}
      </div>
    </>
  )
}
