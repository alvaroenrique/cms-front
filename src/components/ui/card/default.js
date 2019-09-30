import React from "react";
import Img from "../../../assets/images/progra.jpeg";

function UiCard() {
  return (
    <div>
      <a href="/">
        <img src={Img} alt=""></img>
      </a>
      <h2>
        <a href="/">Arquitectura de software</a>
      </h2>
    </div>
  );
}

export default UiCard;
