import React from "react";
import { useContext } from "react";
import { List, Avatar, Space } from "antd";
import { store } from "./ProviderCommon";
import styles from "./GoalList.module.css";

export default function GoalList() {
  const goals = [
    {
      title: "Clean Your Room",
      points: 5,
    },
    {
      title: "Wash Yo Self",
      points: 5,
    },
    {
      title: "Walk the Doge",
      points: 5,
    },
    {
      title: "Complete Asych Homework",
      points: 5,
    },
  ];
  return (
    <div className="goalList">
      {goals.map((goal) => (
        <div className={styles.goalListContainer}>
          <div className={styles.goalTitle}>
            {goal.title}
          </div>
          <div className={styles.goalPoints}>
            {goal.points}
          </div>
          <div className={styles.pointGoalAvatar}></div>
        </div>
      ))}
    </div>
  );
}
