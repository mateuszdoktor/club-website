import { CalendarDays, Clock } from "lucide-react";

export default function MatchDateInfo({ date }) {
  const d = new Date(date);

  return (
    <div className="flex flex-col items-center text-base text-neutral-600 gap-2">
      <div className="flex items-center gap-2">
        <CalendarDays className="h-5 w-5 text-neutral-400" />
        <span className="font-medium">
          {d.toLocaleDateString("en-EN", {
            weekday: "short",
            month: "short",
            day: "numeric",
          })}
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Clock className="h-5 w-5 text-neutral-400" />
        <span className="font-medium">
          {d.toLocaleTimeString("en-EN", {
            hour: "2-digit",
            minute: "2-digit",
          })}
        </span>
      </div>
    </div>
  );
}
