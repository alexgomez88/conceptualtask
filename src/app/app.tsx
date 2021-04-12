import * as React from "react";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

import { Menu } from "./components";
import { Home } from "./screens"
import "./main.scss";

export const App = () => {
  return (
    <Router>
      <div id="main-screen">
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
      <Menu />
    </Router>
  );
};


function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
