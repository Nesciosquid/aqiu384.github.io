import React from 'react';
import { Table } from 'reactstrap';

const PersonaStats = ({ stats }) => (
  <Table size='sm' responsive>
    <thead>
      <tr>
        <th>ST</th>
        <th>MA</th>
        <th>EN</th>
        <th>AG</th>
        <th>LU</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{stats.st}</td>
        <td>{stats.ma}</td>
        <td>{stats.en}</td>
        <td>{stats.ag}</td>
        <td>{stats.lu}</td>
      </tr>
    </tbody>
  </Table>
)

export default PersonaStats;
