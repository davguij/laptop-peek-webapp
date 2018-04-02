import React, { Component } from 'react';
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
    return <div>{profile.name}</div>;
  }
}

export default New;
