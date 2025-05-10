import { CalendarDays, Clock } from "lucide-react";

export default function MatchDateInfo({ date }) {
  const d = new Date(date);

  return (
    <div className="flex flex-col items-center text-neutral-600 gap-3">
      <div className="flex items-center gap-3 font-mono text-sm tracking-wider">
        <CalendarDays className="h-4 w-4 text-neutral-900" />
        <span>
          {d
            .toLocaleDateString("en-EN", {
              weekday: "short",
              month: "short",
              day: "numeric",
            })
            .toUpperCase()}
        </span>
      </div>
      <div className="flex items-center gap-3 font-mono text-sm tracking-wider">
        <Clock className="h-4 w-4 text-neutral-900" />
        <span>
          {d
            .toLocaleTimeString("en-EN", {
              hour: "2-digit",
              minute: "2-digit",
            })
            .toUpperCase()}
        </span>
      </div>
    </div>
  );
}
