import React from "react";
import { useContext } from "react";
import { List, Avatar, Space } from "antd";
import { store } from "./ProviderCommon";
import styles from "./GoalList.module.css";

export default function GoalList() {
  const goals = [
    {
      id: 1,
      title: "Clean Your Room",
      points: 10,
    },
    {
      id: 2,
      title: "Wash Yo Self",
      points: 5,
    },
    {
      id: 3,
      title: "Walk the Doge",
      points: 5,
    },
    {
      id: 4,
      title: "Complete Asych Homework",
      points: 15,
    },
  ];
  return (
    <div className="goalListWrap">
      {goals.map((goal) => (
        <div key={goal.id} className={styles.goalContainer}>
          <div className={styles.goalCard}>
          <div className={styles.goalTitle}>
            {goal.title}
          </div>
          <div className={styles.pointGoalAvatar}>{goal.points}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
