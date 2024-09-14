import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/navigation";
import { Element } from "react-scroll";  // Import react-scroll's Element
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Services } from "./components/services";
import { Gallery } from "./components/gallery_images";
import { Demo } from "./components/demo";
import { Testimonials } from "./components/testimonials";
import { Team } from "./components/Team";
import { Contact } from "./components/contact";
import { TextAnalytics } from "./components/textAnalytics"; // Import the new component
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import { ImageAnalytics } from "./components/imageAnalytics";
import "./App.css";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});
  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header data={landingPageData.Header} />
                <Element name="features">
                  <Features data={landingPageData.Features} />
                </Element>
                <Element name="why-choose-us-container">
                  <About data={landingPageData.About} />
                </Element>
                <Element name="services">
                  <Services data={landingPageData.Services} />
                </Element>
                <Element name="portfolio">
                  <Gallery data={landingPageData.Gallery_Photos} />
                </Element>
                {/* <Element name="testimonials">
                  <Testimonials data={landingPageData.Testimonials} />
                </Element> */}
                <Element name="team">
                  <Team data={landingPageData.Team} />
                </Element>
            

              </>
            }
          />
          <Route
            path="/text-analytics-demo"
            element={<TextAnalytics data={landingPageData.Text_Analytics} />}
          />
           <Route
            path="/image-analytics-demo"
            element={<ImageAnalytics data={landingPageData.Image_Analytics} />}
          />
        </Routes>
        <Contact data={landingPageData.Contact} />
      </div>
    </Router>
  );
};

export default App;
