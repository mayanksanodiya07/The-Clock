"use client";

import { useState, useEffect } from "react";
import bg from "@/public/bg.png";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    const formattedHours = hours % 12 || 12;

    return `${formattedHours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')} ${ampm}`;
  };

  return (
    <main className=" h-full">
      <Image
        src={bg}
        fill
        className="object-cover"
        quality={80}
        placeholder="blur"
        alt="The clock"
      />
      <div className="relative z-10 text-center h-full flex flex-col justify-center items-center">
        <h1 className="text-7xl bg-primary-light py-5 text-primary-50 mb-8 tracking-tight text-[#F8F6E0] font-normal">
        Ready to See Time in Style?
        </h1>
        <div className="text-5xl bg-primary-light py-5 px-8 text-[#F8F6E0] mb-8 font-mono">
          {formatTime(currentTime)}
        </div>
        <div className="flex gap-4">
          <Link
            href="/clock"
            className="bg-primary-light px-8 py-6 text-secondary-dark text-lg font-semibold hover:bg-primary-dark transition-all"
          >
            View the Time on Clock
          </Link>
          <Link
            href="/stopwatch"
            className="bg-primary-light px-8 py-6 text-secondary-dark text-lg font-semibold hover:bg-primary-dark transition-all"
          >
            Stopwatch
          </Link>
          <Link
            href="/timer"
            className="bg-primary-light px-8 py-6 text-secondary-dark text-lg font-semibold hover:bg-primary-dark transition-all"
          >
            Timer
          </Link>
          <Link
            href="/age-calculator"
            className="bg-primary-light px-8 py-6 text-secondary-dark text-lg font-semibold hover:bg-primary-dark transition-all"
          >
            Age Calculator
          </Link>
        </div>
       
      </div>
    </main>
  );
}

