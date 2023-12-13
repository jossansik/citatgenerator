import React, { useRef } from "react";
import "./CategorySelector.css";

const CategorySelector = ({ categories, handleCategoryChange }) => {
  const inputRef = useRef(null);

  return (
    <div className="category-selector">
      <select
        ref={inputRef}
        onChange={handleCategoryChange}
        className="category-selector__select"
        defaultValue={""}
      >
        <option disabled hidden value={""}>
          Välj kategori:
        </option>
        {categories.map((category) => (
          <option
            key={category}
            value={category}
            className="category-selector__option"
          >
            {category}
          </option>
        ))}
      </select>{" "}
    </div>
  );
};

export default CategorySelector;
