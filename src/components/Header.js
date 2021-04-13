import React from 'react';
import logo from '../logo1.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-scroll';
import { PopupboxManager, PopupboxContainer } from 'react-popupbox';
import myImg from '../myImg.jpg';
import 'react-popupbox/dist/react-popupbox.css';

const Header = () => {
  const openPopupboxInfo = () => {
    const content = (
      <div id="myInfo" className="info">
        <div className="personalInfo">
          <br />
          <img className="myImg" src={myImg} alt="myImg" />
          <h4 className="name">
            <b>Nayna Gajera</b>
            <h6>Irvine, CA</h6>
          </h4>
          <br />
          <div className="pinfo">
            Email -{' '}
            <a
              className="linkColor"
              href="mailto:nayna.gajera.cs@gmail.com?subject=Need to Contact Nayna Gajera&amp;body=Profile NG Website Contact"
            >
              nayna.gajera.cs@gmail.com
            </a>
            <br />
            Phone No. -{' '}
            <a className="linkColor" href="tel:+14083069320">
              +1 (408)306-9320
            </a>
            <br />
            <br />
          </div>
        </div>
      </div>
    );
    PopupboxManager.open({ content });
  };
  const popupboxConfigInfo = {
    titleBar: {
      enable: true,
      text: 'Contact',
    },
    fadeIn: true,
    fadeInSpeed: 500,
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bd-navbar py-0 fixed-top">
        <div className="container">
          <a className="navbar-brand" href="#">
            <img className="logo" src={logo} alt="logo" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <FontAwesomeIcon icon={faBars} style={{ color: 'white' }} />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="home"
                  offset={-110}
                  className="nav-link active"
                  aria-current="page"
                  href="#"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="aboutMe"
                  offset={-110}
                  class="nav-link"
                  href="#"
                >
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="experience"
                  offset={-110}
                  class="nav-link"
                  href="#"
                >
                  Work Experience
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="projects"
                  offset={-110}
                  class="nav-link"
                  href="#"
                >
                  projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  smooth={true}
                  to="contact"
                  offset={-110}
                  class="nav-link"
                  href="#"
                >
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <a
                  href="https://github.com/Nayna-Gajera"
                  class="nav-link"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Github"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-github"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item">
                <a
                  href="https://www.linkedin.com/in/nayna-gajera-119a90102/"
                  class="nav-link"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Linkedin"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-linkedin"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </li>
              <li className="nav-item" id="contactInfo">
                <Link
                  smooth={true}
                  to="info"
                  offset={-110}
                  href=""
                  class="nav-link"
                  data-bs-toggle="tooltip"
                  data-bs-placement="bottom"
                  title="Info"
                  onClick={openPopupboxInfo}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-info-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M8.93 6.588l-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                  </svg>
                </Link>
                <PopupboxContainer {...popupboxConfigInfo} />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="home" className=" header-wraper">
        <div className="main-info">
          <h1 class="name">Nayna Gajera</h1>
          <h4>Masters of Science in Computer Science & Engineering</h4>
          <h4>California, USA</h4>
        </div>
      </div>
    </div>
  );
};
export default Header;
