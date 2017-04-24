import React from 'react';
import PersonaCard from './PersonaCard.jsx';
import Persona from './util/persona.js';
import { Container, Row, Col } from 'reactstrap';

const PersonaPage = ({ match }) => {
  return (
    <Container>
      <Row>
        <Col>
          <PersonaCard persona={Persona.fromName(match.params.personaName)} />
        </Col>
      </Row>
    </Container>
  )
};

export default PersonaPage;
