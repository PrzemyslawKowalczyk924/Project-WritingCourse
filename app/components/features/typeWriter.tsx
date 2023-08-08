import React, { useState, useEffect } from 'react';

interface TypewriterEffectProps {
  text: string;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text }) => {
  const [typedText, setTypedText] = useState('');

  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex < text.length - 1) {
        setTypedText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 70);

    return () => clearInterval(typingInterval);
  }, [text]);

  return (
    <span>
      {typedText}
    </span>
  );
};

export default TypewriterEffect;