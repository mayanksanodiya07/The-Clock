import Clock from "../_components/Clock";
import Heading from "../_components/Heading";

function page() {
  return (
    <div className="flex flex-col items-center h-full">
      <Heading>The Clock</Heading>

      <Clock />
    </div>
  );
}

export default page;
