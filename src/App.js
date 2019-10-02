import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

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

function App() {
  return (
    <BrowserRouter>
      <UiHeader></UiHeader>

      <Switch>
        {pages.map(page => (
          <Route {...page}></Route>
        ))}
      </Switch>

      <UiFooter></UiFooter>
    </BrowserRouter>
  );
}

export default App;
