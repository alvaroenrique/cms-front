import React from "react";

import { Link } from "react-router-dom";

function UiCard({ link, image, title }) {
  return (
    <div>
      <Link to={link}>
        <img src={image} alt=""></img>
      </Link>
      <h2>
        <Link to={link}>{title}</Link>
      </h2>
    </div>
  );
}

export default UiCard;
