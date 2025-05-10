"use client";

import { useState, useTransition } from "react";
import { useSession } from "next-auth/react";
import { addCommentServerAction } from "@/app/actions/addComment";

export function CommentsForm({ headlineId, onComment }) {
  const { data: session } = useSession();
  const [text, setText] = useState("");
  const [isPending, startTransition] = useTransition();
  const [status, setStatus] = useState("idle");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!session?.user || text.trim().length < 5) {
      setStatus("error");
      return;
    }

    startTransition(async () => {
      try {
        setStatus("idle");
        onComment({
          id: Math.random().toString(),
          text,
          user: session.user,
          createdAt: new Date().toISOString(),
        });

        await addCommentServerAction({
          headlineId,
          userId: session.user.id,
          text,
        });

        setText("");
        setStatus("success");
      } catch (err) {
        console.error(err);
        setStatus("error");
      }
    });
  };

  if (!session?.user) {
    return (
      <div className="bg-[#0055A4]/5 border border-[#0055A4]/20 rounded-xl p-6 text-center mb-12">
        <p className="text-[#0055A4] font-medium">Please log in to comment</p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-12">
      <div className="flex items-start gap-4">
        <img
          src={session.user.image ?? "/default-avatar.png"}
          alt="User avatar"
          className="w-12 h-12 rounded-full object-cover border-2 border-[#0055A4]/10 mt-1"
        />
        <div className="flex-1">
          <textarea
            className="w-full p-5 bg-neutral-50 border border-neutral-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#0055A4]/50 text-neutral-900 resize-none transition-all"
            placeholder="Write your comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            disabled={isPending}
          />
          <div className="flex justify-between items-center mt-4">
            <button
              type="submit"
              disabled={isPending}
              className="px-8 py-3 bg-[#0055A4] text-white font-bold rounded-xl border border-transparent shadow-md transition-all duration-300 hover:bg-[#004494] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isPending ? "POSTING..." : "POST COMMENT"}
            </button>

            <div className="text-sm">
              {status === "error" && (
                <span className="text-red-600 font-medium">
                  Minimum 5 characters required
                </span>
              )}
              {status === "success" && (
                <span className="text-green-600 font-medium">
                  Comment posted!
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
