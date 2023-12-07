import React, { useRef } from 'react';

const CategorySelector = ({ categories, handleCategoryChange }) => {
  const inputRef = useRef(null);

  return (
    <div>
      <label>
        Välj kategori:
        <select ref={inputRef} onChange={handleCategoryChange}>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
};

export default CategorySelector;