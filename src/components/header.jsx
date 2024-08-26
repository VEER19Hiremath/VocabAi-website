import React from "react";
import "../styles/header.css";

export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="slideshow">
          <img src="../img/intro-bg" alt="Slide 1" />
          <img src="../img/intro-bg.jpg" alt="Slide 2" />
          <img src="../img/intro-bg.jpg" alt="Slide 3" />
        </div>
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-2 intro-text">
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#features"
                  className="btn btn-custom btn-lg page-scroll"
                >
                  Learn More
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
