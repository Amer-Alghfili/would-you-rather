import React from "react";
import "./styles/style.css";

export default props => {
  return (
    <li className="question-list__question">
      <div className="box question">
        <h1 className="question-list__question-name">{props.name}</h1>
        <h2>Would You Rather</h2>
        <ul className="question-list__question-options">
          <li className="question-list__question-option">{props.optionOne}</li>
          <li className="question-list__question-option">{props.optionTwo}</li>
        </ul>
      </div>
    </li>
  );
};
