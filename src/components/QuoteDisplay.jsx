import React, { useState, useEffect } from "react";
import quoteData from "./quotes";
import CategorySelector from "./CategorySelector";
import "./QuoteDisplay.css";

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
      <h1 className="quote-display__title">Välkommen till Citatmaskinen</h1>
      <h2 className="quote-display__body">
        Här kan du hitta citat för alla tillfällen och sinnesstämningar. <br />
        Vänligen notera att citaten i citamaskinen är AI-genererade och hämtade
        från internet. Överväg därför att kontrollera riktigheten om det är
        viktigt att citatet du använder är korrekt.{" "}
      </h2>
      <CategorySelector
        categories={categories}
        handleCategoryChange={handleCategoryChange}
      />
      <button
        className="quote-display__button"
        onClick={handleGenerateRandomQuote}
        disabled={!selectedCategory}
      >
        Generera citat
      </button>
      <div
        className="quote-display__quote"
        dangerouslySetInnerHTML={{ __html: randomQuote }}
      ></div>
    </div>
  );
};

export default QuoteDisplay;
