import React from 'react';
import { Table } from 'reactstrap';

const PersonaSkills = ({ skills }) => (
  <Table size='sm' responsive>
    <thead>
      <tr>
        <th>Skill</th>
        <th>Level Learned</th>
      </tr>
    </thead>
    <tbody>
      {Object.keys(skills).map(skill => (
        <tr key={skill}>
          <td>{skill}</td>
          <td>{skills[skill]}</td>
        </tr>
      ))}
    </tbody>
  </Table>
)

export default PersonaSkills;
