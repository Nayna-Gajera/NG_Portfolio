import React from 'react';
import myPic from '../mypic.png';

const AboutMe = () => {
  return (
    <div id="aboutMe" className="container py-5">
      <div className="row">
        <div className="col-lg-6 col-xm-12">
          <div className="photo-wrap mb-5">
            <img className="profile-pic mt-4" src={myPic} alt="Nayna's Pic" />
          </div>
        </div>
        <div className="col-lg-6 col-xm-12">
          <h2 className="c-heading">
            <b>About Me</b>
          </h2>
          <p>
            I portray myself as a computer science professional with a Master's
            degree from California State University-Long Beach, my love for
            computer science was a gradual journey for me and it all started
            with writing a code in C almost a decade ago!! From there, learning
            and working on some major facets of computer science subject, not
            only helped me to learn but paved a path for my dream to become
            subject matter expert in that field. I am passionate about coding
            and I love to learn different technologies especially web UI
            development. My expertise and knowledge made me confirmable to
            flourish best in the area of web development and front-end
            development roles. In my free time, you can find me to do painting,
            playing badminton and at the beach. 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
