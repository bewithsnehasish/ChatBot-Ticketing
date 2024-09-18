import React, { useState, useRef } from "react";

const Ticket3D = ({ imageSrc }) => {
  const containerRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const { left, top, width, height } =
      containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left - width / 2) / 25;
    const y = (e.clientY - top - height / 2) / 25;
    containerRef.current.style.transform = `perspective(1000px) rotateY(${x}deg) rotateX(${y}deg)`;
  };

  const handleMouseLeave = () => {
    if (containerRef.current) {
      containerRef.current.style.transform =
        "perspective(1000px) rotateY(0deg) rotateX(0deg)";
    }
  };

  return (
    <div className="flex items-center rounded-xl justify-center p-16 m-10 bg-gray-300">
      <div
        ref={containerRef}
        className="rounded-xl overflow-hidden transition-all duration-200 ease-out"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          transformStyle: "preserve-3d",
          width: "fit-content",
          height: "fit-content",
          transform: "scale(1.2)", // Increase size by 50%
        }}
      >
        <img
          src={imageSrc}
          alt="Louvre Museum Ticket"
          className="max-w-full h-auto"
        />
      </div>
    </div>
  );
};

export default Ticket3D;
