"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import { addCommentServerAction } from "@/app/actions/addComment";
import { useRouter } from "next/navigation";

export function CommentsForm({ headlineId }) {
  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle"); 

  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isAuthenticated || text.trim().length < 5) {
      setStatus("error");
      return;
    }

    try {
      setLoading(true);
      await addCommentServerAction({
        headlineId,
        userId: session.user.id,
        text,
      });
      setText("");
      setStatus("success");
      router.refresh();
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  if (!isAuthenticated) {
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
        disabled={loading}
      />
      <div className="flex items-center justify-between">
        <button
          type="submit"
          disabled={loading}
          className="px-6 py-3 bg-gray-800 text-white font-medium rounded-full hover:bg-gray-700 transition disabled:opacity-50"
        >
          {loading ? "Posting..." : "Post"}
        </button>
        {status === "error" && (
          <span className="text-sm text-red-500">
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
