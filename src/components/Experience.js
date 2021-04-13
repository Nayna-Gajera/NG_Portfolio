import React from 'react';
import cob from '../cob.png';
import trootech from '../trootech_logo.png';

const Experience = () => {
  return (
    <div id="experience" className="container">
      <div className="col-md-12 ml-auto mr-auto">
        <div className="text-center c-heading">
          <h2 className="c-heading">
            <b>Work Experience</b>
          </h2>
        </div>

        <div className="dropdown-divider"></div>

        <div className="title text-center">
          <h5>
            <b>Total Experience - 2 year's</b>
          </h5>
        </div>

        <div className="row collections rowstyle">
          <div className="col-md-4">
            <div className="ml-auto mr-auto images">
              <img className="cba-img" src={cob} alt="cob" />
            </div>
          </div>

          <div className="col-md-8">
            <div className="description">
              <h5>
                <b>RESEARCH & WEB DEVELOPER, LONG BEACH, CALIFORNIA</b>
              </h5>

              <div className="dropdown-divider"></div>

              <h6>College of Business - CSULB ( 8 months )</h6>

              <ul class="expDescription">
                <li>
                  Implemented blockchain technology in different areas. Skills
                  involves deep understanding of blockchain technology,
                  cryptography algorithms and python programming skills.
                </li>
                <li>
                  Developed and maintained web application. Skills involves
                  HTML, CSS3, JavaScript and MySQL database management.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row collections rowstyle">
          <div className="col-md-4">
            <div className="ml-auto mr-auto images">
              <img className="trootech" src={trootech} alt="trootech" />
            </div>
          </div>

          <div className="col-md-8">
            <div className="description">
              <h5>
                <b>FRONT-END DEVELOPER</b>
              </h5>

              <div className="dropdown-divider"></div>

              <h6>India ( 16 months )</h6>

              <ul>
                <li>
                  Developed project from scratch with ReactJS, ReduxJS, Router,
                  Webpack, and D3.js.
                </li>
                <li>
                  Created different types of graphs (bar, line, polygon) using
                  D3.js to represent the data in such a way that it becomes very
                  easy for analyze for customers.
                </li>
                <li>
                  Developed Node API’s to get/post data from/to Hadoop tables
                  for POC purpose.
                </li>
                <li>
                  Created a fully responsive web application with user-friendly
                  features by using media queries.
                </li>
                <li>
                  Responded to customer feedback and made changes accordingly to
                  improve customer experience.
                </li>
                <li>
                  Created variety of components such as upload/download files,
                  nested list for side menu bar, header navigation bar, search
                  with input and filter, data table for editable rows and with
                  drag and drop functionality, table, list, graphs, panels,
                  buttons, forms, feedback, select, text input, text area, menu
                  item, and message box.
                </li>
                <li>
                  Developed a nested layout project structure and handle
                  components through props and state management with ReduxJS and
                  wrote action creator and reducer as per requirement.
                </li>
                <li>
                  Used in-build components such as React-tooltip and
                  React-select for auto-suggest and multiple select dropdowns,
                  React-beautiful-dnd, React-icons/fa, React-spinners,
                  React-chartjs-2, and much more.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
