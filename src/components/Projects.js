import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import {
  faBiohazard,
  faHandsHoldingCircle,
  faHandshake,
  faHouseMedical,
  faSchool,
} from '@fortawesome/free-solid-svg-icons';

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <h1 className="py-5">my projects</h1>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faHandshake}
                  size="2x"
                />
              </div>
              <h3>Assistance for individuals with disabilities</h3>
              <p>
                We, monkeys, are capable of offering assistance to those facing
                physical challenges. Trained as service animals, we can fetch
                objects, open doors, or even provide comforting companionship to
                those in need
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faHandsHoldingCircle}
                  size="2x"
                />
              </div>
              <h3>Therapeutic interventionsn</h3>
              <p>
                Our presence has a soothing effect on humans. When interacting
                with us, individuals with mental health issues or developmental
                disabilities often experience reduced stress, improved mood, and
                enhanced social interaction skills.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon
                  className="icon"
                  icon={faHouseMedical}
                  size="2x"
                />
              </div>
              <h3>Research assistance</h3>
              <p>
                Monkeys, like myself, are frequently involved in scientific
                research. Through our training, we participate in various
                experiments and studies aimed at understanding human diseases,
                cognitive abilities, and behavior.
              </p>
            </div>
          </div>
          {/* - */}
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="box">
              <div className="circle">
                <FontAwesomeIcon className="icon" icon={faSchool} size="2x" />
              </div>
              <h3>Entertainment and educational purposes</h3>
              <p>
                Whether in zoos, wildlife parks, or educational programs, we
                monkeys play a vital role in entertaining and educating people.
                Visitors learn about our behavior, habitat, and the importance
                of conservation efforts through live demonstrations and
                interactive experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
