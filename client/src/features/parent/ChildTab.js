import React, { useEffect } from 'react'
import { Tabs } from 'antd'
import AddGoalModal from '../parent/AddGoalModal'
import AddPrizeModal from '../parent/AddPrizeModal'
import GoalList from '../commonComponents/goals/GoalList'
import PrizesList from '../commonComponents/PrizesList'
import styles from '../parent/Tabs.module.css'
import AddChild from './AddChildModal'
import { useSelector, useDispatch } from 'react-redux'
import { selectGoals, getGoalsByChildId } from '../common/goalSlice'
import { getChildren, selectChildren, deleteChild } from './userSlice'
import { getTransactions, selectTransactions } from '../common/transactionSlice'
import TransactionModal from '../commonComponents/TransactionModal'

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
  const children = useSelector(selectChildren)
  const transactions = useSelector(selectTransactions)
  console.log(transactions)
  const dispatch = useDispatch()
  const [modalIsOpen, setIsOpen] = React.useState(false)

  useEffect(() => {
    dispatch(getChildren())
    dispatch(getTransactions(2))
  }, [])
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
  function handleChange(childId) {
    if (childId !== 'newChild') {
      dispatch(getGoalsByChildId(childId))
    }
  }
  return (
    <div>
      <Tabs type="card" onChange={handleChange} className={styles.tabMain}>
        {children.map((child, index) => {
          return (
            <TabPane
              className={styles.componentContainer}
              tab={child.username}
              key={child.id}
            >
              <div className={styles.leftContainer}>
                <AddGoalModal />
                <h1>Goal List</h1>
                <GoalList goals={goals} />
              </div>
              <div className={styles.rightContainer}>
                <div className={styles.modalButtonContainer}>
                  <AddPrizeModal childId={child.id} />
                  <TransactionModal />
                </div>
                <h1>Prize List</h1>
                <PrizesList childId={child.id} />
              </div>
            </TabPane>
          )
        })}
        <TabPane
          className={styles.componentContainerAddChild}
          tab="+"
          key="newChild"
        >
          <div>
            <AddChild />
          </div>
        </TabPane>
      </Tabs>
      ,
    </div>
  )
}
