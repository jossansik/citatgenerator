import React from "react";

const GenerateButton = ({ handleGenerateRandomQuote, selectedCategory }) => {
  return (
    <button
      className="quote-display__button"
      onClick={handleGenerateRandomQuote}
      disabled={!selectedCategory}
    >
      Generera citat
    </button>
  );
};

export default GenerateButton;
