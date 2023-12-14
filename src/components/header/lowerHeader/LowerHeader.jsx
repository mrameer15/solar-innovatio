import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { memo } from "react";
import { NavLink } from "react-router-dom";

const LowerHeader = () => {
  const [isVisible, setIsVisible] = useState(false);

  const updateScrollPosition = () => {
    if (window.scrollY > 80) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    // Add the event listener when the component mounts
    window.addEventListener("scroll", updateScrollPosition);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", updateScrollPosition);
    };
  }, []);

  const scrollToComponent = (componentId) => {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div
        className="container-fluid navigation-section"
        style={{
          backgroundColor: isVisible ? "#86be3f" : "white",
          opacity: "0.89",
        }}
      >
        <div className="row w-100">
          <div className="col-10 mx-auto p-0">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid p-0 m-0">
                <NavLink className="navbar-brand " to="/">
                  <img
                    src="/Images/header/logo.png"
                    alt="navbar-logo"
                    className="logo"
                  />
                </NavLink>
                <button
                  className="navbar-toggler bg-white"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav">
                    <li className="nav-item">
                      <NavLink
                        className="link"
                        style={{
                          color: isVisible ? "white" : "#8a8888",
                        }}
                        onClick={() => scrollToComponent("home")}
                      >
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="link"
                        style={{
                          color: isVisible ? "white" : "#8a8888",
                        }}
                        onClick={() => scrollToComponent("chi-siamo")}
                      >
                        Chi Siamo
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="link"
                        style={{
                          color: isVisible ? "white" : "#8a8888",
                        }}
                        onClick={() => scrollToComponent("sire")}
                      >
                        S.I.R.E
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="link"
                        style={{
                          color: isVisible ? "white" : "#8a8888",
                        }}
                        onClick={() => scrollToComponent("features")}
                      >
                        SIRE Features
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="link"
                        style={{
                          color: isVisible ? "white" : "#8a8888",
                        }}
                        onClick={() => scrollToComponent("why")}
                      >
                        Why Sire
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="link"
                        style={{
                          color: isVisible ? "white" : "#8a8888",
                        }}
                        onClick={() => scrollToComponent("scegli")}
                      >
                        SIRE Product
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink
                        className="link"
                        style={{
                          color: isVisible ? "white" : "#8a8888",
                        }}
                        onClick={() => scrollToComponent("connettiti")}
                      >
                        How it Works
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default memo(LowerHeader);
