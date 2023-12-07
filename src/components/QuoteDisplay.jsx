import React, { useState, useEffect } from 'react';
import quoteData from './quotes';
import CategorySelector from './CategorySelector';

const QuoteDisplay = () => {
  const [randomQuote, setRandomQuote] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const getRandomQuote = () => {
    let filteredQuotes = quoteData;
    if (selectedCategory) {
      filteredQuotes = quoteData.filter((quote) => quote.category === selectedCategory);
    }

    if (filteredQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
      const quote = filteredQuotes[randomIndex].quote;
      setRandomQuote(quote);
    }
  };

  useEffect(() => {
    getRandomQuote();

    // Split quotes into categories
    const uniqueCategories = [...new Set(quoteData.map((quote) => quote.category))];
    setCategories(uniqueCategories);
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
  };

  return (
    <div>
      <h1>Random Quote:</h1>
      <p>{randomQuote}</p>
      <CategorySelector categories={categories} handleCategoryChange={handleCategoryChange} />
    </div>
  );
};

export default QuoteDisplay;