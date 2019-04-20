import React from "react";

const DisplayVerses = props => {
  return (
    <div>
      <p>We have got {props.count} resutls </p>
      <div>{props.verses}</div>
    </div>
  );
};

export default DisplayVerses;
