import React from 'react'
import { BrowserRouter as Router, Link, useHistory } from 'react-router-dom'
import { useAuth } from '../auth/auth'

export default function Navbar() {
  const { logout } = useAuth()
  const history = useHistory()
  function handleLogout() {
    logout().then(() => {
      history.push('/login')
    })
  }
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Login</Link>
        </li>
        <li>
          <Link to="/parent-dashboard">Pavlovs</Link>
        </li>
        <li>
          <Link to="/child-dashboard">and the Dogs</Link>
        </li>
        <li onClick={handleLogout}>logout</li>
      </ul>
    </nav>
  )
}
