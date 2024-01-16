import React, { Component } from "react";
import { connect } from "react-redux";
import { saveQuestion } from "./actions/questions";
// import actions to submit the new question
import "./styles/style.css";
import asking from "./img/asking.svg";

class CreateQuestion extends Component {
  state = {
    optionOneText: "",
    optionTwoText: "",
    optionThree: ""
  };
  questionSubmittionHandler = () => {
    const { authed } = this.props;
    const { optionOneText, optionTwoText } = this.state;
    this.props.saveQuestion(
      {
        author: authed,
        optionOneText,
        optionTwoText
      },
      this.props.history.push
    );
  };

  formChangeHandler = event => {
    const { value, name } = event.target;
    this.setState(() => ({
      [name]: value
    }));
  };
  render() {
    return (
      <section className="new-question">
        <div className="container">
          <div className="box">
            <h1 className="new-question__title">Ask New Question</h1>
            <div className="new-question__img">
              <img src={asking} alt="asking" width="360px"></img>
            </div>
            <h2>Would You Rather...</h2>
            <form
              className="new-question__form"
              onSubmit={event => event.preventDefault()}
            >
              <input
                className="new-question__field"
                type="text"
                placeholder="Enter Your First Option Here"
                value={this.state.optionOneText}
                onChange={this.formChangeHandler}
                name="optionOneText"
              />
              <div className="new-question__divider">OR</div>
              <input
                className="new-question__field"
                type="text"
                placeholder="Enter Your Second Option Here"
                value={this.state.optionTwoText}
                onChange={this.formChangeHandler}
                name="optionTwoText"
              />
              <button
                className="button"
                onClick={this.questionSubmittionHandler}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}
const mapStateToProps = state => ({
  authed: state.authed
});

const mapDispatchToProps = dispatch => ({
  saveQuestion: (questionInfo, history) =>
    dispatch(saveQuestion(questionInfo, history))
});
export default connect(mapStateToProps, mapDispatchToProps)(CreateQuestion);
