import React from 'react'
import { useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
  const [userName, setUserName] = useState('Kiddo')

  return (
    <>
      <div className={styles.header}>

        <div className={styles.headerGreet}>
          <h1>{userName}</h1>
        </div>
        {/* <div className={styles.avatar}>K</div> */}
      </div>
    </>
  )
}
