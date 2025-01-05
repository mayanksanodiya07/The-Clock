import Stopwatch from "../_components/Stopwatch";

export default function StopwatchPage() {
  return (
    <div className="h-full bg-[#d9a664] flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-8">Stopwatch</h1>
      <Stopwatch />
    </div>
  );
}

