import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  height: 52px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
  border-top: 1px solid #dbdbdb;
`;

const H1 = styled.h1`
  width: 52rem;
`;

const A = styled.a`
  text-decoration: none;
  font-size: 1.3rem;
  color: #444;
`;

function UiFooter() {
  return (
    <Footer>
      <H1>
        <A href="/">Book store</A>
      </H1>
    </Footer>
  );
}

export default UiFooter;
