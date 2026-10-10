import React from "react";

export default function Month(props) {
  const { monthDays } = props;
  console.log("monthDays", monthDays);
  return (
    <table>
      <tbody>
        {monthDays.map((i) => (
          <tr>
            {i.map((i) => (
              <td>{i}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
