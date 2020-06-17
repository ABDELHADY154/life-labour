import * as React from "react";
import { LandingCarousel } from "./LandingCarousel";
import { Row, Col } from "react-bootstrap";
import { HomeVideo } from "./HomeVideo";
import { HomeCards } from "./HomeCards";
import { HomeCompanies } from "./HomeCompanies";
// import LOGO from "../assets/LOGO.png";
// import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

export function Home() {
  return (
    <React.Fragment>
      <Row>
        <LandingCarousel />
      </Row>
      <br />
      <Row>
        <Col>
          <HomeVideo />
        </Col>
      </Row>
      <Row>
        <Col className="col-12">
          <HomeCards />
        </Col>
      </Row>
      <Row>
        <Col>
          <HomeCompanies />
        </Col>
      </Row>
    </React.Fragment>
  );
}
