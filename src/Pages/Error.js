import React, { useEffect } from "react";
import Button from "../Components/Button/Button";
import "../Components/Button/Button.css";
import "../Components/Background/HomeBackground2.css";
import { Link, useNavigate } from "react-router-dom";
import c1 from "../Assets/c1.png";
import c2 from "../Assets/c2.png";
import c3 from "../Assets/c3.png";

const Error = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.body.classList.add("home");
  });
  const handleClick = (buttonType) => {
    if (buttonType === "start") {
      navigate("/register");
      document.body.classList.remove("home");
    } else if (buttonType === "continue") {
      navigate("/login");
      document.body.classList.remove("home");
    }
  };

  return (
    <div className="pageContainer">
      <div className="landingPageBackground"></div>
      <div className="scroll">
        <div className="landingPage">
          <div className="navbar">
            <a href="strona_home.html">
              <div className="left">PixelHeart</div>
            </a>
            <div className="right">
              <a href="/">
                <div>Home</div>
              </a>
              <a href="/">
                <div>About Us</div>
              </a>
              <Link to="login">
                <a href="" onClick={() => handleClick("continue")}>
                  <div>Login</div>
                </a>
              </Link>
              {/*<div> <Button onClick={() => handleClick()} text="Login" ></Button></div>*/}
            </div>
          </div>
          <div className="content">
            <div className="text">
              <div className="headline">Ups... something went wrong :/</div>
            </div>
            <div className="getStarted">
              <div>
                {" "}
                <Button
                  onClick={() => navigate("/")}
                  text="Back to home"
                ></Button>
              </div>
            </div>
          </div>
        </div>
        <div className="landingPage info">
          <div className="stars">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h1 id="about_us">Info</h1>
        </div>
      </div>
      <div className="clouds">
        <img className="c1" src={c1} />
        <img className="c2" src={c2} />
        <img className="c3" src={c3} />
      </div>
    </div>
  );
};

export default Error;
