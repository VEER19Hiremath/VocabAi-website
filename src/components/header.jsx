import React, { useState, useEffect } from "react";
import "../styles/header.css";

export const Header = (props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    '../img/intro-bg.jpg',
    '../img/intro-bg-2.jpg',
    '../img/intro-bg-3.jpg'

  ];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <header id="header">
      <div className="intro">
        <div
          className="background-image"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        ></div>
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
