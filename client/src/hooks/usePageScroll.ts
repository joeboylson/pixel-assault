import { useState, useEffect } from "react";

const usePageScroll = () => {
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      console.log("handle scroll!");
      setScrollValue(window.scrollY || document.documentElement.scrollTop);
    };

    window.addEventListener("scroll", handleScroll);

    // Initial scroll value
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return scrollValue;
};

export default usePageScroll;
