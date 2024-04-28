import { useEffect, useState } from "react";

// AUTO TYPING 
export const AutoTypeText = ({ text, delay }) => {
    const [displayText, setDisplayText] = useState('');
    
    useEffect(() => {
      let index = 0;
      const timer = setInterval(() => {
        if (index < text.length - 1) {
          setDisplayText(prevText => prevText + text[index]);
          index++;
        } else {
          clearInterval(timer);
        }
      }, delay);
      
      return () => clearInterval(timer);
    }, [text, delay]);
  
    return <span>{displayText}</span>;
  };
  