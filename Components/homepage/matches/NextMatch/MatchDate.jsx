import { CalendarDays } from "lucide-react";

export default function MatchDate({ date }) {
  return (
    <div className="flex justify-center items-center gap-3 text-white/90 text-lg md:text-xl font-medium pt-4">
      <CalendarDays className="h-6 w-6 text-white/70" />
      <span>{date}</span>
    </div>
  );
}
