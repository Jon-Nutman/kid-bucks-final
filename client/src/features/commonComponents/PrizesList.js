import { useEffect } from 'react'
import { List, Avatar } from 'antd'
import {
  selectPrizes,
  getPrizesByChildId,
  deletePrize,
} from '../common/prizeSlice'
import { addPrizeToCart } from './prizeBin/prizeCartSlice'
import { useSelector, useDispatch } from 'react-redux'
import { useAuth } from '../auth/auth'

export default function PrizeList(props) {
  const { user } = useAuth()
  const isAdmin = user.is_admin
  console.log(props)
  // const yourPrizes = request.get('/prizes/:childId')
  // console.log(yourPrizes)

  const prizes = useSelector(selectPrizes)
  const dispatch = useDispatch()

  console.table(prizes)

  useEffect(() => {
    dispatch(getPrizesByChildId(props.childId))
  }, [props.childId])

  function prizeActions(item, childId, isAdmin) {
    const childActions = [
      <a
        key="list-loadmore-more"
        onClick={() => dispatch(addPrizeToCart(item))}
      >
        + to cart{' '}
      </a>,
    ]
    const parentActions = [
      <a
        key="list-loadmore-edit"
        onClick={() => dispatch(deletePrize(item.id, childId))}
      >
        delete
      </a>,
    ]
    return isAdmin ? parentActions : childActions
  }

  return (
    <List>
      {prizes.map((item) => {
        return (
          <List.Item actions={prizeActions(item, props.childId, isAdmin)}>
            <List.Item.Meta
              avatar={<Avatar src={item.prize_thumbnail} />}
              title={<a href="https://www.amazon.com/">{item.title}</a>}
              description={<span>{item.points} points</span>}
            />
          </List.Item>
        )
      })}
    </List>
    // <List
    //   itemLayout="horizontal"
    //   dataSource={prizes}
    //   renderItem={(item) => (
    // <List.Item>
    //   <List.Item.Meta
    //     avatar={
    //       <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
    //     }
    //     title={<a href="https://ant.design">{item.title}</a>}
    //     description="Ant Design, a design language for background applications, is refined by Ant UED Team"
    //   />
    // </List.Item>
    //   )}
    // />
    // <div className={styles.prizeListWrap}>
    //   {prizes.map((prize) => (
    //     <div className={styles.prizeCard}>
    //       <span key={`prizeList` + prize.id}>
    //         <div className={styles.prizeCardTitle}>{prize.title}</div>
    //         <span onClick={() => dispatch(deletePrize(prize.id, props.childId))
    //         } >x</span>
    //         <button
    //           className={styles.prizeCard}
    //           onClick={() =>
    //             console.log('you really need to finish the prize cart Dottie')
    //           }
    //         >
    //           <div className={styles.buttonFlex}>
    //             <div className={styles.addToCart}>
    //               <FaPlus /> to Cart for{' '}
    //             </div>
    //             <p className={styles.points}>{prize.points}</p>
    //           </div>
    //         </button>
    //       </span>
    //     </div>
    //   ))}
    // </div>
  )
}
