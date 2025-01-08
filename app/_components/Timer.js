"use client";

import React, { useState, useEffect } from "react";
import Button from "./ui/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPause, faPlay, faRepeat } from "@fortawesome/free-solid-svg-icons";
// import { Input } from "@/components/ui/input"

const Timer = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [inputTime, setInputTime] = useState("");

  useEffect(() => {
    let interval;
    console.log("okkoo");
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const handleStart = () => {
    if (time > 0) {
      setIsRunning(true);
    }
  };

  const handlePause = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setTime(0);
    setInputTime("");
  };

  const handleSetTime = (e) => {
    e.preventDefault();
    const seconds = parseInt(inputTime) * 60;
    if (!isNaN(seconds) && seconds > 0) {
      setTime(seconds);
      setIsRunning(false);
      setInputTime("");
    }
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = timeInSeconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-6 ">
      <div className="text-6xl font-mono font-bold tabular-nums">
        {formatTime(time)}
      </div>
      <form onSubmit={handleSetTime} className="flex space-x-2">
        <input
          type="number"
          value={inputTime}
          onChange={(e) => setInputTime(e.target.value)}
          placeholder="Enter minutes"
          className="w-40 px-2 rounded-md outline-none border-2 border-transparent focus:border-secondary-dark" 
          min="1"
        />
        <Button type="submit">Set</Button>
      </form>
      <div className="space-x-2 flex gap-6">
        {!isRunning ? (
          <Button onClick={handleStart} disabled={time === 0}>
            <FontAwesomeIcon icon={faPlay} className="w-6 h-6" />
          </Button>
        ) : (
          <Button onClick={handlePause}>
            <FontAwesomeIcon icon={faPause} className="w-6 h-6" />
          </Button>
        )}
        <Button onClick={handleReset}>
          <FontAwesomeIcon
            icon={faRepeat}
            flip="horizontal"
            className="w-6 h-6"
          />
        </Button>
      </div>
    </div>
  );
};

export default Timer;
