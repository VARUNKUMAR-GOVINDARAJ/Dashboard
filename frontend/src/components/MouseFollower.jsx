import React, { useEffect, useState } from "react";

const MouseFollower = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div
      className="pointer-events-none fixed w-2.5 h-2.5 bg-[#653F00] rounded-full z-50 transition-transform duration-75 ease-out"
      style={{
        transform: `translate3d(${position.x - 30}px, ${position.y - 30}px, 0)`,
      }}
    ></div>
  );
};

export default MouseFollower;
