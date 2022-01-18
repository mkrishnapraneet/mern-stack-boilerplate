import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useNavigate } from "react-router-dom";
// import {
//   BrowserRouter,
//   Routes,
//   Route,
//   Navigate,
//   useNavigate,
//   useNavigationType
// } from "react-router-dom";

export default function BasicMenu() {
  const [user_type, setUser] = React.useState('');
  const navigate = useNavigate();

  const handleChange = (event) => {
    setUser(event.target.value);
    if (event.target.value === "Buyer") {
      navigate("/signup/user");
    }
    else if (event.target.value === "Vendor") {
      navigate("/signup/vendor");
    }
    // this.props.history.push('/signup')


  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl sx={{ minWidth: 120 }}>
        <InputLabel id="demo-simple-select-label">User Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={user_type}
          label="User Type"
          onChange={handleChange}
        >
          <MenuItem value="Vendor">Vendor</MenuItem>
          <MenuItem value="Buyer">Buyer</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
