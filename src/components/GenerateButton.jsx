import React from "react";
import "./GenerateButton.css";

const GenerateButton = ({
  type,
  handleGenerateRandomQuote,
  selectedCategory,
}) => {
  return (
    <button
      type={type}
      className="quote-display__button"
      onClick={handleGenerateRandomQuote}
      disabled={!selectedCategory}
    >
      Generera citat
    </button>
  );
};

export default GenerateButton;
