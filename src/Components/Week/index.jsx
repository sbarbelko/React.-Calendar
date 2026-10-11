import React from "react";
import Day from "../Day";
import styles from "./Week.module.sass";

export default function Week(props) {
  const { monthDays } = props;

  return (
    <tbody className={styles.daysContainer}>
      {monthDays.map((i) => (
        <Day days={i} />
      ))}
    </tbody>
  );
}
