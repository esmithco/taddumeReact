import React from "react";
import "../styles/ButtonSecondary.css";

function ButtonSecondary(props) {
  return <button className="ButtonSecondary">{props.text}</button>;
}

export { ButtonSecondary };
