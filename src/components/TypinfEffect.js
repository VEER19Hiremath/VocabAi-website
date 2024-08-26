// TypingEffect.js
import React, { useState, useEffect } from 'react';

const TypingEffect = ({ text, speed = 50 }) => {
  const [displayText, setDisplayText] = useState('');
  let index = 0;

  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayText(prev => prev + text[index]);
      index += 1;
      if (index >= text.length) clearInterval(timer);
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return <span>{displayText}</span>;
};

export default TypingEffect;
