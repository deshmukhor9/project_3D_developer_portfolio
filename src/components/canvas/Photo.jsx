import React, { useEffect, useState } from "react";

const PhotoCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)"); // Adjust breakpoint as needed
    setIsMobile(mediaQuery.matches);

    const handleMediaQueryChange = (event) => setIsMobile(event.matches);
    mediaQuery.addEventListener("change", handleMediaQueryChange);

    return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
  }, []);

  return (
    <div
      className={`absolute z-10 ${
        isMobile ? "top-28 left-1 w-14 h-14" : "top-20 right-44 w-80 h-80"
      }`}
    >
      {/* Profile Image */}
      <img
        src="./profile/Omkar Photo.jpg" // Replace with your actual image path
        alt="Omkar"
        className="w-full h-full rounded-full border-4 border-[#915EFF] shadow-lg transition-transform duration-300 hover:scale-105"
      />
    </div>
  );
};

export default PhotoCanvas;
