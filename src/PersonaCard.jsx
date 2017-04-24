import React from 'react';
import { Card, CardText, CardImg, CardBlock, CardTitle, CardSubtitle, Container, Row, Col } from 'reactstrap';
import PersonaStats from './PersonaStats.jsx';
import PersonaNegotiations from './PersonaNegotiations.jsx';
import PersonaSkills from './PersonaSkills.jsx';
import PersonaItems from './PersonaItems.jsx';
import PersonaResistances from './PersonaResistances.jsx';

const PersonaCard = ({ persona }) => {
  return (
    <Card>
      <CardBlock>
        <CardTitle>{`${persona.name} (${persona.level})`}</CardTitle>
        <CardSubtitle>{persona.arcana}</CardSubtitle>
        <PersonaResistances resistances={persona.resistances} />
        <Row>
          <Col xs={4}>
            <PersonaStats stats={persona.stats} />
          </Col>
          <Col xs={8}>
            <PersonaSkills skills={persona.skills} />
          </Col>
        </Row>
        <PersonaNegotiations negotiations={[]} />
        <PersonaItems drop={persona.drop} item={persona.item} />
      </CardBlock>
    </Card>
  );
};

export default PersonaCard;
