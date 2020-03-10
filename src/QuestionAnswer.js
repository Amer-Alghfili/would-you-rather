import React from "react";
import "./styles/style.css";

export default props => {
  const {
    question,
    option,
    optionChnageHandler,
    answerSubmitionHandler
  } = props;
  return (
    <section className="question-answer">
      <div className="container">
        <div className="box">
          <h1 className="question-answer__title">Would You Rather</h1>
          <label>
            <input
              className="question-answer__field"
              type="radio"
              value="optionOne"
              checked={option === "optionOne"}
              onChange={optionChnageHandler}
            />
            {question.optionOne.text}
          </label>
          <label>
            <input
              className="question-answer__field"
              type="radio"
              value="optionTwo"
              checked={option === "optionTwo"}
              onChange={optionChnageHandler}
            />
            {question.optionTwo.text}
          </label>
          <button
            className="question-answer__submit button"
            onClick={answerSubmitionHandler}
          >
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};
