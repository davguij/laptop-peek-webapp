// @flow

import React, { Component } from 'react';
import { Container, CardColumns } from 'reactstrap';

import FeedItem from './FeedItem/FeedItem';

class Feed extends Component<any, any> {
  state = {
    entries: [],
  };

  async componentDidMount() {
    const rawEntries = await fetch('/api/entries');
    const entries = await rawEntries.json();
    console.log(entries);
    this.setState({ entries });
  }

  render() {
    console.log(this.state.entries);
    const { entries } = this.state;
    const entriesArr = entries.map(entry => (
      <FeedItem key={entry.id} item={entry} />
    ));
    return (
      <Container>
        <CardColumns>{entriesArr}</CardColumns>
      </Container>
    );
  }
}

export default Feed;
