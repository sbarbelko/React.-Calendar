import React from "react";
import styles from "./CurrentDate.module.sass";

export default function CurrentDate(props) {
  const { dayNumber, dayName } = props;

  return (
    <div className={styles.currentDateContainer}>
      <span className={styles.dayName}>{dayName}</span>
      <span className={styles.dayNumber}>{dayNumber}</span>
    </div>
  );
}
