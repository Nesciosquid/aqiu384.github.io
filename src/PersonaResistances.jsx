import React from 'react';
import { Table } from 'reactstrap';
import TypeIcon from './icons/TypeIcon.jsx';

const PersonaResistances = ({ resistances }) => (
  <Table size="sm" responsive>
    <thead>
      <tr>
        <th>
          <TypeIcon type='phys' />
        </th>
        <th>
          <TypeIcon type='gun' />
        </th>
        <th>
          <TypeIcon type='fire' />
        </th>
        <th>
          <TypeIcon type='ice' />
        </th>
        <th>
          <TypeIcon type='elec' />
        </th>
        <th>
          <TypeIcon type='wind' />
        </th>
        <th>
          <TypeIcon type='psy' />
        </th>
        <th>
          <TypeIcon type='nuke' />
        </th>
        <th>
          <TypeIcon type='bless' />
        </th>
        <th>
          <TypeIcon type='curse' />
        </th>
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
