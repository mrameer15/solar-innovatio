import React, { useEffect, useState } from "react";
import { memo } from "react";
import SimpleList from "./SimpleList";
import SwipeList from "./SwipeList";

const Connettiti = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counter, setCounter] = useState(window.screen.width);

  const showSwipe = () => {
    setCounter(window.innerWidth);
    if (window.innerWidth < 992) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  useEffect(() => {
    // Add an event listener for the "resize" event
    window.addEventListener("resize", showSwipe);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", showSwipe);
    };
  }, []);
  let slide = 2;
  if (counter < 768) {
    slide = 1;
  }
  return (
    <>
      <section className="connetitti-section">
        <div className="row m-0 p-0 w-100">
          <div className="col-9 mx-auto p-0">
            <div className="row">
              <div className="d-flex flex-column justify-content-center align-items-center connetitti p-0">
                <h2 className="heading">Connettiti al sole anche tu</h2>
                <p className="heading-underline"></p>
                {isVisible ? <SwipeList slide={slide} /> : <SimpleList />}
                <div className="d-flex justify-content-center p-0 w-100 button-div">
                  <button className="collegati-button">
                    Collegati al sole
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(Connettiti);
