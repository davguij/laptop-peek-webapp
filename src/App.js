// @flow

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

import Navbar from './global/Navbar/Navbar';
import Feed from './Feed/Feed';

class App extends Component<any, any> {
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
        </div>
      </Router>
    );
  }
}

export default App;
