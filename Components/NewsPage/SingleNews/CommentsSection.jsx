"use client";

import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export function CommentsSection({ headlineId }) {
  const { data: session } = useSession();
  const isAuthenticated = !!session?.user;

  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("idle");

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch(`/api/comments?headlineId=${headlineId}`);
        const data = await res.json();
        setComments(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchComments();
  }, [headlineId]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim() || text.trim().length < 5) {
      setStatus("error");
      return;
    }

    if (!isAuthenticated) {
      setStatus("error");
      return;
    }

    setLoading(true);
    setStatus("idle");

    try {
      const res = await fetch("/api/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          headlineId,
          userId: session.user.id,
          author: session.user.name,
          text,
        }),
      });

      if (!res.ok) throw new Error("Failed to add comment");

      const newComment = await res.json();
      setComments((prev) => [...prev, newComment]);
      setText("");
      setStatus("success");
    } catch (error) {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">
        Comments
      </h2>

      {isAuthenticated ? (
        <form onSubmit={handleSubmit} className="space-y-6 mb-10">
          <textarea
            className="w-full p-5 bg-gray-100 border border-gray-300 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none text-gray-900"
            placeholder="Share your thoughts..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            disabled={loading}
          />
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="px-10 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full transition duration-300 disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Posting..." : "Post Comment"}
            </button>
            {status === "error" && (
              <div className="text-red-500 text-sm mt-2">
                Something went wrong. Try again.
              </div>
            )}
            {status === "success" && (
              <div className="text-green-600 text-sm mt-2">Comment added!</div>
            )}
          </div>
        </form>
      ) : (
        <p className="text-gray-400 text-center mb-10">
          Please log in to post a comment.
        </p>
      )}

      {comments.length === 0 ? (
        <div className="text-gray-400 text-center">
          No comments yet. Be the first to comment!
        </div>
      ) : (
        <ul className="space-y-6">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 transition hover:shadow-md"
            >
              <div className="font-bold text-gray-900 text-lg">{comment.author}</div>
              <div className="text-gray-500 mb-3">
                {new Date(comment.createdAt).toLocaleString()}
              </div>
              <div className="text-gray-800 text-xl">{comment.text}</div>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}
