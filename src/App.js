import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { removeAuthedUser } from "./actions/authed";
import getInitialData from "./actions/shared";
import Header from "./Header";
import SignIn from "./SignIn";
import CreateQuestion from "./CreateQuestion";
import Leaderboard from "./Leaderboard";
import QuestionList from "./QuestionsList";
import QuestionInfo from "./QuestionInfo";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialData());
  }

  removeAuthedUser = () => {
    this.props.dispatch(removeAuthedUser());
  };
  render() {
    return (
      <div>
        <Header user={this.props.user} logOut={this.removeAuthedUser} />
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route path="/new-question" exact component={CreateQuestion} />
          <Route path="/leaderboard" exact component={Leaderboard} />
          <Route path="/home" exact component={QuestionList} />
          <Route path="/questions/:id" exact component={QuestionInfo} />
          <Route
            render={() => <h1 style={{ color: "black" }}>Page not found</h1>}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.users[state.authed]
});
export default connect(mapStateToProps)(App);
