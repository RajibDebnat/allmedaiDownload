import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select  from '@mui/material/Select';

export default function SelectSmall({setCategory,category}) {

  const handleChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
      <InputLabel id="demo-select-small-label">Category</InputLabel>
      <Select
        labelId="demo-select-small-label"
        id="demo-select-small"
        value={category}
        label="Category"
        onChange={handleChange}
      >
       
        <MenuItem value={"video"}>Video</MenuItem>
        <MenuItem value={"audio"}>Audio</MenuItem>
     
      </Select>
    </FormControl>
  );
}