import React, { useEffect } from 'react'
import { Tabs } from 'antd'
import AddGoalModal from '../parent/AddGoalModal'
import AddPrizeModal from '../parent/AddPrizeModal'
import GoalList from '../commonComponents/GoalList'
import PrizesList from '../commonComponents/PrizesList'
import styles from '../parent/Tabs.module.css'
import AddChild from './AddChildModal'
import { useSelector, useDispatch } from 'react-redux'
import { selectGoals, getGoalsByChildId } from '../common/goalSlice'
import { getChildren, selectChildren } from './userSlice'

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
  const dispatch = useDispatch()
  const [modalIsOpen, setIsOpen] = React.useState(false)

  useEffect(() => {
    dispatch(getChildren())
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
      <Tabs type="card" onChange={handleChange}>
        {children.map((child, index) => {
          return (
            <TabPane
              className={styles.componentContainer}
              tab={child.username}
              key={child.id}
            >
              <div>
                <AddGoalModal />
                <h1>Goal List</h1>
                <GoalList goals={goals} />
              </div>
              <div>
                <AddPrizeModal />
                <h1>Prize List</h1>
                <PrizesList childId={child.id} />
              </div>
            </TabPane>
          )
        })}
        <TabPane className={styles.componentContainer} tab="+" key="newChild">
          <div>
            <AddChild />
          </div>
        </TabPane>
      </Tabs>
      ,
    </div>
  )
}
