"use client";

import { useEffect, useState } from "react";

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);

    window.addEventListener("mousemove", move);
    document.querySelectorAll("a, button").forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    return () => {
      window.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <>
      {/* Center dot */}
      <div
        className="pointer-events-none fixed z-[9999] rounded-full"
        style={{
          left: position.x,
          top: position.y,
          width: 6,
          height: 6,
          background: "#cfae70",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Outer ring */}
      <div
        className="pointer-events-none fixed z-[9998] rounded-full border"
        style={{
          left: position.x,
          top: position.y,
          width: hovering ? 46 : 34,
          height: hovering ? 46 : 34,
          borderColor: "rgba(207,174,112,0.6)",
          transform: "translate(-50%, -50%)",
          transition: "width 0.2s ease, height 0.2s ease",
        }}
      />
    </>
  );
}
