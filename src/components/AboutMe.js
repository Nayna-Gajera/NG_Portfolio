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
            Once upon a time, there was a kid who had big dreams and wanted
            everything; then, he got shocked when he tried powering a small toy
            DC motor from the outlet and found his real destiny. Hi! My name is
            Alberto Tam Yong.{' '}
          </p>
          <p>
            I am an Electrical Engineer at Applied Medical on the Technology and
            Development, Electrical, team. I received my B.S. in Electrical
            Engineering at the University of California, Riverside, in 2016, and
            have several project experience.{' '}
          </p>
          <p>
            I have an interest on embedded systems, PCB design, robotics,
            research and development, product development, and electronics
            design. I enjoy working in teams and in challenging projects.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
