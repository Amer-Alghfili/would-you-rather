import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Redirect } from "react-router-dom";
import { saveQuestionAnswer } from "./actions/questions";
import QuestionAnswer from "./QuestionAnswer";
import QuestionPoll from "./QuestionPoll";

class QuestionInfo extends Component {
  state = {
    selectedOption: "optionOne"
  };
  changeOptionHandler = event => {
    const { value } = event.target;
    this.setState(() => ({
      selectedOption: value
    }));
  };

  answerSubmitionHandler = () => {
    const { dispatch, authed, match } = this.props;
    dispatch(
      saveQuestionAnswer({
        authedUser: authed,
        qid: match.params.id,
        answer: this.state.selectedOption
      })
    );
  };

  render() {
    const { questions, users, authed, match } = this.props;
    if (!authed) {
      return (
        <Redirect
          to={{
            pathname: "/",
            state: { target: this.props.location.pathname }
          }}
        />
      );
    }
    if (
      Object.keys(questions).length === 0 ||
      Object.keys(users).length === 0
    ) {
      return <h1 style={{color: 'black'}}>Loading...</h1>;
    }
    const question = questions[match.params.id];
    if (!question) {
      return (
        <Route
          render={() => <h1 style={{ color: "black" }}>Page Not Found</h1>}
        />
      );
    }
    if (users[authed].answers[match.params.id]) {
      return <QuestionPoll question={question} user={users[authed]} />;
    }
    return (
      <QuestionAnswer
        question={question}
        option={this.state.selectedOption}
        optionChnageHandler={this.changeOptionHandler}
        answerSubmitionHandler={this.answerSubmitionHandler}
      />
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  users: state.users,
  authed: state.authed
});

export default connect(mapStateToProps)(QuestionInfo);
