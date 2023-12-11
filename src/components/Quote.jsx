import React from "react";
import "./Quote.css";

const Quote = ({ randomQuote }) => {
  return (
    <div className="quote-wrapper">
      <div className="random-quote">
        <div className="quote">{randomQuote?.quote}</div>
        <div className="author"> {randomQuote?.author}</div>
      </div>
    </div>
  );
};

export default Quote;
