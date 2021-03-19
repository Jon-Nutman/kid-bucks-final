import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import Modal from 'react-modal'
import { Form, Input, InputNumber, Button } from 'antd'
import request from '../../utils/request'

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
  const [childName, setChildName] = useState('')
  const [childUsername, setUsername] = useState('')
  const [childPassword, setPassword] = useState('')

  const onFinish = (values) => {
    console.log(values)
  }
  function handleSubmit(e) {
    e.preventDefault()
    const obj = {
      name: childName,
      username: childUsername,
      password: childPassword,
    }
    console.log(obj)

    request.post('/registration/child', obj)
  }

  return (
    <div>
      <h1>Add a Child</h1>
      <p>Fill out this form to create an account for your child. </p>
      <div>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name={['user', 'name']}
            label="Name"
            rules={[
              {
                required: true,
              },
            ]}
          >
            <Input onChange={(e) => setChildName(e.target.value)} />
          </Form.Item>

          <Form.Item
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input onChange={(e) => setUsername(e.target.value)} />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password onChange={(e) => setPassword(e.target.value)} />
          </Form.Item>

          <Form.Item
            name={['user', 'age']}
            label="Age(optional)"
            rules={[
              {
                type: 'number',
                min: 0,
                max: 99,
              },
            ]}
          >
            <InputNumber />
          </Form.Item>
          <Form.Item
            wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
          ></Form.Item>
        </Form>
      </div>
      <Button
        onClick={handleSubmit}
        type="submit"
        type="primary"
        htmlType="submit"
      >
        Add Child
      </Button>
    </div>
  )
}
