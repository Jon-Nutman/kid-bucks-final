import React from 'react'
import { Tabs } from 'antd'
import AddGoalModal from '../parent/AddGoalModal'
import AddPrizeModal from '../parent/AddPrizeModal'
import GoalList from '../commonComponents/GoalList'
import PrizesList from '../commonComponents/PrizesList'
import styles from '../parent/Tabs.module.css'
import AddChild from './AddChildModal'
import { useSelector } from 'react-redux'
import { selectGoals } from '../common/goalSlice'
import request from '../../utils/request'

const { TabPane } = Tabs

const onFinish = (values) => {
  console.log(values)
}
function callback(key) {
  console.log(key)
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
  const goals = useSelector(selectGoals)
  const [modalIsOpen, setIsOpen] = React.useState(false)
  function openModal() {
    setIsOpen(true)
  }
  function handleSubmit(e) {
    e.preventDefault()
    const obj = {
      name: '',
    }
    console.log(obj)

    // request.post('/goals', obj)
  }
  return (
    <div>
      <Tabs onChange={callback} type="card">
        <TabPane className={styles.componentContainer} tab="Child 1" key="1">
          <div>
            <AddGoalModal />
            <h1>Goal List</h1>
            <GoalList goals={goals} />
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
        <TabPane className={styles.componentContainer} tab="+" key="3">
          <div>
            <AddChild />
          </div>
        </TabPane>
      </Tabs>
      ,
    </div>
  )
}
