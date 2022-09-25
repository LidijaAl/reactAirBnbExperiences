import React from "react";
import hero_photo from "../images/photo_grid.png";

export default function Hero() {
  return (
    <div className="hero">
      <img className="hero_photo" src={hero_photo} />
      <div className="hero_text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
}
