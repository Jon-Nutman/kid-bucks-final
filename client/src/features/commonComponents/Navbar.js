import React from 'react'
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom'
import { useAuth } from '../auth/auth'

export default function Navbar() {
  const { logout, login } = useAuth()
  const history = useHistory()
  function handleLogout() {
    logout().then(() => {
      history.push('/login')
    })
  }
  const loginParent = (e) => {
    login('parent', 'test').then((r) => {
      history.push('/parent-dashboard')
    })
  }
  const loginChild = (e) => {
    login('child', 'test').then((r) => {
      history.push('/child-dashboard')
    })
  }
  return (
    <nav>
      <ul>
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
