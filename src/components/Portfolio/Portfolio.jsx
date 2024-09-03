import React, { useContext } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { themeContext } from "../../Context";
import "./Portfolio.css";

const Portfolio = () => {
  const { state: { darkMode } } = useContext(themeContext);

  return (
    <div className={`portfolio ${darkMode ? 'dark-mode' : ''}`} id="portfolio">
      {/* Heading */}
      <span className="heading-title">Recent Projects</span>
      <span className="heading-subtitle">Portfolio</span>

      {/* Slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <div className="card c0">
            <div className="card-content">
              <h3>Project 1</h3>
              <p>Description of project 1.</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card c1">
            <div className="card-content">
              <h3>Project 2</h3>
              <p>Description of project 2.</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card c2">
            <div className="card-content">
              <h3>Project 3</h3>
              <p>Description of project 3.</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="card c3">
            <div className="card-content">
              <h3>Project 4</h3>
              <p>Description of project 4.</p>
              <button className="read-more">Read More</button>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Portfolio;
