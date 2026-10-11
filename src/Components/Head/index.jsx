import React from "react";
import styles from "./Head.module.sass";

export default function Head(props) {
  const { currMonth, currYear } = props;

  return <h1 className={styles.header}>{`${currMonth} ${currYear}`}</h1>;
}
