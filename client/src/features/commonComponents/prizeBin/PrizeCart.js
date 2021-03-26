// This all was moved to Prize Redeem Modal


// import React from 'react'
// import Prize from './Prize'
// import { useSelector, useDispatch } from 'react-redux'
// import styles from './PrizeCart.module.css'
// import {
//   selectCart,
//   selectTotal,
//   selectTotalPoints,
//   increment,
//   decrement,
// } from './prizeCartSlice'

// export default function PrizeCart(props) {
//   const dispatch = useDispatch()
//   const prizeCart = useSelector(selectCart)
//   const total = useSelector(selectTotal)
//   const totalPoints = useSelector(selectTotalPoints)

//   console.log(props)

//   return (
//     <div>
//       <ul>
//         {prizeCart.map((prize) => (
//           <li key={'prizeCart-' + prize.id} className={styles.prizeCartPrize}>
//             <img className={styles.imgThumb} src={prize.prize_thumbnail} />
//             <div className={styles.prizeCartpTag}>
//               <p>{prize.title}</p>
//               <br />
//             </div>
//             <button
//               className={styles.delBtn}
//               onClick={
//                 () => console.log('nevermind')
//                 // dispatch(removePrize(prize))
//               }
//             >
//               X
//             </button>
//             <button
//               className={styles.btn}
//               onClick={() => dispatch(decrement(prize))}
//             >
//               -
//             </button>
//             <button
//               className={styles.btn}
//               onClick={() => dispatch(increment(prize))}
//             >
//               +
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   )
// }
