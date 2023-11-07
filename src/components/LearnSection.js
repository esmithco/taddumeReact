import React, { useState } from "react";
import "../styles/LearnSection.css";
import { Arrows } from "./Arrows";
import { ButtonSecondary } from "./ButtonSecondary";
import { subjectList } from "../assets/data/subjectList";

function LearnSection(props) {
  const [imgState, setImgState] = useState(null);
  const changeImg = (index) => {
    setImgState(index);
  };
  const returnImg = () => {
    setImgState(null);
  };

  return (
    <section className="LearnSection">
      <h2 className="LearnSection-h2">Aprende</h2>

      <nav className="LearnSection-nav">
        {subjectList.map((subject, index) => (
          <a key={index} href={subject.link} className="LearnSection-nav--a">
            <div
              className="imgContainer"
              onMouseEnter={() => changeImg(index)}
              onMouseLeave={() => returnImg()}
            >
              <div className="imgContainer-div">
                <img
                  className={`imgContainer-div--img ${
                    imgState === index && "imgContainer-div--img---display"
                  }`}
                  src={subject.img1}
                  alt=""
                />
              </div>
              <div className="imgContainer-div">
                <img
                  className={`${
                    imgState === index
                      ? "imgContainer-div--img2"
                      : "imgContainer-div--img---display"
                  }`}
                  src={subject.img2}
                  alt=""
                />
              </div>
            </div>

            <p
              className={`LearnSection-nav--a---p ${
                imgState === index && "LearnSection-nav--a---p---hover"
              }`}
            >
              {subject.name}
            </p>
          </a>
        ))}
      </nav>

      <Arrows />

      <ButtonSecondary text="Tomar test" />
    </section>
  );
}

export { LearnSection };
