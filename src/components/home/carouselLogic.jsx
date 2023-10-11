import { useState, useEffect, useRef } from 'react';

const useCarouselLogic = (projects) => {
  const [position, setPosition] = useState(0);
  const [cardWidth, setCardWidth] = useState(500); // Define cardWidth state here
  
  let maxPosition;

  if (window.innerWidth <= 1000 && window.innerWidth > 500) {
    maxPosition = -(cardWidth * (projects.length - 2));
  } else if (window.innerWidth <= 500) {
    maxPosition = -(cardWidth * (projects.length - 1));
  } else {
    maxPosition = -(cardWidth * (projects.length - 3));
  }

  const intervalDuration = 2000;
  const intervalRef = useRef();

  const updateCardWidth = (width) => {
    setCardWidth(width);
  };

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setPosition((prevPosition) => {
        if (prevPosition === maxPosition) {
          return 0;
        } else {
          return prevPosition - cardWidth;
        }
      });
    }, intervalDuration);

    return () => clearInterval(intervalRef.current);
  }, [cardWidth, maxPosition]);

  const handleMouseEnter = () => {
    clearInterval(intervalRef.current);
  };

  const handleMouseLeave = () => {
    intervalRef.current = setInterval(() => {
      setPosition((prevPosition) => {
        if (prevPosition === maxPosition) {
          return 0;
        } else {
          return prevPosition - cardWidth;
        }
      });
    }, intervalDuration);
  };

  return {
    position,
    maxPosition,
    updateCardWidth,
    handleMouseEnter,
    handleMouseLeave,
  };
};

export default useCarouselLogic;
