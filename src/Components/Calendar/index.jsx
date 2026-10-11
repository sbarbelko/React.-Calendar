import CurrentDate from "../CurrentDate";
import Month from "../Month";
import styles from "./Calendar.module.sass";
import {
  getDate,
  getYear,
  parse,
  getWeek,
  startOfMonth,
  endOfMonth,
  startOfWeek,
  addDays,
  format,
} from "date-fns";

export default function Calendar() {
  const WEEK_DAYS_SHORT = ["S", "M", "T", "W", "T", "F", "S"];

  const currentDate = new Date();
  const dayNumber = getDate(currentDate);
  const dayName = format(currentDate, "EEEE");

  const startWeek = getWeek(startOfMonth(currentDate));
  const endWeek = getWeek(endOfMonth(currentDate));

  const currentMonth = format(currentDate, "MMMM");
  const currentYear = getYear(currentDate);

  const monthDays = [];

  for (let i = startWeek; i <= endWeek; i++) {
    const weekDays = [];
    let startWeekDay = startOfWeek(
      parse(`${i}`, "w", new Date(getYear(currentDate), 0, 1)),
    );

    for (let j = 0; j < 7; j++) {
      weekDays.push(getDate(addDays(startWeekDay, j)));
    }
    monthDays.push(weekDays);
  }

  return (
    <article className={styles.calendar}>
      <CurrentDate dayNumber={dayNumber} dayName={dayName} />
      <Month
        monthDays={monthDays}
        WEEK_DAYS_SHORT={WEEK_DAYS_SHORT}
        currentMonth={currentMonth}
        currentYear={currentYear}
      />
    </article>
  );
}
