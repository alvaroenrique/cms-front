import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import styled from "styled-components";

import UiHeader from "./components/ui/header/default";
import UiFooter from "./components/ui/footer/default";

import Home from "./components/pages/home";
import Categories from "./components/pages/categories";
import Book from "./components/pages/book";

const pages = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/categories",
    component: Categories
  },
  {
    path: "/book",
    component: Book
  }
];

const AdminView = styled.div`
  display: flex;
`;

const Left = styled.div`
  max-width: 300px;
  width: 100%;
  height: 100vh;
  padding: 10px;
  position: fixed;
  overflow-y: scroll;
  background-color: #333;
`;

const Right = styled.div`
  flex: 1;
  margin-left: 300px;
`;

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

const AdminLabel = styled(Link)`
  color: #4f5356;
  text-decoration: none;
  display: block;
  margin-bottom: 10px;
  padding: 10px;
  border-radius: 5px;
  text-align: center;
  border: 1px solid #869098;
`;

const AdminCard = styled.div`
  background-color: white;
  padding: 15px;
  margin-bottom: 20px;
  border-radius: 10px;
`;
console.log(Home().props);

function App() {
  return (
    <BrowserRouter>
      <AdminView>
        <Left>
          <H1>Edición de páginas</H1>
          <AdminCard>
            <H2>Páginas</H2>
            {pages.map(page => (
              <AdminLabel to={page.path}>{page.component.label}</AdminLabel>
            ))}
          </AdminCard>
          <AdminCard>
            <H2>Componentes</H2>
            {Home().props.children.map(child => (
              <div>{child.type.label}</div>
            ))}
          </AdminCard>
        </Left>
        <Right>
          <UiHeader></UiHeader>

          <Switch>
            {pages.map(page => (
              <Route {...page}></Route>
            ))}
          </Switch>

          <UiFooter></UiFooter>
        </Right>
      </AdminView>
    </BrowserRouter>
  );
}

export default App;
