import CurrentDate from "../CurrentDate";
import Month from "../Month";
import styles from "./Calendar.module.sass";

export default function Calendar() {
  return (
    <article className={styles.calendar}>
      <CurrentDate />
      <Month />
    </article>
  );
}
