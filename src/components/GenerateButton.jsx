import React from "react";
import "./GenerateButton.css";

const GenerateButton = ({
  type,
  handleGenerateRandomQuote,
  selectedCategory,
}) => {
  const handleClick = (event) => {
    event.preventDefault();
    handleGenerateRandomQuote();
  };
  return (
    <div className="button-wrapper">
      <button
        type={type}
        className="button"
        onClick={handleClick}
        disabled={!selectedCategory}
      >
        Generera citat
      </button>
    </div>
  );
};

export default GenerateButton;
