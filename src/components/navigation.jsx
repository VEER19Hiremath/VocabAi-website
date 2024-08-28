import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";  // Import Link from react-scroll
import '../styles/navigation.css'

export const Navigation = (props) => {
  const navigate = useNavigate();

  const handleNavigation = (section) => {
    // Navigate to the home page, then scroll to the section
    navigate("/");
    setTimeout(() => {
      document.getElementById(section).scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            <img src="/img/logo.png" alt="Logo" className="logo" style={{ maxHeight: '50px', marginRight: '10px' }} /> 
          </a>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <ScrollLink
                to="features"
                smooth={true}
                duration={1000}
                className="page-scroll"
                onClick={() => handleNavigation("features")}
              >
                Features
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="about"
                smooth={true}
                duration={1000}
                className="page-scroll"
                onClick={() => handleNavigation("about")}
              >
                About
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="services"
                smooth={true}
                duration={1000}
                className="page-scroll"
                onClick={() => handleNavigation("services")}
              >
                Services
              </ScrollLink>
            </li>
            <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                Demo <b className="caret"></b>
              </a>
              <ul className="dropdown-menu">
                <li><Link to="/text-analytics-demo">Text Analytics Demo</Link></li>
                <li><Link to="/image-analytics-demo">Image Analytics Demo</Link></li>
                <li><Link to="/speech-emotions-demo">Speech Emotions Demo</Link></li>
              </ul>
            </li>
            <li>
              <ScrollLink
                to="testimonials"
                smooth={true}
                duration={1000}
                className="page-scroll"
                onClick={() => handleNavigation("testimonials")}
              >
                Gallery
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="team"
                smooth={true}
                duration={1000}
                className="page-scroll"
                onClick={() => handleNavigation("team")}
              >
                Team
              </ScrollLink>
            </li>
            <li>
              <ScrollLink
                to="contact"
                smooth={true}
                duration={1000}
                className="page-scroll"
                onClick={() => handleNavigation("contact")}
              >
                Contact
              </ScrollLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
