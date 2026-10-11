import React from "react";
import styles from "./TableHead.module.sass";

export default function TableHead(props) {
  const { WEEK_DAYS_SHORT } = props;

  return (
    <thead className={styles.weeksContainer}>
      <tr>
        {WEEK_DAYS_SHORT.map((week, i) => (
          <th key={i}>{week}</th>
        ))}
      </tr>
    </thead>
  );
}
