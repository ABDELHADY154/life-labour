import * as React from "react";

// import LOGO from "../assets/LOGO.png";
// import { Nav, Navbar, Form, FormControl, Button } from "react-bootstrap";

export function HomeVideo() {
  return (
    <React.Fragment>
      <div class="embed-responsive embed-responsive-16by9" id="videoDiv">
        <iframe
          title="vid"
          class="embed-responsive-item"
          src="https://www.youtube.com/embed/GBGCGSPSK3k"
        ></iframe>
      </div>
    </React.Fragment>
  );
}
