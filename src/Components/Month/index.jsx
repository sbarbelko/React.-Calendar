import React from "react";
import Week from "../Week";
import TableHead from "../TableHead";

export default function Month(props) {
  const { monthDays, WEEK_DAYS_SHORT } = props;
  return (
    <table>
      <TableHead WEEK_DAYS_SHORT={WEEK_DAYS_SHORT} />
      <Week monthDays={monthDays} />
    </table>
  );
}
