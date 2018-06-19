import React from "react";

const Flag = props => {
  return (
    <div style={{ width: "300px" }}>
      <img style={{ width: "100%" }} src={props.flag} alt="selected flag" />
    </div>
  );
};

export default Flag;
