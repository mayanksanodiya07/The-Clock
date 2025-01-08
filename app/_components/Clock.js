"use client";

import React, { useState, useEffect } from "react";

const RoundClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);
  const fiveMinuteMarkers = Array.from({ length: 60 }, (_, i) => i);

  const secondsAngle = (time.getSeconds() / 60) * 360;
  const minutesAngle =
    ((time.getMinutes() + time.getSeconds() / 60) / 60) * 360;
  const hoursAngle =
    (((time.getHours() % 12) + time.getMinutes() / 60) / 12) * 360;

  return (
    <div className="relative bg-primary-dark h-96 w-96 border-8 border-secondary-dark rounded-full flex items-center justify-center">
      <div className="relative">
        {numbers.map((num) => {
          const angle = ((num - 3) / 12) * 2 * Math.PI; // Start at 12 o'clock
          const x = Math.cos(angle) * 152; // 100 is the radius
          const y = Math.sin(angle) * 152;
          return (
            <div
              key={num}
              className="absolute w-8 h-8 flex items-center justify-center text-xl font-bold"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: "translate(-50%, -50%)",
              }}
            >
              {num}
            </div>
          );
        })}
      </div>

      <div className="relative">
        {fiveMinuteMarkers.map((marker) => {
          const angle = ((marker - 15) / 30) * Math.PI; // Start at 12 o'clock
          const x = Math.cos(angle) * 178; // 170 is the radius for markers
          const y = Math.sin(angle) * 178;
          return (
            <div
              key={marker}
              className={`absolute h-0.5 ${marker % 5 === 0 ? 'bg-black w-3' : 'bg-gray-500 w-2'}`}
              style={{
                left: `${x}px`,
                top: `${y}px`,
                transform: `translate(-50%, -50%) rotate(${angle}rad)`,
              }}
            />
          );
        })}
      </div>

      {/* Hour hand */}
      <div
        className="absolute w-1 h-[6.5rem] bg-black rounded-full origin-bottom"
        style={{
          left: "50%",
          bottom: "50%",
          transform: `translateX(-50%) rotate(${hoursAngle}deg)`,
        }}
      />
      {/* Minute hand */}
      <div
        className="absolute w-1 h-36 bg-black rounded-full origin-bottom"
        style={{
          left: "50%",
          bottom: "50%",
          transform: `translateX(-50%) rotate(${minutesAngle}deg)`,
        }}
      />
      {/* Second hand */}
      <div
        className="absolute w-0.5 h-40 bg-red-500 rounded-full origin-bottom"
        style={{
          left: "50%",
          bottom: "50%",
          transform: `translateX(-50%) rotate(${secondsAngle}deg)`,
        }}
      />
      <div
        className="absolute w-1 h-8 bg-red-500 rounded-full origin-top"
        style={{
          left: "50%",
          bottom: "50%",
          transform: `translateX(-50%) translateY(100%) rotate(${secondsAngle}deg)`,
        }}
      />
      <div
        className="absolute w-3 h-3 bg-black rounded-full"
        style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)" }}
      />
    </div>
  );
};

export default RoundClock;
