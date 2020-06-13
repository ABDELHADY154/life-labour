import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
// import logo from "./logo.svg";
import "./App.css";
import { NAVBAR } from "./Header";
import { Pages } from "./Route";

export function App() {
  return (
    <Fragment>
      <Row>
        <Col>
          <NAVBAR />
        </Col>
      </Row>
      <Pages />
    </Fragment>
  );
}

// export default App;
