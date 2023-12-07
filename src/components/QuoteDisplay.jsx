import React, { useState, useEffect } from 'react';
import quoteData from './quotes';

const QuoteDisplay = () => {
  const [randomQuote, setRandomQuote] = useState('');

  const getRandomQuote = () => {
    const randomIndex = Math.floor(Math.random() * quoteData.length);
    const quote = quoteData[randomIndex];
    setRandomQuote(quote);
  };

  useEffect(() => {
    getRandomQuote();
  }, []);

  return (
    <div>
      <h1>Random Quote:</h1>
      <p>{randomQuote}</p>
      <button onClick={getRandomQuote}>Get Random Quote</button>
    </div>
  );
};

export default QuoteDisplay;