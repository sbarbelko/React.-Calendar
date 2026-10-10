import React from "react";
import Day from "../Day";

export default function Week(props) {
  const { monthDays } = props;

  return (
    <tbody>
      {monthDays.map((i) => (
        <Day days={i} />
      ))}
    </tbody>
  );
}
