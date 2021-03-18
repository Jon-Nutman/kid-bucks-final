import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AuthRoute from "./features/auth/AuthRoute";
import { Counter } from "./features/counter/Counter";
import { Users } from "./features/users/Users";
import { LoginSignup } from "./features/auth/LoginSignup";
import LoginTab from "./features/auth/LoginTab";
import ParentDashboardPage from "./features/parent/ParentDashboardPage";
import ChildDashboardPage from "./features/child/ChildDashboardPage";
import Register from "./features/register/Register";
import "antd/dist/antd.css";
import ModalTest from "./features/sandbox/Sandbox";

export default function App() {
  return (
    <Router>
      <div>
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
          </ul>
        </nav>

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
  );
}
