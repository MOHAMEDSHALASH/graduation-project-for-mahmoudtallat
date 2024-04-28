import  { useState, useEffect } from 'react';
import './scrollTop.css'
import {  FaArrowUp } from 'react-icons/fa';
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down 100px
  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the scroll event listener
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);

    // Clean up the listener
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top on click
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll-to-top">
      {isVisible && (
        <div onClick={scrollToTop} className="scroll-to-top-button">
         <FaArrowUp  size={20} />
        </div>
      )}
    </div>
  );
};

export default ScrollToTop;
