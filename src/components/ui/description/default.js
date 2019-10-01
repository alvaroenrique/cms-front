import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  margin: 40px auto;
  width: 52rem;
`;

const P = styled.p`
  margin: 40px auto;
  width: 52rem;
  line-height: 1.5rem;
`;

const Img = styled.img`
  margin: 0 auto;
  display: block;
  width: 52rem;
`;

function UiDescription({ title, subtitle, image }) {
  return (
    <>
      <H1>{title}</H1>
      {image && <Img src={image} alt=""></Img>}
      <P>{subtitle}</P>
    </>
  );
}

export default UiDescription;
