import React, { useState, render, Fragment } from "react";
// import LOGO from "../assets/LOGO.png";
import { Carousel, Button } from "react-bootstrap";
import IMG from "../../assets/Homepage.png";
export function LandingCarousel() {
  return (
    <Fragment>
      <div
        id="carouselExampleIndicators"
        class="carousel slide"
        data-ride="carousel"
      >
        <ol class="carousel-indicators">
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="0"
            class="active"
            id="sliderindicator"
          ></li>
          <li
            data-target="#carouselExampleIndicators"
            data-slide-to="1"
            id="sliderindicator"
          ></li>
          <li
            id="sliderindicator"
            data-target="#carouselExampleIndicators"
            data-slide-to="2"
          ></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img class="d-block w-100" id="img" src={IMG} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" id="img" src={IMG} alt="First slide" />
          </div>
          <div class="carousel-item">
            <img class="d-block w-100" id="img" src={IMG} alt="First slide" />
          </div>
          <div className="centered ">
            <h2>Meet the next generation </h2>
            <p>
              Find out how the latest updates will help you write more appealing
              job posts
            </p>
            <Button
              variant="warning"
              style={{ borderRadius: 0, marginTop: 30 }}
            >
              Categories
            </Button>
            <Button
              variant="warning"
              style={{ borderRadius: 0, marginLeft: 50, marginTop: 30 }}
            >
              Post A Job
            </Button>
          </div>
        </div>

        <a
          class="carousel-control-prev"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a
          class="carousel-control-next"
          href="#carouselExampleIndicators"
          role="button"
          data-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>
    </Fragment>
  );
}
