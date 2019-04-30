import React, { Component } from 'react';
import Countries from '../RestAPI/Countries';

class Home extends Component {
  login() {
    this.props.auth.login();
  }
  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="App-header">
        <div className="container">
        {
          isAuthenticated() && (
            <div>
              <h3>
                You are logged in!
              </h3>
              <Countries />
            </div>
          )
        }
        {
          !isAuthenticated() && (
            <h3>
              You are not logged in! Please{' '}
              <a onClick={this.login.bind(this)}>
                Log In
              </a>
              {' '}to continue.
            </h3>
          )  
        }
        </div>
      </div>
    );
  }
}

export default Home;
