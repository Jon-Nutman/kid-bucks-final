import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import request from '../../utils/request'
import { Form, Input, Button } from 'antd'
import { useAuth } from './auth'

export function LoginSignup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const { login } = useAuth()

  const handleSubmit = (e) => {
    console.log('submitted', password, username)
    // e.preventDefault();
    login(username, password).then((r) => {
      history.push('/parent-dashboard')
    })
  }
  function handleClick() {
    setUsername('')
    setPassword('')
  }

  return (
    <>
      <Form onFinish={handleSubmit}>
        <Form.Item>
          <Input
            // label={username}
            // type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Input
            // label={password}
            // type="text"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  )
}
