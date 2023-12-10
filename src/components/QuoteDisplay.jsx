import React, { useState, useEffect } from "react";
import quoteData from "./quotes";
import CategorySelector from "./CategorySelector";
import "./QuoteDisplay.css";
import GenerateButton from "./GenerateButton";
import Quote from "./Quote";

const QuoteDisplay = () => {
  const [randomQuote, setRandomQuote] = useState("");
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");

  const getRandomQuote = () => {
    let filteredQuotes = quoteData;
    if (selectedCategory) {
      filteredQuotes = quoteData.filter(
        (quote) => quote.category === selectedCategory
      );
    }

    if (filteredQuotes.length > 0) {
      const randomIndex = Math.floor(Math.random() * filteredQuotes.length);
      const quote = filteredQuotes[randomIndex].quote;
      setRandomQuote(quote);
    } else {
      setRandomQuote("Det finns inga citat i den valda kategorin");
    }
  };

  useEffect(() => {
    // Split quotes into categories
    const uniqueCategories = [
      ...new Set(quoteData.map((quote) => quote.category)),
    ];
    setCategories(uniqueCategories);
  }, []);

  const handleCategoryChange = (event) => {
    const category = event.target.value;
    setSelectedCategory(category);
  };

  const handleGenerateRandomQuote = () => {
    getRandomQuote();
  };

  return (
    <div className="quote-display">
      <div className="quote-display__container">
        <CategorySelector
          categories={categories}
          handleCategoryChange={handleCategoryChange}
        />

        <GenerateButton
          handleGenerateRandomQuote={handleGenerateRandomQuote}
          selectedCategory={selectedCategory}
        />
      </div>
      <div className="quote-display__quote">
        <Quote randomQuote={randomQuote} />
      </div>
    </div>
  );
};

export default QuoteDisplay;
