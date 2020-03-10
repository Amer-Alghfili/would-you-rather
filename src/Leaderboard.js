import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
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
    return Object.keys(users).sort((a, b) => {
      if (users[a].score > users[b].score) {
        return -1;
      } else if (users[a].score < users[b].score) {
        return 1;
      } else {
        return 0;
      }
    });
  };

  render() {
    if (!this.props.authed) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { target: this.props.location.pathname }
          }}
        />
      );
    }
    const { users } = this.props;
    if (Object.keys(users).length === 0) {
      return <h1 style={{color: 'black'}}>Loading...</h1>;
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
  users: state.users,
  authed: state.authed
});

export default connect(mapStateToProps)(Leaderboard);
