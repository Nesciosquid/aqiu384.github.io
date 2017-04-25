import React from 'react';
import { Table } from 'reactstrap';
import TypeIcon from './icons/TypeIcon.jsx';

const resistList = [
  'phys',
  'gun',
  'fire',
  'ice',
  'electric',
  'wind',
  'psy',
  'nuclear',
  'bless',
  'curse',
]

const PersonaResistances = ({ resistances }) => {
  console.log(resistances);
  return (
    <Table size="sm" responsive>
      <thead style={{ background: '#252525' }}>
        <tr>
          {resistList.map(resist => <th><TypeIcon type={resist} /></th>)}
        </tr>
      </thead>
      <tbody>
        <tr>
          {resistList.map(resist => <td><TypeIcon type={resistances[resist]}/></td>)}
        </tr>
      </tbody>
    </Table>
  )
}

export default PersonaResistances;
