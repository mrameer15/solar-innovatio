import React from "react";
import data from "../../../api/ask question/AskQuestions";
import { useState } from "react";
import { memo } from "react";

const AskQuestion = () => {
  const [questionStates, setQuestionStates] = useState(data.map(() => false));

  const toggleQuestion = (index) => {
    setQuestionStates((prevStates) => {
      const newStates = [...prevStates];
      newStates[index] = !newStates[index];
      return newStates;
    });
  };

  return (
    <>
      <section className="ask-question-section">
        <div className="row m-0 p-0 w-100">
          <div className="col-9 mx-auto p-0">
            <div className="row">
              <div className="d-flex flex-column justify-content-center align-items-center ask-question p-0">
                <h2 className="heading">Frequently Asked Questions</h2>
                <p className="heading-underline"></p>
                <div className="d-flex flex-column ask-question-list gap-4 ">
                  {data.map((val) => {
                    return (
                      <div
                        className="d-flex flex-column list-member gap-3  "
                        key={val.id}
                      >
                        <div className="d-flex question-div gap-4 ">
                          <div
                            className={`icon-div d-flex flex-column justify-content-center ${
                              questionStates[val.id] ? "active" : ""
                            }`}
                            onClick={() => {
                              toggleQuestion(val.id);
                            }}
                          >
                            {questionStates[val.id] ? (
                              <img
                                src="/Images/ask-question/minus.png"
                                alt="plus-img"
                                style={{ width: "18.2px", height: "2.7px" }}
                                className="plus-icon"
                              />
                            ) : (
                              <img
                                src="/Images/ask-question/plus.png"
                                alt="plus-img"
                                style={{ width: "19.97px", height: "19.97px" }}
                                className="plus-icon"
                              />
                            )}
                          </div>
                          <p className="m-0 question">{val.que}</p>
                        </div>
                        <div
                          className="answer-div"
                          style={{
                            display: questionStates[val.id] ? "block" : "none",
                          }}
                        >
                          <p className="answer">{val.ans}</p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="button-div">
                  <button>Collegati al sole</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default memo(AskQuestion);
