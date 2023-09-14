import React, { useState, useEffect, useRef, CSSProperties } from 'react';
import { useInView } from 'framer-motion';

interface TypewriterEffectProps {
  text: string;
  styles?: CSSProperties;
}

const TypewriterEffect: React.FC<TypewriterEffectProps> = ({ text, styles = {} }) => {
  const [typedText, setTypedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0); // Przechowuje bieżący indeks znaku
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref);

  useEffect(() => {
    let typingInterval: ReturnType<typeof setInterval> | null = null;
    
    if (isInView && currentIndex < text.length) {
      typingInterval = setInterval(() => {
        if (currentIndex < text.length) {
          setTypedText((prevText) => prevText + text[currentIndex]);
          setCurrentIndex((prevIndex) => prevIndex + 1);
        } else {
          if (typingInterval) clearInterval(typingInterval);
        }
      }, 70);
    }

    return () => {
      if (typingInterval) clearInterval(typingInterval);
    };
  }, [text, isInView, currentIndex]);

  return (
    <span ref={ref} style={styles}>
      {typedText}
    </span>
  );
};

export default TypewriterEffect;