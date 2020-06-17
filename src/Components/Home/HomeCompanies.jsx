import * as React from "react";

import IMG from "../../assets/homeCompanies.png";
import Argineering from "../../assets/Argineering.png";
import boasta from "../../assets/boasta.png";
import breadfast from "../../assets/breadfast.png";
import dplyr from "../../assets/dplyr.png";
import khazna from "../../assets/khazna.png";

import { Image, Card, CardGroup, Media } from "react-bootstrap";

export function HomeCompanies() {
  return (
    <React.Fragment>
      <div className="homeDiv">
        {/* <div className="div2"> */}
        <h2 className="float-none" style={{ textAlign: "center" }}>
          Companies
        </h2>
        <Image src={IMG} fluid className="companiesImg float-left" />
        {/* </div> */}
        <CardGroup>
          <Card className="Media">
            <Media>
              <Media.Body>
                <img
                  width={64}
                  height={64}
                  className="ml-3"
                  src={Argineering}
                  alt="Generic placeholder"
                />
                <p className="pimg">Argineering</p>
              </Media.Body>
              <Media.Body>
                <img
                  width={64}
                  height={64}
                  className="ml-3"
                  src={boasta}
                  alt="Generic placeholder"
                />
                <p className="pimg">boasta</p>
              </Media.Body>
              <Media.Body>
                <img
                  width={64}
                  height={64}
                  className="ml-3"
                  src={breadfast}
                  alt="Generic placeholder"
                />
                <p className="pimg">breadfast</p>
              </Media.Body>
              <Media.Body>
                <img
                  width={64}
                  height={64}
                  className="ml-3"
                  src={dplyr}
                  alt="Generic placeholder"
                />
                <p className="pimg">DPLYR</p>
              </Media.Body>
              <Media.Body>
                <img
                  width={64}
                  height={64}
                  className="ml-3"
                  src={khazna}
                  alt="Generic placeholder"
                />
                <p className="pimg">khazna</p>
              </Media.Body>
            </Media>
          </Card>
        </CardGroup>
      </div>
    </React.Fragment>
  );
}
