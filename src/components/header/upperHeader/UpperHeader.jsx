import React from "react";
import { memo } from "react";
import { NavLink } from "react-router-dom";

const UpperHeader = () => {
  const scrollToComponent = (componentId) => {
    const element = document.getElementById(componentId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <>
      <div className="upper-header-section">
        <div className="row p-0 m-0 w-100">
          <div className="col-10 mx-auto p-0">
            <div className="upper-header d-flex justify-content-between gap-4">
              <div className="logo-div">
                <NavLink to="">
                  <img
                    src="/Images/header/logo.png"
                    alt="header-logo"
                    className="header-logo"
                  />
                </NavLink>
              </div>
              <div className="info-div d-flex justify-content-end align-items-center">
                <div className="phone-div">
                  <NavLink
                    to=""
                    className="phone-link d-flex align-items-center"
                  >
                    <img
                      src="/images/header/phone.png"
                      alt="phone"
                      className="phone-logo"
                    />
                    <p className="phone m-0 p-0">0203 519 4420</p>
                  </NavLink>
                </div>
                <div className="email-div">
                  <NavLink
                    to=""
                    className="email-link d-flex align-items-center"
                  >
                    <img
                      src="/images/header/mail.png"
                      alt="mail"
                      className="email-logo"
                    />
                    <p className="email m-0 p-0">info@solarinnovatio.com</p>
                  </NavLink>
                </div>
                <button
                  className="contact-button"
                  onClick={() => scrollToComponent("contattaci")}
                >
                  Contact Us
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className="header-themantic-break p-0 m-0" />
    </>
  );
};

export default memo(UpperHeader);
