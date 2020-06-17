import React, { Fragment } from "react";
import { Row, Col } from "react-bootstrap";
// import logo from "./logo.svg";
import "./App.css";
import { NAVBAR } from "./Header";
import { Pages } from "./Route";
import { Footer } from "./Footer";

export function App() {
  return (
    <Fragment>
      <Row>
        <Col>
          <NAVBAR />
        </Col>
      </Row>
      <Pages />
      <Row>
        <Col>
          <Footer />
        </Col>
      </Row>
    </Fragment>
  );
}
