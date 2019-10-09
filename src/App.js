import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from "styled-components";

import UiHeader from "./components/ui/header/default";
import UiFooter from "./components/ui/footer/default";

import Home from "./components/pages/home";
import Categories from "./components/pages/categories";
import Book from "./components/pages/book";

import Admin from "./admin/index";

const pages = [
  {
    path: "/homepage",
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

// console.log(Home().props);

function App() {
  return (
    <BrowserRouter>
      <AdminView>
        <Left>
          <Admin {...{ pages }}></Admin>
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
