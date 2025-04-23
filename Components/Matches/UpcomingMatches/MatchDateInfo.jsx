import { CalendarDays, Clock } from "lucide-react";

export default function MatchDateInfo({ date }) {
  const d = new Date(date);

  return (
    <div className="flex flex-col items-center text-xs text-gray-500 gap-1">
      <div className="flex items-center gap-1">
        <CalendarDays className="h-4 w-4 text-gray-400" />
        <span>{d.toLocaleDateString("en-EN")}</span>
      </div>
      <div className="flex items-center gap-1">
        <Clock className="h-4 w-4 text-gray-400" />
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
