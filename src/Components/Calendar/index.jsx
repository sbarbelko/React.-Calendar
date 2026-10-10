import CurrentDate from "../CurrentDate";
import Month from "../Month";
import styles from "./Calendar.module.sass";
import { getDate, getDay, startOfMonth } from "date-fns";

export default function Calendar() {
  const WEEK_DAYS = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const currentDate = new Date();
  const dayNumber = getDate(currentDate);
  const dayName = WEEK_DAYS[getDay(currentDate)];

  return (
    <article className={styles.calendar}>
      <CurrentDate dayNumber={dayNumber} dayName={dayName} />
      <Month />
    </article>
  );
}
