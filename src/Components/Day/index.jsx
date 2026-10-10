import React from "react";

export default function Day(props) {
  const { days } = props;
  return (
    <tr>
      {days.map((i) => (
        <td>{i}</td>
      ))}
    </tr>
  );
}
