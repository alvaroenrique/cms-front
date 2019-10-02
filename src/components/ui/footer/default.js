import React from "react";
import styled from "styled-components";

const Footer = styled.footer`
  height: 52px;
  margin-top: 20px;
  border-top: 1px solid #dbdbdb;
  display: flex;
  justify-content: center;
  padding: 0 20px;
  @media (min-width: 960px) {
    padding: 20px 0;
  }
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
