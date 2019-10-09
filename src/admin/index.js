import React, { useState } from "react";
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
  &:hover {
    background-color: rgb(119, 193, 241);
    color: white
  }
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

const Back = styled.img`
  width: 25px;
  margin-bottom: 10px;
`;

const backImgSrc =
  "data:image/png;base64,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";

const PropsLabel = styled.div`
  margin-bottom: 5px;
  text-transform: capitalize;
`;

const PropsInput = styled.input`
  height: 28px;
  padding: 5px;
  width: 100%;
  margin-bottom: 10px;
`;

function Admin({ pages, location }) {
  const currentIndex = pages.findIndex(el => el.path === location.pathname);
  const { component: auxCurrentPageComponent } = pages[currentIndex] || {};
  const currentPageComponent = auxCurrentPageComponent
    ? auxCurrentPageComponent()
    : {};
  const { props: { children: childrens = [] } = {} } = currentPageComponent;

  console.log(location, pages);

  const [isEditionMode, setEditionMode] = useState(false);
  const [currentProps, setCurrentProps] = useState({});

  const changeComponentView = child => {
    setEditionMode(true);
    setCurrentProps(child.props);
    console.log(child.props);
  };

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
      {isEditionMode ? (
        <AdminCard>
          <Back
            src={backImgSrc}
            alt="back"
            onClick={() => setEditionMode(false)}
          ></Back>
          <H2>Edición de componente</H2>
          {Object.keys(currentProps).map(child => (
            <>
              <PropsLabel>{child}</PropsLabel>
              <PropsInput value={currentProps[child]}></PropsInput>
            </>
          ))}
        </AdminCard>
      ) : (
        <AdminCard>
          <H2>Componentes</H2>
          {childrens.map(child => (
            <AdminComponentLabel onClick={() => changeComponentView(child)}>
              {child.type.label}
            </AdminComponentLabel>
          ))}
        </AdminCard>
      )}
    </>
  );
}

export default withRouter(Admin);
