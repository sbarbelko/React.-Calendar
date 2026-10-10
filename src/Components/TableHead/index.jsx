import React from "react";

export default function TableHead(props) {
  const { WEEK_DAYS_SHORT } = props;

  console.log("WEEK_DAYS_SHORT", WEEK_DAYS_SHORT);
  return (
    <thead>
      <tr>
        {WEEK_DAYS_SHORT.map((i) => (
          <th>{i}</th>
        ))}
      </tr>
    </thead>
  );
}
