import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Link,
  useHistory,
  useParams,
} from 'react-router-dom'
import { useAuth } from '../auth/auth'
import Logo from './Logo/Logo'
import styles from './Navbar.module.css'

export default function Navbar(props) {
  const { logout, login } = useAuth()
  const history = useHistory()
  function handleLogout() {
    logout().then(() => {
      history.push('/login')
    })
  }
  const loginParent = (e) => {
    login('larry', 'test').then((r) => {
      history.push('/parent-dashboard')
    })
  }
  const loginChild = (e) => {
    login('timmy', 'test').then((r) => {
      history.push('/child-dashboard')
    })
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Logo />
      </div>
      <ul className={styles.list}>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <p onClick={loginParent}>parent</p>
        </li>
        <li>
          <p onClick={loginChild}>child</p>
        </li>
        <li onClick={handleLogout}>logout</li>
      </ul>
    </nav>
  )
}
