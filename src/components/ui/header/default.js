import React from "react";
import styled from "styled-components";

import { Link } from "react-router-dom";

const Header = styled.header`
  height: 55px;
  background-color: #dd3333;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
  @media (min-width: 960px) {
    padding: 0;
  }
`;

const H1 = styled.h1`
  width: 52rem;
`;

const A = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
`;

function UiHeader() {
  return (
    <Header>
      <H1>
        <A to="/">Book store</A>
      </H1>
    </Header>
  );
}

UiHeader.label = "Cabecera";

export default UiHeader;
