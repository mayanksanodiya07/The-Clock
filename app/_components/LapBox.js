import { useEffect, useRef } from "react";
import { formatTime } from "../utils/formatTime";
import LapRow from "./LapRow";

function LapBox({ laps, time }) {
  const divRef = useRef(null);
  useEffect(() => {
    const scrollToTop = () => {
      divRef.current.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    };
    scrollToTop();
  }, [laps.length]);
  return (
    <div className="h-72 py-6 grid grid-rows-[auto_1fr]">
      <div className="font-semibold text-2xl mb-3 text-center ">Laps</div>
      <div
        ref={divRef}
        className=" h-full px-8 w-full overflow-y-scroll scrollbar-thin scrollbar-thumb-secondary-light scrollbar-track-primary-dark"
      >
        
        {laps.length ? (
          <>
            {(laps.length ) < 99 && (
              <LapRow num={laps.length} diff={time - laps[laps.length - 1]}>
                {formatTime(time)}
              </LapRow>
            )}
            {[...laps].reverse().map((lap, i) => {
              const prevLap = laps[laps.length - 1 - (i + 1)];
              const diff = prevLap !== undefined ? lap - prevLap : 0;
              return (
                <LapRow key={i} num={laps.length - 1 - i} diff={diff}>
                  {formatTime(lap)}
                </LapRow>
              );
            })}
          </>
        ) : (
          <p className="text-center">No laps</p>
        )}
      </div>
    </div>
  );
}

export default LapBox;
