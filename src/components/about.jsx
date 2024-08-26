import React, { useState } from 'react';
import '../styles/about.css'; // Ensure the path to your CSS file is correct
import TypingEffect from './TypinfEffect'; // Import the TypingEffect component

export const About = (props) => {
  // State to track which items are expanded
  const [expandedItems, setExpandedItems] = useState({});

  // Function to toggle the expansion of list items
  const toggleExpand = (index) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  // Helper function to split the text at the first colon
  const splitText = (text) => {
    const [beforeColon, afterColon] = text.split(/:(.+)/);
    return { beforeColon, afterColon };
  };

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <div className="about-image-container">
              <img src="img/about.jpg" className="img-responsive" alt="About Us" />
            </div>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text-container">
              <h2>About Us</h2>
              {/* Use TypingEffect component */}
              <TypingEffect text={props.data ? props.data.paragraph : "loading..."} />
            </div>
          </div>
        </div>

        {/* Adding space between About Us and Why Choose Us sections */}
        <div className="spacer"></div>

        {/* Separate Why Choose Us Block */}
        <div className="row">
          <div className="col-xs-12">
            <div className="why-choose-us-container">
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => {
                          const { beforeColon, afterColon } = splitText(d);
                          return (
                            <li key={`${d}-${i}`}>
                              {beforeColon}
                              {afterColon && (
                                <>
                                  <button
                                    className="expand-btn"
                                    onClick={() => toggleExpand(i)}
                                  >
                                    {expandedItems[i] ? "-" : "+"}
                                  </button>
                                  {expandedItems[i] && (
                                    <span className="expanded-text">{afterColon}</span>
                                  )}
                                </>
                              )}
                            </li>
                          );
                        })
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => {
                          const { beforeColon, afterColon } = splitText(d);
                          return (
                            <li key={`${d}-${i}`}>
                              {beforeColon}
                              {afterColon && (
                                <>
                                  <button
                                    className="expand-btn"
                                    onClick={() => toggleExpand(`Why2-${i}`)}
                                  >
                                    {expandedItems[`Why2-${i}`] ? "-" : "+"}
                                  </button>
                                  {expandedItems[`Why2-${i}`] && (
                                    <span className="expanded-text">{afterColon}</span>
                                  )}
                                </>
                              )}
                            </li>
                          );
                        })
                      : "loading"}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
