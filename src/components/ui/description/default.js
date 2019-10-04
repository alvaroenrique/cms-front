import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  padding: 20px 0;
`;

const P = styled.p`
  line-height: 1.5rem;
  font-size: 1.2rem;
  padding-top: 20px;
  padding-bottom: 40px;
`;

const Img = styled.img`
  display: block;
  max-width: 100%;
  max-height: 500px;
  margin: 20px auto;
`;

function UiDescription({ title, subtitle, image }) {
  return (
    <>
      <H1>{title}</H1>
      {image && <Img src={image} alt="" />}
      <P>{subtitle}</P>
    </>
  );
}

UiDescription.label = "Descripción";

export default UiDescription;
