import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  goTo(route) {
    this.props.history.replace(`/${route}`)
  }

  login() {
    this.props.auth.login();
  }

  logout() {
    this.props.auth.logout();
  }

  componentDidMount() {
    const { renewSession } = this.props.auth;

    if (localStorage.getItem('isLoggedIn') === 'true') {
      renewSession();
    }
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    return (
      <div className="App-header">
        <h1>PETTERSONAPPS TEST TASK</h1>
        <div className="btn-margin">
        <Button variant="outlined" 
                onClick={this.goTo.bind(this, 'home')}>
          Home
        </Button>
        {
          !isAuthenticated() && (
            <Button variant="outlined" 
                    color="primary"
                    onClick={this.login.bind(this)}>
              Log In
            </Button>
          )
        }
        {
          isAuthenticated() && (
            <Button variant="outlined" 
                    color="primary"
                    onClick={this.logout.bind(this)}>
              Log Out
            </Button>
          )
        }
        </div>
      </div>
    );
  }
}

export default App;
