import React from "react";
import { TextField } from "@mui/material";

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({
  searchQuery,
  setSearchQuery,
}) => {
  return (
    <TextField
      variant="outlined"
      label="Поиск"
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      fullWidth
      style={{ marginBottom: "20px" }}
    />
  );
};

export default SearchBar;
