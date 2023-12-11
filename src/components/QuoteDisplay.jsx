import React, { useState, useEffect } from "react";
import quoteData from "./quotes";
import CategorySelector from "./CategorySelector";
import "./QuoteDisplay.css";
import GenerateButton from "./GenerateButton";
import Quote from "./Quote";

const QuoteDisplay = () => {
  const [randomQuote, setRandomQuote] = useState({});
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
      const quote = filteredQuotes[randomIndex];
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
    getRandomQuote(); // Set a random quote as default
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
      <div>
        <Quote randomQuote={randomQuote} />
      </div>
      <div className="quote-display__container">
        <form action="#" onSubmit={handleGenerateRandomQuote}>
          <CategorySelector
            categories={categories}
            handleCategoryChange={handleCategoryChange}
          />
          <div className="button-container">
            <GenerateButton
              type="submit"
              selectedCategory={selectedCategory}
              handleGenerateRandomQuote={handleGenerateRandomQuote}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default QuoteDisplay;
