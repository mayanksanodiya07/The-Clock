"use client";
import { useState } from "react";
import LapBox from "../_components/LapBox";
import Stopwatch from "../_components/Stopwatch";
import Heading from "../_components/Heading";

export default function StopwatchPage() {
  const [laps, setLaps] = useState([]);
  const [time, setTime] = useState(0);

  return (
    <div className="h-full bg-primary-light flex flex-col items-center ">
      <Heading>Stopwatch</Heading>

      <Stopwatch laps={laps} setTime={setTime} time={time} setLaps={setLaps} />
      <LapBox laps={laps} time={time} />
    </div>
  );
}
