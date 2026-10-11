import React from "react";
import { getDate } from "date-fns";
import styles from "./Day.module.sass";

export default function Day(props) {
  const { days } = props;
  const today = getDate(new Date());

  return (
    <tr>
      {days.map((day, i) =>
        i === today ? (
          <td key={i} className={`${styles.currentDay} ${styles.averageDay}`}>
            {day}
          </td>
        ) : (
          <td key={i} className={styles.averageDay}>
            {day}
          </td>
        ),
      )}
    </tr>
  );
}
