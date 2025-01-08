import Spinner from "@/app/_components/Spinner";

export default function Loading() {
  return (
    <div className="h-full flex justify-center items-center">
      <Spinner />
    </div>
  );
}