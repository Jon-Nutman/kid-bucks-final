import React from 'react'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import request from '../../utils/request'
import { Form, Input, Button } from 'antd'
import { useAuth } from './auth'

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

//   const handleSubmit = (e) => {
//     console.log('submitted', password, username)
//     // e.preventDefault();
//     login(username, password).then((r) => {
//       history.push('/parent-dashboard')
//     })
//   }

export function LoginSignup() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const history = useHistory()
  const { login, decodeUser } = useAuth()

  const onFinish = (values) => {
    console.log(values)
  }
  // function handleSubmit(e) {
  //   e.preventDefault()
  //   const obj = {
  //     name: childName,
  //     username: childUsername,
  //     password: childPassword,
  //   }
  //   console.log(obj)

  //   request.post('/registration/child', obj)

  const handleSubmit = (e) => {
    console.log('submitted', password, username)
    // e.preventDefault();
    login(username, password).then((r) => {
      const user = decodeUser(r.data.token)
      console.log(user)
      // if(user.is_admin == true){
      //   history.push('/parent-dashboard')
      // } else {
      //   history.push('/child-dashboard')
      // }
      {
        user.is_admin
          ? history.push('/parent-dashboard')
          : history.push('/child-dashboard')
      }
    })
  }
  return (
    <div>
      <div>
        <p>Please enter your username and password login. </p>
      </div>
      <div>
        <Form
          {...layout}
          name="nest-messages"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <Form.Item
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Item>
          <div>
            <Button
              onClick={handleSubmit}
              type="submit"
              type="primary"
              htmlType="submit"
            >
              Login
            </Button>
          </div>
        </Form>
      </div>
    </div>
  )
}

// export function LoginSignup() {
//   const [username, setUsername] = useState('')
//   const [password, setPassword] = useState('')
//   const history = useHistory()
//   const { login } = useAuth()

//   const handleSubmit = (e) => {
//     console.log('submitted', password, username)
//     // e.preventDefault();
//     login(username, password).then((r) => {
//       history.push('/parent-dashboard')
//     })
//   }
//   function handleClick() {
//     setUsername('')
//     setPassword('')
//   }

//   return (
//     <>

//       <Form onFinish={handleSubmit}>
//         <Form.Item>
//           <Input
//             // label={username}
//             // type="text"
//             placeholder="Username"
//             onChange={(e) => setUsername(e.target.value)}
//           />
//         </Form.Item>

//         <Form.Item>
//           <Input
//             // label={password}
//             // type="text"
//             placeholder="Password"
//             onChange={(e) => setPassword(e.target.value)}
//           />
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" htmlType="submit">
//             Submit
//           </Button>
//         </Form.Item>
//       </Form>
//     </>
//   )
// }
