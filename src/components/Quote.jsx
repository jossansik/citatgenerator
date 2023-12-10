import React from "react";
import "./Quote.css";

const Quote = ({ randomQuote }) => {
  return (
    <div className="quote">
      <div>{randomQuote?.quote}</div>
      <div>{randomQuote?.author}</div>
    </div>
  );
};

export default Quote;
