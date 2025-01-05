"use client";

import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import Spinner from './Spinner';
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime(time => time + 10), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
  };

  const formatTime = () => {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    const milliseconds = time % 1000;

    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}.${milliseconds.toString().padStart(3, '0')}`;
  };

  return (
    <div className="w-full max-w-md mx-auto ">
      <div className="flex flex-col items-center justify-center gap-4 p-6">
        <div className="text-6xl font-mono font-bold tabular-nums">
          {formatTime()}
        </div>
        <div className="flex gap-4">
          <Button onClick={startStop} type={"startStop"} isRunning={isRunning} >
            {isRunning ? 'Stop' : 'Start'}
          </Button>
          <Button onClick={reset} type={"reset"} >Reset</Button>
        </div>
      </div>
    </div>
  );
};

export default Stopwatch;

