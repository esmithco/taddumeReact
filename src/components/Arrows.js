import React from "react";
import "../styles/Arrows.css";
import { images } from "../assets/images";

function Arrows(props) {
  return (
    <>
      <img
        className="Arrows-left Arrows-left--learn"
        src={images.imgLeftArrow}
        alt=""
      />
      <img
        className="Arrows-right Arrows-right--right"
        src={images.imgRightArrow}
        alt=""
      />
    </>
  );
}

export { Arrows };
