import { useEffect } from 'react'
import { useContext } from 'react'
import { List, Avatar, Space } from 'antd'
import { store } from './ProviderCommon'
import styles from './PrizesList.module.css'
import Checkbox from './componentParts/CmpntCheckbox.js'
import { selectPrizes, prizesAsync } from '../common/prizeSlice'
import { useSelector, useDispatch } from 'react-redux'
import request from '../../utils/request'
import { FaPlus } from 'react-icons/fa'

export default function PrizeList(id) {
  // const yourPrizes = request.get('/prizes/:childId')
  // console.log(yourPrizes)

  const prizes = useSelector(selectPrizes)
  const dispatch = useDispatch()

  console.table(prizes)

  useEffect(() => {
    dispatch(prizesAsync(id))
  }, [])

  return (
    <div className={styles.prizeListWrap}>
        {prizes.map((prize) => (
          <div className={styles.prizeCard}>
            <span key={`prizeList` + prize.id}>
              <div className={styles.prizeCardTitle}>{prize.title}</div>
            <button
              className={styles.prizeCard}
              onClick={() =>
                console.log('you really need to finish the prize cart Dottie')
              }
            >
              <div className={styles.buttonFlex}>
                <div className={styles.addToCart}>
                  <FaPlus /> to Cart for{' '}
                </div>
                <p className={styles.points}>{prize.points}</p>
              </div>
            </button>
          </span>
          </div>
        ))}
    </div>
  )
}
