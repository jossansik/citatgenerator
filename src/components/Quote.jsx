import React from "react";

const Quote = ({ randomQuote }) => {
  return (
    <div
      className="quote-display__quote"
      dangerouslySetInnerHTML={{ __html: randomQuote }}
    ></div>
  );
};

export default Quote;
