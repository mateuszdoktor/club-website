"use client";
import { CalendarDays } from "lucide-react";

export function CommentsList({ comments }) {
  return (
    <ul className="space-y-6 mb-10">
      {comments.map((comment) => (
        <li
          key={comment.id}
          className="bg-white border border-neutral-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all"
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src={comment.user.image ?? "/default-avatar.png"}
              alt="User avatar"
              className="w-12 h-12 rounded-full object-cover border-2 border-[#0055A4]/10"
            />
            <div>
              <p className="text-base font-bold text-neutral-900">
                {comment.user.name}
              </p>
              <p className="text-xs text-neutral-500 flex items-center gap-1 font-mono">
                <CalendarDays className="w-3 h-3" />
                {new Date(comment.createdAt).toLocaleString()}
              </p>
            </div>
          </div>
          <p className="text-neutral-700 text-base">{comment.text}</p>
        </li>
      ))}
    </ul>
  );
}
