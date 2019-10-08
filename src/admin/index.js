import React from "react";
import { NavLink, withRouter } from "react-router-dom";
import styled from "styled-components";

const H1 = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  padding-bottom: 20px;
  color: white;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const labelStyle = `
  color: #4f5356;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #869098;
`;

const AdminPageLabel = styled(NavLink)`
  ${labelStyle}
`;

const AdminComponentLabel = styled.div`
  ${labelStyle}
`;

const AdminCard = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
`;

function Admin({ pages, location }) {
  console.log(location);
  return (
    <>
      <H1>Edición de páginas</H1>
      <AdminCard>
        <H2>Páginas</H2>
        {pages.map(page => (
          <AdminPageLabel
            activeStyle={{
              backgroundColor: "#46a1dc",
              color: "#fff"
            }}
            to={page.path}
          >
            {page.component.label}
          </AdminPageLabel>
        ))}
      </AdminCard>
      <AdminCard>
        <H2>Componentes</H2>
        {pages[0].component().props.children.map(child => (
          <AdminComponentLabel>{child.type.label}</AdminComponentLabel>
        ))}
      </AdminCard>
    </>
  );
}

export default withRouter(Admin);
