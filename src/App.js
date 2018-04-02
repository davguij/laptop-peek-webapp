// @flow

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import auth from './global/Auth/Auth';
import Callback from './global/Auth/Callback';
import Navbar from './global/Navbar/Navbar';
import Feed from './Feed/Feed';
import New from './New/New';

class App extends Component<any, any> {
  handleAuthentication = (nextState: any) => {
    if (/access_token|id_token|error/.test(nextState.location.hash)) {
      auth.handleAuthentication();
    }
  };
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/feed">Feed</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />

          {/* <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} /> */}
          <Route path="/feed" component={Feed} />
          <Route path="/new" component={New} />
          <Route
            path="/callback"
            render={nextState => {
              this.handleAuthentication(nextState);
              return <Callback />;
            }}
          />
        </div>
      </Router>
    );
  }
}

export default App;
