import React, { useState } from 'react';
import '../styles/about.css'; // Ensure the path to your CSS file is correct

export const About = (props) => {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (index) => {
    setExpandedItems((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const splitText = (text) => {
    const [beforeColon, afterColon] = text.split(/:(.+)/);
    return { beforeColon, afterColon };
  };

  return (
    <div id="why-choose-us-container">
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
                            {expandedItems[i] ? '-' : '+'}
                          </button>
                          {expandedItems[i] && (
                            <span className="expanded-text">{afterColon}</span>
                          )}
                        </>
                      )}
                    </li>
                  );
                })
              : 'loading'}
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
                            {expandedItems[`Why2-${i}`] ? '-' : '+'}
                          </button>
                          {expandedItems[`Why2-${i}`] && (
                            <span className="expanded-text">{afterColon}</span>
                          )}
                        </>
                      )}
                    </li>
                  );
                })
              : 'loading'}
          </ul>
        </div>
      </div>
    </div>
  );
};
