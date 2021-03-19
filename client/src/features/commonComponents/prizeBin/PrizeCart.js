import React from "react";
import Prize from "./Prize";
import { useSelector, useDispatch } from "react-redux";
import styles from "./PrizeCart.module.css";
import {
  removePrize,
  increment,
  decrement,
} from "./prizeCartSlice";

export default function PrizeCart({ cart = [] }) {
  const dispatch = useDispatch();
  const prizeCart = useSelector

  return (
    <div>
      {prizeCart.map((prize) => (
        <li key={"prize-" + prize.id} className={styles.prizeCartPrize}>
          <img className={styles.imgThumb} src={prize.prize_thumbnail} />
          <div className={styles.prizeCartpTag}>
            <p>{prize.title}</p>
            <br />
          </div>
          <button
            className={styles.delBtn}
            onClick={() => dispatch(removePrize(prize))}
          >
            X
          </button>
          <button
            className={styles.btn}
            onClick={() => dispatch(decrement(prize))}
          >
            -
          </button>
          <button
            className={styles.btn}
            onClick={() => dispatch(increment(prize))}
          >
            +
          </button>
        </li>
      ))}
    </div>
  );
}
