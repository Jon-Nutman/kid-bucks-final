import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link, useParams } from 'react-router-dom'

import AuthRoute from './features/auth/AuthRoute'
import { Users } from './features/users/Users'
import LoginTab from './features/auth/LoginTab'
import ParentDashboardPage from './features/parent/ParentDashboardPage'
import ChildDashboardPage from './features/child/ChildDashboardPage'
import Register from './features/auth/Register'
import 'antd/dist/antd.css'
import ModalTest from './features/sandbox/Sandbox'
import Navbar from './features/commonComponents/Navbar'

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route exact path="/">
            <LoginTab />
          </Route>
          <Route path="/login">
            <LoginTab />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route path="/users">
            <Users />
          </Route>
          <AuthRoute path="/parent-dashboard">
            <ParentDashboardPage />
          </AuthRoute>
          <AuthRoute path="/child-dashboard">
            <ChildDashboardPage />
          </AuthRoute>
          <Route path="/sandbox">
            <ModalTest />
          </Route>
          <AuthRoute path="/protected">
            <h2>test</h2>
          </AuthRoute>
        </Switch>
      </div>
    </Router>
  )
}
