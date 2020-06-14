import * as React from "react";
import { LandingCarousel } from "./LandingCarousel";
import { Row, Col } from "react-bootstrap";
import { HomeVideo } from "./HomeVideo";
import { HomeCards } from "./HomeCards";
// import LOGO from "../assets/LOGO.png";
// import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

export function Home() {
  return (
    <React.Fragment>
      <Row>
        <LandingCarousel />
      </Row>
      <Row>
        <Col>
          <HomeVideo />
        </Col>
      </Row>
      <Row>
        <Col>
          <HomeCards />
        </Col>
      </Row>
    </React.Fragment>
  );
}
