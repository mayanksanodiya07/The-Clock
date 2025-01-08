import { formatTime } from "../utils/formatTime"

function LapRow({children , num, diff}) {
    return (
        <div className="font-mono grid grid-cols-[30px_1fr_1fr] text-lg gap-11">
            <div className="">{(num + 1)}.</div>
            <div>{formatTime( diff) }</div>
            <div>{children }</div>
            
        </div>
    )
}

export default LapRow
