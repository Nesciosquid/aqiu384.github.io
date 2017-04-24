import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

const PersonaNegotiations = ({ negotiations }) => (
  <ListGroup>
    {negotiations.map(neg => <ListGroupItem>{JSON.stringify(neg)}</ListGroupItem>)}
  </ListGroup>
)

export default PersonaNegotiations;
