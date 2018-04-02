// @flow

import React, { Component } from 'react';
import {
  Container,
  CardColumns,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
} from 'reactstrap';

class Feed extends Component<any, any> {
  render() {
    return (
      <Container>
        <CardColumns>
          <Card>
            <CardImg
              top
              width="100%"
              src="https://placeholdit.imgix.net/~text?txtsize=33&txt=320%C3%97240&w=320&h=240"
              alt="Card image cap"
            />
            <CardBody>
              <CardTitle>Card Title</CardTitle>
              <CardText>
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </CardText>
              <CardText>
                <small className="text-muted">Last updated 3 mins ago</small>
              </CardText>
            </CardBody>
          </Card>
        </CardColumns>
      </Container>
    );
  }
}

export default Feed;
