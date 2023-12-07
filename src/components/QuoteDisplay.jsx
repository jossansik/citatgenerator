import React, { useState} from 'react';

const QuoteDisplay = ({ quote }) => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    // Använd useState för att uppdatera och hantera komponentens interna state
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  return (
    <div>
      <h2>Quote Display</h2>
      <p>{quote}</p>
      <button onClick={handleLikeClick}>{isLiked ? 'Unlike' : 'Like'}</button>
    </div>
  );
};

export default QuoteDisplay;