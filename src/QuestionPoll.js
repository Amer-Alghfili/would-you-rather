import React from "react";
import "./styles/style.css";

export default props => {
  const { question, user } = props;
  const { text: textOne, votes: votesOne } = question.optionOne;
  const { text: textTwo, votes: votesTwo } = question.optionTwo;
  const totalOfVotes = votesOne.length + votesTwo.length;
  const questionOnePercentage = (votesOne.length / totalOfVotes) * 100;
  const questionTwoPercentage = (votesTwo.length / totalOfVotes) * 100;
  return (
    <section className="question-poll">
      <div className="container">
        <div className="box">
          <h1 className="question-poll__title">Results</h1>
          <ul className="question-poll__options-poll">
            <li className="question-poll__option-poll">
              <h2 className="question-poll__option">{`${textOne}${
                question.optionOne.votes.includes(user.id)
                  ? `(Your vote)`
                  : null
              }`}</h2>
              <div className="question-poll__bar">{`${questionOnePercentage}%`}</div>
              <span className="question-poll__statistics">{`${question.optionOne.votes.length} votes out of ${totalOfVotes} votes`}</span>
            </li>
            <li className="question-poll__option-poll">
              <h2 className="question-poll__option">{`${textTwo}${
                question.optionTwo.votes.includes(user.id)
                  ? `(Your vote)`
                  : null
              }`}</h2>
              <div className="question-poll__bar">{`${questionTwoPercentage}%`}</div>
              <span className="question-poll__statistics">{`${question.optionTwo.votes.length} votes out of ${totalOfVotes} votes`}</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
