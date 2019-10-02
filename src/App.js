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
  padding: 20px;
  position: fixed;
  background-color: #e4e4e4;
`;

const Right = styled.div`
  flex: 1;
  margin-left: 300px;
`;

const H1 = styled.h1`
  font-weight: 700;
  font-size: 2rem;
  padding-bottom: 20px;
  color: #4c4c4c;
`;

const H2 = styled.h2`
  font-weight: 700;
  font-size: 1.5rem;
  margin: 20px 0;
`;

const PagesLinks = styled(Link)`
  color: #333;
  text-decoration: none;
  padding: 5px 0;
  display: block;
  border-bottom: 1px solid gray;
`;

function App() {
  return (
    <BrowserRouter>
      <AdminView>
        <Left>
          <H1>Edición de páginas</H1>
          <H2>Páginas</H2>
          {pages.map(page => (
            <div>
              <PagesLinks to={page.path}>{page.path}</PagesLinks>
            </div>
          ))}
          <H2>Componentes</H2>
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
