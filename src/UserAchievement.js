import React from "react";
import "./styles/style.css";
import rank1 from "./img/badge(1).svg";
import rank2 from "./img/badge(2).svg";
import rank3 from "./img/badge(3).svg";

export default props => {
  let badge;
  if (props.rank === 1) {
    badge = <img className="leaderboard__user-rank" src={rank1} alt="Rank 1" />;
  } else if (props.rank === 2) {
    badge = <img className="leaderboard__user-rank" src={rank2} alt="Rank 2" />;
  } else if (props.rank === 3) {
    badge = <img className="leaderboard__user-rank" src={rank3} alt="Rank 3" />;
  } else {
    badge = null;
  }

  return (
    <li className="leaderboard__user">
      <div className="box">
        {badge}
        <h1 className="leaderboard__user-name">{props.name}</h1>
        <div className="leaserboard__user-statistics">
          <p>{`Answered Questions: ${props.answers}`}</p>
          <p>{`Questions Created: ${props.questions}`}</p>
        </div>
        <div className="score">
          <h3 className="leaderboard__score-title">Score</h3>
          <div className="circle">
            <div className="leaderboard__score-result">
              <p>{props.score}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
