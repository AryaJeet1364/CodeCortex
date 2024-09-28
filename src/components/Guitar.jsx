import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";

const GuitarString = () => {
  const svgRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const svg = svgRef.current;
    const path = pathRef.current;
    const finalPath = "M10,50 Q500,50 990,50";

    gsap.set(path, { attr: { d: finalPath } });

    const handleMouseMove = (event) => {
      const rect = svg.getBoundingClientRect();
      let mouseX = event.clientX - rect.left;
      let mouseY = event.clientY - rect.top;

      mouseX = Math.min(Math.max(mouseX, 10), 990);
      mouseY = Math.min(Math.max(mouseY, 0), 100);

      const newPath = `M10,50 Q${mouseX},${mouseY} 990,50`;

      gsap.to(path, {
        attr: { d: newPath },
        duration: 0.2,
        ease: "power3.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(path, {
        attr: { d: finalPath },
        duration: 1.5,
        ease: "elastic.out(1, 0.1)",
      });
    };

    svg.addEventListener("mousemove", handleMouseMove);
    svg.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      svg.removeEventListener("mousemove", handleMouseMove);
      svg.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <svg
      className="bg-gradient-to-r from-gray1 via-gray4 to-gray6"
      ref={svgRef}
      viewBox="0 0 1000 100"
    >
      <path ref={pathRef} stroke="#b7a976" strokeWidth="1" fill="none" />
    </svg>
  );
};

export default GuitarString;
