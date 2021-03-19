import { Form, Input, InputNumber } from 'antd'
import React from 'react'
import { Tabs } from 'antd'
import AddGoalModal from '../parent/AddGoalModal'
import AddPrizeModal from '../parent/AddPrizeModal'
import GoalList from '../commonComponents/GoalList'
import PrizesList from '../commonComponents/PrizesList'
import styles from '../parent/Tabs.module.css'
// import ModalTest from '../parent/AddChildModal'
const { TabPane } = Tabs

const onFinish = (values) => {
  console.log(values)
}
function callback(key) {
  console.log(key)
}
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

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
}
export default function ChildTab() {
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    setIsOpen(true)
  }
  return (
    <div>
      <Tabs onChange={callback} type="card">
        <TabPane className={styles.componentContainer} tab="Child 1" key="1">
          <div>
            <AddGoalModal />
            <h1>Goal List</h1>
            <GoalList />
          </div>
          <div>
            <AddPrizeModal />
            <h1>Prize List</h1>
            <PrizesList />
          </div>
        </TabPane>
        <TabPane className={styles.componentContainer} tab="Child 2" key="2">
          <div>
            <AddGoalModal />
            <h1>Goal List</h1>
            <GoalList />
          </div>
          <div>
            <AddPrizeModal />
            <h1>Prize List</h1>
            <PrizesList />
          </div>
        </TabPane>
        <TabPane
          onClick={openModal}
          className={styles.componentContainer}
          tab="Add Child +"
          key="3"
        >
          <div>
            <div>
              <Form
                // {...layout}
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
                  <Input />
                </Form.Item>

                <Form.Item
                  label="Username"
                  name="username"
                  rules={[
                    { required: true, message: 'Please input your username!' },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Password"
                  name="password"
                  rules={[
                    { required: true, message: 'Please input your password!' },
                  ]}
                >
                  <Input.Password />
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
          </div>
        </TabPane>
      </Tabs>
      ,
    </div>
  )
}

// import React from "react"
// import ReactDOM from "react-dom"
// import Modal from "react-modal"
// import { Form, Input, InputNumber, Button } from "antd"

// const layout = {
//   // labelCol: {
//   //   span: 8,
//   // },
//   // wrapperCol: {
//   //   span: 16,
//   // },
// }
// const validateMessages = {
//   required: "${label} is required!",
//   types: {
//     email: "${label} is not a valid email!",
//     number: "${label} is not a valid number!",
//   },
//   number: {
//     range: "${label} must be between ${min} and ${max}",
//   },
// }

// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//   },
// }

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
//   Modal.setAppElement('#yourAppElement')

// export default function ModalTest() {
//   const onFinish = (values) => {
//     console.log(values)
//   }
//   var subtitle
//   const [modalIsOpen, setIsOpen] = React.useState(false)
//   function openModal() {
//     setIsOpen(true)
//   }

//   function afterOpenModal() {
//     // references are now sync'd and can be accessed.
//   }

//   function closeModal() {
//     setIsOpen(false)
//   }

//   return (
//     <div>
//       <Button onClick={openModal}>Add Child +</Button>

//       <Modal
//         isOpen={modalIsOpen}
//         onAfterOpen={afterOpenModal}
//         onRequestClose={closeModal}
//         style={customStyles}
//         contentLabel="Example Modal"
//       >
//         <div>
//           <Form
//             // {...layout}
//             name="nest-messages"
//             onFinish={onFinish}
//             validateMessages={validateMessages}
//           >
//             <Form.Item
//               name={["user", "name"]}
//               label="Name"
//               rules={[
//                 {
//                   required: true,
//                 },
//               ]}
//             >
//               <Input />
//             </Form.Item>

//             <Form.Item
//               label="Username"
//               name="username"
//               rules={[
//                 { required: true, message: "Please input your username!" },
//               ]}
//             >
//               <Input />
//             </Form.Item>
//             <Form.Item
//               label="Password"
//               name="password"
//               rules={[
//                 { required: true, message: "Please input your password!" },
//               ]}
//             >
//               <Input.Password />
//             </Form.Item>

//             <Form.Item
//               name={["user", "age"]}
//               label="Age(optional)"
//               rules={[
//                 {
//                   type: "number",
//                   min: 0,
//                   max: 99,
//                 },
//               ]}
//             >
//               <InputNumber />
//             </Form.Item>
//             <Form.Item
//               wrapperCol={{ ...layout.wrapperCol, offset: 8 }}
//             ></Form.Item>
//           </Form>
//         </div>
//         <Button type type="primary" htmlType="submit" onClick={closeModal}>
//           Submit
//         </Button>
//       </Modal>
//     </div>
//   )
// }
