"use client";

import React, { useState, useEffect } from "react";
import Button from "./ui/Button";
import Spinner from "./Spinner";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFlag,
  faPause,
  faPlay,
  faRepeat,
} from "@fortawesome/free-solid-svg-icons";
import { formatTime } from "../utils/formatTime";
// import { Button } from "@/components/ui/button";
// import { Card, CardContent } from "@/components/ui/card";

const Stopwatch = ({laps, setLaps, setTime, time }) => {
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (isRunning) {
      intervalId = setInterval(() => setTime((time) => time + 10), 10);
    }
    return () => clearInterval(intervalId);
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    setTime(0);
    setIsRunning(false);
    setLaps([]);
  };

  const setLap = () => {
    setLaps((t) => [...t, time]);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-4 p-6 w-full max-w-md mx-auto ">
      <div className="text-6xl font-mono font-bold tabular-nums">
        {formatTime(time)}
      </div>
      <div className="flex gap-6">
        <Button onClick={setLap} type={"normal"} isActive={isRunning  && (laps.length) < 99}>
          <FontAwesomeIcon icon={faFlag} className="w-6 h-6" />
        </Button>

        <Button onClick={startStop} type={"toggle"} isRunning={isRunning}>
          {isRunning ? (
          <FontAwesomeIcon icon={faPause} className="w-6 h-6" />
          ) : (
            <FontAwesomeIcon icon={faPlay} className="w-6 h-6" />
          )}
        </Button>

        <Button onClick={reset} type={"normal"} isActive={!(time === 0)}>
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

export default Stopwatch;
