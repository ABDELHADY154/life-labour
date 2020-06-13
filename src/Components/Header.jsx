import * as React from "react";
import LOGO from "../assets/LOGO.png";
import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

export function NAVBAR() {
  return (
    <React.Fragment>
      <Navbar collapseOnSelect expand="md" bg="white" variant="light">
        <Navbar.Brand href="/">
          <img
            src={LOGO}
            width="100"
            height="30"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        {/* <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="NavLink" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="NavLink" href="/jobs">
              Jobs
            </Nav.Link>
            <Nav.Link className="NavLink" href="/Price">
              Pricing
            </Nav.Link>
            <Nav.Link className="NavLink" href="/About">
              About
            </Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link className="NavLink" href="#deets">
              Signin
            </Nav.Link>
            {/* <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
            <Button variant="warning" style={{ borderRadius: 0 }}>
              Get Started
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </React.Fragment>
  );
}
