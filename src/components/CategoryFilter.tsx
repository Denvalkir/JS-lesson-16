import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@mui/material";

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
  categories: string[];
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
  categories,
}) => {
  return (
    <FormControl fullWidth style={{ marginBottom: "20px" }}>
      <InputLabel>Категории</InputLabel>
      <Select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value as string)}
      >
        {categories.map((category) => (
          <MenuItem key={category} value={category}>
            {category}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default CategoryFilter;
