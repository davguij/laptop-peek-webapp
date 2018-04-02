// @flow

import React, { Component } from 'react';
import { Button } from 'reactstrap';

import auth from '../Auth/Auth';

import logo from './logo.svg';

class Navbar extends Component<any, any> {
  constructor(props: any) {
    super(props);
    (this: any).doLogin = this.doLogin.bind(this);
    (this: any).doLogout = this.doLogout.bind(this);
    (this: any).isAuth = this.isAuth.bind(this);
  }

  doLogin() {
    auth.login();
  }

  doLogout() {
    auth.logout();
  }

  isAuth() {
    return auth.isAuthenticated();
  }

  render() {
    return (
      <div>
        <img src={logo} alt="" />
        {!this.isAuth() && <Button onClick={this.doLogin}>Login</Button>}
        {this.isAuth() && <Button onClick={this.doLogout}>Logout</Button>}
      </div>
    );
  }
}
export default Navbar;
