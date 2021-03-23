import React from 'react'
import Checkbox from '../componentParts/CmpntCheckbox'
import { useDispatch } from 'react-redux'
import { useAuth } from '../../auth/auth'
import { updateGoalStatusById } from '../../common/goalSlice'
import styles from './GoalItem.module.css'

export default function GoalItem(props) {
  const goal = props.goal
  const dispatch = useDispatch()
  const { user } = useAuth()
  return (
    <>
      <button type="submit" className={styles.goalBtn}>
        <div className={styles.goalItemWrapper}>
          <Checkbox
            checked={goal.status !== 'not_started'}
            onChange={(e) =>
              dispatch(updateGoalStatusById(goal.id, user.id, e.target.checked))
            }
          />
          <div className={styles.goalCard}>
            <div className={styles.flexColumn}>
              <span className={styles.goalTitle}>{goal.title}</span>
              {/* <span className={styles.goalDescript}>{goal.description}</span> */}
            </div>
            <div className={styles.pointGoalAvatar}>{goal.points}</div>
          </div>
        </div>
      </button>
    </>
  )
}
