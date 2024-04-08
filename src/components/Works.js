import React from 'react';
import bananas from '../bananas.jpeg';
import dragonfrut from '../dragonfrut.jpeg';
import orange from '../orange.jpeg';
import mango from '../mango.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearchPlus } from '@fortawesome/free-solid-svg-icons';

const Works = () => {
  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={bananas}
              alt="Banana cookies"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={dragonfrut}
              alt="celebration party"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={orange}
              alt="celebration party"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box">
            <img
              className="portfolio-image"
              src={mango}
              alt="celebration party"
            />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
