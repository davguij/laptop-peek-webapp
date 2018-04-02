import React from 'react';
import { Card, CardImg, CardBody, CardText, Media } from 'reactstrap';

const FeedItem = props => {
  return (
    <Card>
      <CardImg top width="100%" src={props.item.filename} />
      <CardBody>
        <CardText>{props.item.description}</CardText>
        <Media>
          <Media left href="#">
            <Media object src={props.item.user.picture} />
          </Media>
          <Media body>
            <CardText>
              {props.item.user.name} <br />
              <small className="text-muted">{props.item.updatedAt}</small>
            </CardText>
          </Media>
        </Media>
      </CardBody>
    </Card>
  );
};

export default FeedItem;
