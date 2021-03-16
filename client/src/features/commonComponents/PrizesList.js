import React from "react";
import { useContext } from "react";
import { List, Avatar, Space } from "antd";
import { store } from "./ProviderCommon";
import styles from "./PrizesList.module.css";
import Checkbox from "./componentParts/CmpntCheckbox.js";

export default function PrizeList(props) {
  const prizes = [
    {
      title: "Robux",
      points: 100,
    },
    {
      title: "Family Movie Night",
      points: 15,
    },
    {
      title: "Choose Doge Treats",
      points: 5,
    },
    {
      title: "DogeCoins",
      points: 10,
    },
  ];

  return (
    <div className="prizeListWrap">
      <ul className={styles.prizesUl}>
        {prizes.map((prize) => (
          <li className={styles.li}>
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
