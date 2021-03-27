import React from 'react'
import { useState } from 'react'
import { addChild } from '../parent/userSlice'
import styles from './Header.module.css'
import { PrzBnPointBalance } from './PrzBnPointBalance'
import { useAuth } from '../auth/auth'
export default function Header() {
  const { user } = useAuth()
 

  return (
    <>
      <div className={styles.header}>
        <span className={styles.headerGreet}>
          <h1>{user.username},</h1> your goals await...
        </span>
        <div>
        <PrzBnPointBalance />
        {/* <AddChild /> */}
      
        </div>
        {/* <div className={styles.avatar}>K</div> */}
      </div>
    </>
  )
}
