import React, { Component } from "react";
import { connect } from "react-redux";
import UserAchievement from "./UserAchievement";

class Leaderboard extends Component {
  assignUsersScores = () => {
    let obj = { ...this.props.users };
    for (const user in obj) {
      const score =
        Object.keys(obj[user].answers).length + obj[user].questions.length;
      obj[user].score = score;
    }
    return this.sortByScore(obj);
  };

  sortByScore = users => {
    return Object.keys(users).sort((a, b) => users[b].score - users[a].score);
  };

  render() {
    const { users } = this.props;
    if (Object.keys(users).length === 0) {
      return <h1 style={{ color: "black" }}>Loading...</h1>;
    }
    const renderedUsers = this.assignUsersScores().map((id, index) => (
      <UserAchievement
        key={id}
        rank={index + 1}
        name={users[id].name}
        answers={Object.keys(users[id].answers).length}
        questions={users[id].questions.length}
        score={users[id].score}
      />
    ));
    return <ul className="leaderboard__users">{renderedUsers}</ul>;
  }
}

const mapStateToProps = state => ({
  users: state.users
});

export default connect(mapStateToProps)(Leaderboard);
