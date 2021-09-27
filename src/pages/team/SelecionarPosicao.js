import * as React from 'react';
import { InputLabel, MenuItem, FormControl, Select } from '@material-ui/core';

export default function SelectLabels() {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <div>
      <FormControl style={{ width: '100%' }}>
        <InputLabel id="demo-simple-select-helper-label">Posição</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value="">
          </MenuItem>
          <MenuItem value={10}>Goleiro</MenuItem>
          <MenuItem value={20}>Defesa</MenuItem>
          <MenuItem value={30}>Meio-Campo</MenuItem>
          <MenuItem value={40}>Ataque</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
}