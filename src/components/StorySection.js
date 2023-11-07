import React from "react";
import "../styles/StorySection.css";
import { storyList } from "../assets/data/storyList";
import { ButtonSecondary } from "./ButtonSecondary";

function StorySection(props) {
  return (
    <section className="StorySection">
      <h2 className="StorySection-h2">Testimonios</h2>
      <p className="StorySection-p">
        Taddume te ayuda a crecer académicamente y acompaña tu crecimiento{" "}
        <br />
        personal, estos son algunos testimonios de nuestros taddumers
      </p>

      <div className="StorySection-container">
        {storyList.map((story, index) => (
          <div key={index} className="StorySection-container--div">
            <img className="container-div--img" src={story.img} alt="" />
            <div className="container-div--texts">
              <div className="texts-info">
                <h3>{story.name}</h3>
                <p>{story.grade}</p>
                <p>{story.country}</p>
              </div>
              <p className="texts-comment">{story.comment}</p>
            </div>
          </div>
        ))}
      </div>

      <ButtonSecondary text="Tu historia" />
    </section>
  );
}

export { StorySection };
