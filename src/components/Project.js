import React from 'react';

const Project = () => {
  return (
    <div id="projects" className="projects">
      <div className="container">
        <div className="text-center">
          <h2 className="c-heading">
            <b>Projects</b>
          </h2>
          <div className="dropdown-divider"></div>
        </div>
        <br />
        <div className="container projects-wrapper">
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h6>Dec 2020 - Jan 2021</h6>
              <h4>Task Management Application</h4>
              <p>
                <ul>
                  <li>
                    Created a React project to add, edit or delete an object
                    within task management application.
                  </li>
                  <li>
                    Utilized React hooks, useEffect, useState and useRef to
                    implement required functionalities.
                  </li>
                  <li>
                    Within application, user can add and edit the task, create a
                    custom edit input and marked the task as completed.
                  </li>
                </ul>
              </p>
              <h5>
                <b>
                  <a
                    className="moreDetail"
                    href="https://github.com/Nayna-Gajera/Task_Management_App"
                  >
                    More Details...
                  </a>
                </b>
              </h5>
              <br />
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h6>May 2020</h6>
              <h4>Covid-19 Tracker</h4>
              <p>
                <ul>
                  <li>
                    Developed project which is going to fetch the live data from
                    the API using Async/Await syntax and going to display
                    fetched information on cards and charts.
                  </li>
                  <li>
                    Used ReactJS with the addition of Charts.js, Material UI,
                    React Hooks, API data fetching and many other different
                    modules.
                  </li>
                  <li>
                    User can select the country name and accordingly record will
                    get display on cards as well as Chart.
                  </li>
                </ul>
              </p>
              <h5>
                <b>
                  <a
                    className="moreDetail"
                    href="https://github.com/Nayna-Gajera/COVID19_Tracker"
                  >
                    More Details...
                  </a>
                </b>
              </h5>
              <br />
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h6>Aug 2019 - Feb 2020</h6>
              <h4>Yelp Camp Application</h4>
              <p>
                <ul>
                  <li>
                    Created a project landing page, as well as campgrounds page
                    that listed all campgrounds. Each campground has details
                    that entailed names, images, descriptions, and prices.
                  </li>
                  <li>
                    Enabled users in creating accounts, adding campgrounds,
                    viewing campgrounds posted by other users, and commenting on
                    favorite campgrounds.{' '}
                  </li>
                  <li>
                    Features included Responsive Web Design, User
                    Authentication, Flash messages responding to user’s
                    interaction.
                  </li>
                </ul>
              </p>
              <h5>
                <b>
                  <a
                    className="moreDetail"
                    href="https://github.com/Nayna-Gajera/Yelp_Camp_Application"
                  >
                    More Details...
                  </a>
                  <br />
                  <a
                    className="moreDetail"
                    href="https://arcane-eyrie-91163.herokuapp.com/"
                  >
                    Click here to see website
                  </a>
                </b>
              </h5>
              <br />
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-left">
            <div className="marker"></div>
            <div className="timeline-content">
              <h6>May 2019 - June 2019</h6>
              <h4>Weather Application</h4>
              <p>
                <ul>
                  <li>
                    Created a React project to add, edit or delete an object
                    within task management application.
                  </li>
                  <li>
                    Utilized React hooks, useEffect, useState and useRef to
                    implement required functionalities.
                  </li>
                  <li>
                    Within application, user can add and edit the task, create a
                    custom edit input and marked the task as completed.
                  </li>
                </ul>
              </p>
              <h5>
                <b>
                  <a
                    className="moreDetail"
                    href="https://github.com/Nayna-Gajera/React_Weather_Application"
                  >
                    More Details...
                  </a>
                </b>
              </h5>
              <br />
            </div>
          </div>
          {/* - */}
          <div className="timeline-block timeline-block-right">
            <div className="marker"></div>
            <div className="timeline-content">
              <h6>Dec 2018</h6>
              <h4>Color Picker</h4>
              <p>
                <ul>
                  <li>
                    This project is a combination of color palette website in
                    which I have taken ideas from both Flat UI colors and
                    Material UI colors website to build my own react colors
                    application.
                  </li>
                  <li>
                    Project allows to view already created palette, to create or
                    design a new palette, edit selected palette and delete.
                  </li>
                  <li>
                    Used Materail-UI, Chroma.js, React Sortable HOC,
                    React-clipboard and many more libraries.
                  </li>
                </ul>
              </p>
              <h5>
                <b>
                  <a
                    className="moreDetail"
                    href="https://github.com/Nayna-Gajera/React_Color_Project"
                  >
                    More Details...
                  </a>
                </b>
              </h5>
              <br />
            </div>
          </div>
          {/* - */}
        </div>
      </div>
    </div>
  );
};

export default Project;
