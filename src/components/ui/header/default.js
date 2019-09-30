import React from "react";
import styled from "styled-components";

const Header = styled.header`
  height: 55px;
  background-color: #dd3333;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const H1 = styled.h1`
  width: 52rem;
`;

const A = styled.a`
  text-decoration: none;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
`;

function UiHeader() {
  return (
    <Header>
      <H1>
        <A href="/">Book store</A>
      </H1>
    </Header>
  );
}

export default UiHeader;