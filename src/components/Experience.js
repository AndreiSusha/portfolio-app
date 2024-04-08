import React from 'react';

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2019 - 2020</h3>
            <p>
              During these years, I spent time in a training center, where I
              acquired skills to assist individuals with disabilities.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2020 - 2021</h3>
            <p>
              My training program was successfully completed, and I began
              providing assistance to individuals with physical disabilities.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2021 - 2022</h3>
            <p>
              Throughout these years, I participated in therapeutic sessions,
              aiding individuals with mental health issues.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2022 - 2023</h3>
            <p>
              I participated in scientific research, assisting scientists in
              understanding the behavior and cognitive abilities of monkeys.
            </p>
          </div>
        </div>
        {/* - */}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>2023 - 2024</h3>
            <p>
              In the final year, I became a star of educational programs,
              participating in demonstrations and interacting with visitors to
              expand their knowledge about nature and ourselves.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
