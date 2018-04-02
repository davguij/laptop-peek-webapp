// @flow

import React, { Component } from 'react';
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  Nav,
  NavItem,
  NavLink,
  // Button,
} from 'reactstrap';
import { BrowserRouter as Route, Link } from 'react-router-dom';

import auth from '../Auth/Auth';

class Navigationbar extends Component<any, any> {
  state = {
    isOpen: false,
  };

  constructor() {
    super();
    (this: any).doLogin = this.doLogin.bind(this);
    (this: any).doLogout = this.doLogout.bind(this);
    (this: any).isAuth = this.isAuth.bind(this);
    (this: any).toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
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
      <Container>
        <Navbar color="faded" light expand="md">
          <NavbarBrand tag={Link} to="/feed">
            Laptop Peek
          </NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink tag={Link} to="/new">
                  New
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        {/* {!this.isAuth() && <Button onClick={this.doLogin}>Login</Button>}
        {this.isAuth() && <Button onClick={this.doLogout}>Logout</Button>} */}
      </Container>
    );
  }
}

export default Navigationbar;
