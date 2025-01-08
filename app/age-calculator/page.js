import AgeCalculator from "../_components/AgeCalculator";
import Heading from "../_components/Heading";

export default function AgeCalculatorPage() {
  return (
    <main className="h-full flex flex-col items-center ">
      <Heading>Age Calculator</Heading>

      <AgeCalculator />
    </main>
  )
}

