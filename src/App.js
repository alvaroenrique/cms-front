import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import UiHeader from "./components/ui/header/default";
import UiFooter from "./components/ui/footer/default";

import Home from "./components/pages/home";
import Categories from "./components/pages/categories";

const pages = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/categories",
    component: Categories
  }
];

function App() {
  return (
    <BrowserRouter>
      <UiHeader></UiHeader>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/categories">categories</Link>
          </li>
        </ul>
      </nav>

      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
