/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState, useRef, MouseEvent } from "react";

interface GlowCardProps {
  children: React.ReactNode;
  className?: string;
}

export default function GlowCard({ children, className = "" }: GlowCardProps) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePosition({ x, y });
  };

  return (
    <div
      ref={cardRef}
      className={`relative h-full  ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute  inset-0 opacity-0  group-hover:opacity-100 transition-opacity duration-300" />
      {children}
    </div>
  );
}
/*
style={{
          background: isHovered
            ? `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, , transparent 50%)`
            : "none",
        }}
*/
