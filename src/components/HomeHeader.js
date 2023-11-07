import React from "react";
import "../styles/HomeHeader.css";

function HomeHeader(props) {
  return (
    <header>
      <div className="header-logo">
        <img className="header-logo--img" src={props.img} alt="" />
      </div>
      {props.children}
    </header>
  );
}

export { HomeHeader };
