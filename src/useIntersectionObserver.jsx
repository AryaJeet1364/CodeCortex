// src/useIntersectionObserver.js
import { useEffect, useState } from "react";

const useIntersectionObserver = (options) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }, options);

    const element = document.querySelector("#observer-target");
    if (element) observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options]);

  return isVisible;
};

export default useIntersectionObserver;
