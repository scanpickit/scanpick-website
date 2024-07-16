import React, { useState, useEffect } from 'react';

const TypingAnimation = ({ phrases, speed = 1500 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const handleTyping = () => {
      const currentPhrase = phrases[currentPhraseIndex];

      if (!isDeleting && charIndex < currentPhrase.length) {
        setDisplayedText(currentPhrase.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
      } else if (isDeleting && charIndex > 0) {
        setDisplayedText(currentPhrase.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
      } else if (!isDeleting && charIndex === currentPhrase.length) {
        setTimeout(() => setIsDeleting(true), speed);
      } else if (isDeleting && charIndex === 0) {
        setIsDeleting(false);
        setCurrentPhraseIndex(prev => (prev + 1) % phrases.length);
      }
    };

    const typingTimeout = setTimeout(handleTyping, isDeleting ? 50 : 100);
    return () => clearTimeout(typingTimeout);
  }, [charIndex, isDeleting, currentPhraseIndex, phrases, speed]);

  return (
    <span className="text-[#05d79f]">
      {displayedText}
      <span className="blinking-cursor">|</span>
    </span>
  );
};

export default TypingAnimation;
