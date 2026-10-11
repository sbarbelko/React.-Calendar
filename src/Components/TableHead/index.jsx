import React from "react";
import styles from "./TableHead.module.sass";

export default function TableHead(props) {
  const { WEEK_DAYS_SHORT } = props;

  return (
    <thead className={styles.weekContainer}>
      <tr>
        {WEEK_DAYS_SHORT.map((i) => (
          <th>{i}</th>
        ))}
      </tr>
    </thead>
  );
}
