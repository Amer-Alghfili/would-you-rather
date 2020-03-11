import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { setAuthedUser } from "./actions/authed";
import wondering from "./img/wondering.svg";
import "./styles/style.css";

class SignIn extends Component {
  state = {
    selectedUser: ""
  };

  optionChangeHandler = event => {
    const { value } = event.target;
    this.setState(() => ({
      selectedUser: value
    }));
  };

  signInHandler = event => {
    event.preventDefault();
    let user;
    if (!this.state.selectedUser) {
      user = Object.keys(this.props.users)[0];
    } else {
      user = this.state.selectedUser;
    }
    this.props.setAuthedUser(user);
  };
  render() {
    if (this.props.authedUser) {
      let targetedUrl = "/home";

      if (this.props.location.state) {
        targetedUrl = this.props.location.state.target;
      }
      return <Redirect to={targetedUrl} />;
    }
    const { users } = this.props;
    if (Object.keys(users).length === 0) {
      return <h1 style={{ color: "black" }}>Loading...</h1>;
    }
    const renderedOprions = Object.keys(users).map(id => (
      <option key={id} className="sign-in__user" value={id}>
        {users[id].name}
      </option>
    ));
    return (
      <section className="sign-in">
        <div className="container">
          <div className="box">
            <h1 className="sign-in__title">Welcome to Would You Rather app</h1>
            <div className="sign-in__img">
              <img src={wondering} alt="Wondering" width="360px"></img>
            </div>
            <h2>Sign in</h2>
            <form onSubmit={this.signInHandler}>
              <select
                className="sign-in__users"
                value={this.state.selectedUser}
                onChange={this.optionChangeHandler}
              >
                {renderedOprions}
              </select>
              <button className="button">Sign In</button>
            </form>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
  authedUser: state.authed
});

const mapDispatchToProps = dispatch => ({
  setAuthedUser: user => dispatch(setAuthedUser(user))
});
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
