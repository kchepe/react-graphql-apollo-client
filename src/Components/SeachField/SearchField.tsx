import TextField from "@mui/material/TextField";
import React from "react";

interface SearchFieldProps {
  handleOnChange: (e: any) => void;
  value: string;
}

const SearchField = ({ handleOnChange, value }: SearchFieldProps) => {
  return (
    <>
      <TextField
        value={value}
        label="Search character name or species."
        variant="outlined"
        fullWidth
        onChange={handleOnChange}
      />
    </>
  );
};

export default SearchField;
