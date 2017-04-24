import React from 'react';
import { Table } from 'reactstrap';

const PersonaResistances = ({ resistances }) => (
  <Table size="sm" responsive bordered>
    <thead>
      <tr>
        <th>PHYS</th>
        <th>GUN</th>
        <th>FIRE</th>
        <th>ICE</th>
        <th>ELEC</th>
        <th>WIND</th>
        <th>PSY</th>
        <th>NUKE</th>
        <th>BLESS</th>
        <th>CURSE</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>{resistances.phys}</td>
        <td>{resistances.gun}</td>
        <td>{resistances.fire}</td>
        <td>{resistances.ice}</td>
        <td>{resistances.electric}</td>
        <td>{resistances.wind}</td>
        <td>{resistances.psy}</td>
        <td>{resistances.nuclear}</td>
        <td>{resistances.bless}</td>
        <td>{resistances.curse}</td>
      </tr>
    </tbody>
  </Table>
)

export default PersonaResistances;
