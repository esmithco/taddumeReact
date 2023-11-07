import React from "react";
import "../styles/Footer.css";
import { images } from "../assets/images";

function Footer(props) {
  return (
    <footer>
        <div className="footer-images">
            <img className="footer-images--full" src={images.imgFooter} alt=""/>
        </div>
    </footer>
  );
}

export { Footer };