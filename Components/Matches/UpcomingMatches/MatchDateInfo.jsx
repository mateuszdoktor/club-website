import { CalendarDays, Clock } from "lucide-react";

export default function MatchDateInfo({ date }) {
  const d = new Date(date);

  return (
    <div className="flex flex-col items-center text-sm text-gray-500 gap-1.5">
      {" "}
      {/* text-xs → text-sm */}
      <div className="flex items-center gap-1.5">
        <CalendarDays className="h-5 w-5 text-gray-400" /> {/* było 4x4 */}
        <span>{d.toLocaleDateString("en-EN")}</span>
      </div>
      <div className="flex items-center gap-1.5">
        <Clock className="h-5 w-5 text-gray-400" />
        <span>
          {d.toLocaleTimeString("en-EN", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
}
