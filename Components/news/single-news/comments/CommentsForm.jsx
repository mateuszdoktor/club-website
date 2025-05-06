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
      <p className="text-gray-400 text-center mb-12">
        Please log in to comment.
      </p>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4 mb-12">
      <textarea
        className="w-full p-5 bg-gray-100 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-500 text-gray-900 resize-none"
        placeholder="Write a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        rows={4}
        disabled={isPending}
      />
      <div className="flex justify-between">
        <button
          type="submit"
          disabled={isPending}
          className="px-6 py-3 mt-4 bg-gray-800 text-white font-semibold text-base rounded-xl border border-transparent shadow-lg transition-all duration-300 hover:bg-gray-700 hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-500 active:scale-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? "Posting..." : "Post"}
        </button>

        {status === "error" && (
          <span className="text-sm text-red-600">
            Please write more or log in
          </span>
        )}
        {status === "success" && (
          <span className="text-sm text-green-600">Comment added!</span>
        )}
      </div>
    </form>
  );
}
