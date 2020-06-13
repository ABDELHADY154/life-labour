import * as React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Home } from "./Home/Home";
import { Jobs } from "./Jobs/JobPage";
// import LOGO from "../assets/LOGO.png";
// import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

export function Pages() {
  return (
    <React.Fragment>
      <Router>
        <Switch>
          <Route path="/jobs">
            <Jobs />
          </Route>
          <Route path="/">
            <Home />
          </Route>

          {/* <Route path="/Price"></Route> */}
        </Switch>
      </Router>
    </React.Fragment>
  );
}
