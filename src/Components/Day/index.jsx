import React from "react";
import { getDate } from "date-fns";
import styles from "./Day.module.sass";


export default function Day(props) {
  const { days } = props;
  const today = getDate(new Date());

  return (
    <tr>
      {days.map((i) =>
        i === today ? <td className={styles.currentDay}>{i}</td> : <td>{i}</td>,
      )}
    </tr>
  );
}
