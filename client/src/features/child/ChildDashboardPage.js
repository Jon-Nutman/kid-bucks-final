import React from "react";
import Header from "./Header";
import GoalList from "../commonComponents/GoalList";
import PrizesList from "../commonComponents/PrizesList";
import PrzBinRedeemModal from "../commonComponents/prizeBin/PrzBinRedeemModal"
import { PrzBnPointBalance } from "./PrzBnPointBalance";
import styles from "./ChildDashboardPage.module.css";

export default function ChildDashboardPage() {
  return (
    <>
      <Header />
      <div className={styles.childDashContain}>
        <GoalList />
        <div className={styles.prizeBinContain}>
          <PrzBnPointBalance />
          <div className={styles.prizeListContainer}>
            <PrizesList />
          </div>
          <div className={styles.przRedemption}>
              <PrzBinRedeemModal />
          </div>
        </div>
      </div>
    </>
  );
}
