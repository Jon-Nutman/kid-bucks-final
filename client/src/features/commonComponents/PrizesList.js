import { useEffect } from "react";
import { useContext } from "react";
import { List, Avatar, Space } from "antd";
import { store } from "./ProviderCommon";
import styles from "./PrizesList.module.css";
import Checkbox from "./componentParts/CmpntCheckbox.js";
import { addPrizeToCart, selectPrizes, prizesAsync } from './prizeBin/prizeSlice';
import { useSelector, useDispatch } from "react-redux";



export default function PrizeList(props) {

  const prizes = useSelector(selectPrizes);
  const dispatch = useDispatch();

  console.log(prizes)

  useEffect(() => {
    dispatch(prizesAsync())
  }, [])
  // const prizes = [
  //   {
  //     id: 1,
  //     title: "Robux",
  //     points: 100,
  //   },
  //   {
  //     id: 2,
  //     title: "Family Movie Night",
  //     points: 15,
  //   },
  //   {
  //     id: 3,
  //     title: "Choose Doge Treats",
  //     points: 5,
  //   },
  //   {
  //     id: 4,
  //     title: "DogeCoins",
  //     points: 10,
  //   },
  // ];

  return (
    <div className="prizeListWrap">
      <ul className={styles.prizesUl}>
        {prizes.map((prize) => (
          <li key={prize.id} className={styles.li}>
            {/* <span>
              <img src={prize.avatar} alt="prize image" />
            </span> */}
            <div className={styles.prizeCard}>
              <Checkbox />
              <span>{prize.title}</span>
              <div className={styles.pointPrizeAvatar}>{prize.points}</div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
