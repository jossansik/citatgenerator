import React, { useRef } from 'react';

const CategorySelector = ({ categories, onSelectCategory }) => {
  const inputRef = useRef();

  const handleCategoryChange = () => {
    // Använd useRef för att hämta värdet från input-fältet
    const selectedCategory = inputRef.current.value;
    onSelectCategory(selectedCategory);
  };

  return (
    <div>
      <h2>Kategori</h2>
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