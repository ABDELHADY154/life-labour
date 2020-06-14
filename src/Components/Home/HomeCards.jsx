import * as React from "react";
import Consulting from "../../assets/consulting.png";
import Files from "../../assets/files-and-folders.png";
import goal from "../../assets/goal.png";
import light from "../../assets/lightbulb.png";
// import LOGO from "../assets/LOGO.png";
import { CardGroup, Card, Button, Col } from "react-bootstrap";

export function HomeCards() {
  return (
    <React.Fragment>
      <div class="card-group" style={{ textAlign: "center" }}>
        <Col>
          <div class="card" style={{ width: "18em", border: "none" }}>
            <img class="card-img-top" src={Files} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div class="card" style={{ width: "18em", border: "none" }}>
            <img class="card-img-top" src={goal} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div class="card" style={{ width: "18em", border: "none" }}>
            <img class="card-img-top" src={Consulting} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Col>
        <Col>
          <div
            class="card"
            style={{ width: "18em", height: "25em", border: "none" }}
          >
            <img class="card-img-top" src={light} alt="Card image cap" />
            <div class="card-body">
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          </div>
        </Col>
      </div>

      {/* <CardGroup>
        <Col>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img className="cardImg" variant="top" src={Consulting} />
            <Card.Body>
              <Card.Text>
                Prepare for the job. Get career coach training, courses
                varieties and discounts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img className="cardImg" variant="top" src={Files} />
            <Card.Body>
              <Card.Text>
                Prepare for the job. Get career coach training, courses
                varieties and discounts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img className="cardImg" variant="top" src={goal} />
            <Card.Body>
              <Card.Text>
                Prepare for the job. Get career coach training, courses
                varieties and discounts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem", border: "none" }}>
            <Card.Img className="cardImg" variant="top" src={light} />
            <Card.Body>
              <Card.Text>
                Prepare for the job. Get career coach training, courses
                varieties and discounts.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </CardGroup> */}
    </React.Fragment>
  );
}
