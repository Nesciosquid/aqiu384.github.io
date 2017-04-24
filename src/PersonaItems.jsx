import React from 'react';
import { Table } from 'reactstrap';

const PersonaItems = ({ drop, item }) => (
  <Table>
    <thead>
      <tr>
        <th>Drop</th>
        <th>Item</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{drop}</td>
        <td>{item}</td>
      </tr>
    </tbody>
  </Table>
)

export default PersonaItems;
