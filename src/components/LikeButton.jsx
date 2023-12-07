import React, { useState } from 'react';

const LikeButton = () => {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked((prevIsLiked) => !prevIsLiked);
  };

  return (
    <button onClick={handleLikeClick}>{isLiked ? 'Unlike' : 'Like'}</button>
  );
};

export default LikeButton;