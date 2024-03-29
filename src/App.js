import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch } from "react-router-dom";
import CreateQuestion from "./CreateQuestion";
import Header from "./Header";
import Leaderboard from "./Leaderboard";
import QuestionInfo from "./QuestionInfo";
import QuestionList from "./QuestionsList";
import SignIn from "./SignIn";
import { removeAuthedUser } from "./actions/authed";
import getInitialData from "./actions/shared";
import protect from "./hoc/protect";
class App extends Component {
  componentDidMount() {
    this.props.dispatch(getInitialData());
  }

  componentDidNotMount() {}

  removeAuthedUser = () => {
    this.props.dispatch(removeAuthedUser());
  };
  render() {
    const { authed, user } = this.props;
    return (
      <div>
        <Header user={user} logOut={this.removeAuthedUser} />
        <Switch>
          <Route path="/" exact component={SignIn} />
          <Route
            path="/add"
            exact
            component={protect(CreateQuestion, authed)}
          />
          <Route
            path="/leaderboard"
            exact
            component={protect(Leaderboard, authed)}
          />
          <Route path="/home" exact component={protect(QuestionList, authed)} />
          <Route
            path="/questions/:id"
            exact
            component={protect(QuestionInfo, authed)}
          />
          <Route
            render={() => <h1 style={{ color: "black" }}>Page not found</h1>}
          />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.users[state.authed],
  authed: state.authed,
});
export default connect(mapStateToProps)(App);
