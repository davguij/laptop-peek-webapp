import React, { Component } from 'react';
import { Container, Button } from 'reactstrap';
import auth from '../global/Auth/Auth';

class New extends Component<any, any> {
  state = {
    profile: {},
  };

  componentDidMount() {
    auth.getProfile((err, profile) => {
      this.setState({ profile });
    });
  }
  render() {
    const { profile } = this.state;
    console.log(profile);
    return (
      <Container>
        <div>{profile.name}</div>
        <Button>Login</Button>
      </Container>
    );
  }
}

export default New;
