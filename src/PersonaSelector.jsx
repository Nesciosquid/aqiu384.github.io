import React from 'react';
import Select from 'react-select';

const PersonaSelector = ({ personas, onChange, value }) => {
  const options = Object.keys(personas).map(key => ({
    value: key,
    label: key,
  }));
  return <Select options={options} onChange={(item) => onChange(item.value)} value={value} />
}

export default PersonaSelector;
