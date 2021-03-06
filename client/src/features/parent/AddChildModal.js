import React, { useState } from 'react'
import { Form, Input, InputNumber, Button } from 'antd'
import { useDispatch } from 'react-redux'
import { addChild } from './userSlice'

const layout = {
  // labelCol: {
  //   span: 8,
  // },
  // wrapperCol: {
  //   span: 16,
  // },
}
const validateMessages = {
  required: '${label} is required!',
  types: {
    email: '${label} is not a valid email!',
    number: '${label} is not a valid number!',
  },
  number: {
    range: '${label} must be between ${min} and ${max}',
  },
}

export default function AddChild() {
  const dispatch = useDispatch()
  const [childName, setChildName] = useState('')
  const [childUsername, setUsername] = useState('')
  const [childPassword, setPassword] = useState('')

  const onFinish = (values) => {
    console.log(values)
  }
  function handleSubmit(e) {
    e.preventDefault()
    const obj = {
      username: childUsername,
      password: childPassword,
    }
    console.log(obj)

    dispatch(addChild(obj))
    setChildName('')
    setUsername('')
    setPassword('')

    // request.post('/registration/child', obj)
  }

  return (
    <div>
      <h1>Add a Child</h1>
      <p>Fill out this form to create an account for your child. </p>
      <div>
        <Form
          {...layout}
          name="nest-messages"
          validateMessages={validateMessages}
        >
          <Form.Item
            // name={['user', 'name']}
            // label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input
              placeholder="Name"
              value={childName}
              onChange={(e) => setChildName(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            // label="Username"
            // name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder="Username"
              value={childUsername}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            // label="Password"
            // name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder="Password"
              value={childPassword}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>

          <Form.Item
            // name={['user', 'age']}
            // label="Age(optional)"
            rules={[
              {
                type: 'number',
                min: 0,
                max: 99,
              },
            ]}
          ></Form.Item>
        </Form>
      </div>
      <Button htmlType="submit" type="primary" onClick={handleSubmit}>
        Add Child
      </Button>
    </div>
  )
}
