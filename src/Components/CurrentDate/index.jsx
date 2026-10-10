import React from "react";

export default function CurrentDate(props) {
  const { dayNumber, dayName } = props;

  return (
    <div>
      <span>{dayNumber}</span>
      <span>{dayName}</span>
    </div>
  );
}
