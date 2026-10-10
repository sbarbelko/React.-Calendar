import React from "react";

export default function Head(props) {
  const { currMonth, currYear } = props;

  return <h1>{`${currMonth} ${currYear}`}</h1>;
}
