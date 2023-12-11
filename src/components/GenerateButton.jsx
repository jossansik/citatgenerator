import React from "react";
import "./GenerateButton.css";

const GenerateButton = ({
  type,
  handleGenerateRandomQuote,
  selectedCategory,
}) => {
  return (
    <div className="button-wrapper">
      <button
        type={type}
        className="button"
        onClick={handleGenerateRandomQuote}
        disabled={!selectedCategory}
      >
        Generera citat
      </button>
    </div>
  );
};

export default GenerateButton;
