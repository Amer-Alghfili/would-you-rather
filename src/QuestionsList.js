import React, { Component } from "react";
import { connect } from "react-redux";
import { Link, Redirect } from "react-router-dom";
import "./styles/style.css";
import Question from "./Question";

class QuestionList extends Component {
  state = {
    selectedOption: ""
  };

  optionChangeHandler = event => {
    const { value } = event.target;
    this.setState(() => ({
      selectedOption: value
    }));
  };

  sortAnsweredQuestions = () => {
    const { users, user, questions } = this.props;
    const answers = Object.keys(user.answers);
    return answers
      .sort((a, b) => {
        if (questions[a].timestamp > questions[b].timestamp) {
          return -1;
        } else if (questions[a].timestamp < questions[b].timestamp) {
          return 1;
        } else {
          return 0;
        }
      })
      .map(id => (
        <Link className="question-list__link" key={id} to={`/questions/${id}`}>
          <Question
            id={id}
            name={users[questions[id].author].name}
            optionOne={questions[id].optionOne.text}
            optionTwo={questions[id].optionTwo.text}
          />
        </Link>
      ));
  };

  sortUnAnsweredQuestions = () => {
    const { users, user, questions } = this.props;
    const listedQuestions = [];
    for (const questionId in questions) {
      listedQuestions.push(questionId);
      for (const answeredQuestion in user.answers) {
        if (questionId === answeredQuestion) {
          listedQuestions.pop();
          break;
        }
      }
    }
    return listedQuestions
      .sort((a, b) => {
        if (questions[a].timestamp > questions[b].timestamp) {
          return -1;
        } else if (questions[a].timestamp < questions[b].timestamp) {
          return 1;
        } else {
          return 0;
        }
      })
      .map(id => (
        <Link className="question-list__link" key={id} to={`/questions/${id}`}>
          <Question
            id={id}
            name={users[questions[id].author].name}
            optionOne={questions[id].optionOne.text}
            optionTwo={questions[id].optionTwo.text}
          />
        </Link>
      ));
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
    const { questions, user } = this.props;
    if (!questions || !user) {
      return <h1 style={{color: 'black'}}>Loading...</h1>;
    }
    const renderedQuestions =
      !this.state.selectedOption || this.state.selectedOption === "unAnswered"
        ? this.sortUnAnsweredQuestions()
        : this.sortAnsweredQuestions();
    return (
      <section className="question-list">
        <div className="container">
          <select
            className="question-list__options"
            value={this.state.selectedOption}
            onChange={this.optionChangeHandler}
          >
            <option value="unAnswered">Unanswered Questions</option>
            <option value="answered">Answered Questions</option>
          </select>
          <ul className="question-list__questions">{renderedQuestions}</ul>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  questions: state.questions,
  users: state.users,
  user: state.users[state.authed],
  authed: state.authed
});

export default connect(mapStateToProps)(QuestionList);
