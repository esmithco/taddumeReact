import React from "react";
import "../styles/ButtonPrimary.css";

function ButtonPrimary(props) {
  return <button className="ButtonPrimary">{props.text}</button>;
}

export { ButtonPrimary };
