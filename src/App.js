// @flow

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';

class App extends Component<any, any> {
  render() {
    return (
      <Router>
        <div>
          <img src={logo} className="App-logo" alt="logo" />
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>

          <hr />

          {/* <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/topics" component={Topics} /> */}
        </div>
      </Router>
    );
  }
}

export default App;
