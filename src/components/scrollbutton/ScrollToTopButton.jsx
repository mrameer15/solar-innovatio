import React, { useState, useEffect, memo } from "react";
import { NavLink } from "react-router-dom";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const updateScrollPosition = () => {
    if (window.scrollY > 300) {
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

  return (
    <NavLink
      className={`fixed-button`}
      onClick={scrollToTop}
      style={{ display: isVisible ? "block" : "none" }}
    >
      <i className="fa-solid fa-arrow-up fixed-icon"></i>
    </NavLink>
  );
};

export default memo(ScrollToTopButton);
