import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import { useState } from "react";

const Filter = ({ documents, setFilteredDocuments }) => {
  const [filter, setFilter] = useState("");
  const [search, setSearch] = useState("");
  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  const handleButtonClick = () => {
    if (filter !== "") {
      const filteredData = documents.filter((data) => {
        if (data[filter] == search) {
          return data;
        }
      });
      setFilteredDocuments(filteredData);
    } else {
      setFilteredDocuments(documents);
    }
  };
  return (
    <>
      <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
        <InputLabel id="demo-select-small-label">Filter</InputLabel>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={filter}
          label="Filter"
          onChange={handleFilterChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value="end_year">End_Year</MenuItem>
          <MenuItem value="intensity">Intensity</MenuItem>
          <MenuItem value="topic">Topics</MenuItem>
          <MenuItem value="sector">Sector</MenuItem>
          <MenuItem value="region">Region</MenuItem>
          <MenuItem value="pestle">Pestle</MenuItem>
          <MenuItem value="source">Source</MenuItem>
          <MenuItem value="country">Country</MenuItem>
          <MenuItem value="city">City</MenuItem>
        </Select>
      </FormControl>
      <TextField
        sx={{ minWidth: 120 }}
        id="outlined-search"
        label="Search field"
        type="search"
        size="small"
        value={search}
        onChange={handleSearchChange}
      />
      <Button
        sx={{ marginLeft: 2, boxShadow: "none" }}
        variant="contained"
        size="medium"
        onClick={handleButtonClick}
      >
        Search
      </Button>
    </>
  );
};

Filter.propTypes = {
  documents: PropTypes.array,
  setFilteredDocuments: PropTypes.func,
};

export default Filter;
