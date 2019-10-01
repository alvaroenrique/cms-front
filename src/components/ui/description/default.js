import React from "react";
import styled from "styled-components";

const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
`;

const P = styled.p`
  line-height: 1.5rem;
`;

const Img = styled.img`
  display: block;
  width: 100%;
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

export default UiDescription;
