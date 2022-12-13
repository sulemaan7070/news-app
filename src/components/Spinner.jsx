import React from "react";
import spinner from "..";

function Spinner() {
  return (
    <div className="text-center">
      <img src={require("../loader/Spinner-1s-103px.gif")} alt="" />
    </div>
  );
}

export default Spinner;
