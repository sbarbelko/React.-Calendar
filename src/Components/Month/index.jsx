import React from "react";
import Week from "../Week";
import TableHead from "../TableHead";
import Head from "../Head";
import styles from "./Month.module.sass";

export default function Month(props) {
  const { monthDays, WEEK_DAYS_SHORT, currentMonth, currentYear } = props;
  return (
    <div className={styles.monthContainer}>
      <Head currMonth={currentMonth} currYear={currentYear} />
      <table>
        <TableHead WEEK_DAYS_SHORT={WEEK_DAYS_SHORT} />
        <Week monthDays={monthDays} />
      </table>
    </div>
  );
}
