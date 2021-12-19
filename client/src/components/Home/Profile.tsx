import React from "react";
import Typical from "react-typical";

export default function Profile() {
  return (
    <div className="homeContainer">
      <div className="homeParent">
        <div className="homeDetail">
          <div className="colmns">
            <div className="colmnsIcons">
              <a href="#home">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="#home">
                <i className="fa fa-google-plus-square"></i>
              </a>
              <a href="#home">
                <i className="fa fa-facebook-instagram"></i>
              </a>
              <a href="#home">
                <i className="fa fa-youtube-square"></i>
              </a>
              <a href="#home">
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="homeDetailsName">
          <span className="primaryText">
            {""}
            Hi! I am <span className="highlightedText">Irshad</span>
          </span>
          <div className="homeDetailRole">
            <span className="primaryText">
              {""}
              <h1>
                {""}
                <Typical
                  loop={Infinity}
                  steps={[
                    "FULL STACK DEVELOPER",
                    1000,
                    "MERN STACK DEV.",
                    1000,
                    "REACT/REACT NATIV",
                    1000,
                  ]}
                />
              </h1>
              <span className="profiletagline">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
                architecto numquam magni officiis suscipit asperiores blanditiis
                perferendis explicabo consequatur porro!
              </span>
            </span>
          </div>
          <div className="profileOption">
            <button className="btn primary-btn">
              {""}
              Ready to Work!{""}
            </button>
            <a href="#home">
              <button className="btn highlightedbtn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profilePic">
          <div className="profileBg"></div>
        </div>
      </div>
    </div>
  );
}
