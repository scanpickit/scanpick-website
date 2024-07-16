import React, { useState, useEffect } from 'react';

const AnimatedText = ({ text }) => {
  const [displayedText, setDisplayedText] = useState('');

  useEffect(() => {
    let index = 0;
    const intervalId = setInterval(() => {
      if (index <= text.length) {
        setDisplayedText(text.substring(0, index)); 
        index++;
      } else {
        clearInterval(intervalId); 
      }
    }, 500);

    return () => clearInterval(intervalId); 
  }, [text]);

  return <span className='text-[#05d79f]'>{displayedText}</span>;
};

export default AnimatedText;
