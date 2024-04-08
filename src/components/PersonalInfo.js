import React from 'react';
import author from '../me.JPG';

const PersonalInfo = () => {
  return (
    <div id="about" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-img" src={author} alt="author" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h1 className="about-heading">about me</h1>
          <p>
            I am a Pygmy Marmoset, the tiniest monkey in the world! Despite my
            small size, I am full of energy and curiosity. Living in the lush
            rainforests of South America, I spend my days swinging from branch
            to branch, foraging for insects, fruits, and tree sap. My fur is a
            beautiful mix of brown, grey, and yellow, helping me blend into the
            foliage and evade predators. I may be small, but I'm mighty when it
            comes to survival! I live in close-knit family groups, where we
            communicate through high-pitched squeaks and chirps. Family means
            everything to me, and we work together to protect and care for one
            another. I may be tiny, but I play a crucial role in the ecosystem
            as a seed disperser and insect hunter. My existence helps maintain
            the balance of the forest, ensuring its health and diversity. So, if
            you ever catch a glimpse of me in the treetops, remember that
            despite my size, I am a vital part of the vibrant tapestry of life
            in the rainforest
          </p>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
