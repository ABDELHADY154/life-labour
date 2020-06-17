import * as React from "react";
import LOGO from "../assets/loxgo.png";
import { Nav, Navbar } from "react-bootstrap";

export function Footer() {
  return (
    <React.Fragment>
      <Nav class="navbar navbar-dark bg-dark" id="footer">
        <Navbar.Brand href="/">
          <img
            src={LOGO}
            width="100"
            height="30"
            className="footerLogo"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
        <div className="s" style={{ marginRight: 380 }}>
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <Nav.Link className="NavLink" href="/">
                Home
              </Nav.Link>
            </li>
            <li class="nav-item">
              <Nav.Link className="NavLink" href="/jobs">
                Jobs
              </Nav.Link>
            </li>
            <li class="nav-item">
              <Nav.Link className="NavLink" href="/Price">
                Pricing
              </Nav.Link>
            </li>
            <li class="nav-item">
              <Nav.Link className="NavLink" href="/About">
                About
              </Nav.Link>
            </li>
          </ul>
        </div>
      </Nav>
      {/* <br /> */}
      {/* <Nav className="mr-auto">
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
        </Nav> */}
    </React.Fragment>
  );
}
