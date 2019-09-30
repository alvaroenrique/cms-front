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
`;

function UiDescription() {
  return (
    <>
      <H1>Recomendaciones de libros online</H1>
      <P>
        Bookstore.com es una página que te recomienda libros y te ayuda a
        encontrar los mejores precios en internet.
      </P>
    </>
  );
}

export default UiDescription;
