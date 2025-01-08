import Heading from "../_components/Heading";
import Timer from "../_components/Timer";

export default function TimerPage() {
  return (
    <main className="h-full flex flex-col items-center ">
      <Heading>Timer</Heading>
      <Timer />
    </main>
  );
}
