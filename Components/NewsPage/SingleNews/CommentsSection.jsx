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

  const [hasMore, setHasMore] = useState(true);
  const [offset, setOffset] = useState(0);
  const limit = 5;

  useEffect(() => {
    loadComments(0, false);
  }, [headlineId]);

  const loadComments = async (newOffset = offset, append = true) => {
    const res = await fetch(
      `/api/comments?headlineId=${headlineId}&limit=${limit}&offset=${newOffset}`
    );
    const data = await res.json();

    if (data.length < limit) setHasMore(false);

    setComments((prev) =>
      append
        ? [...prev, ...data.filter((c) => !prev.some((p) => p.id === c.id))]
        : data
    );

    setOffset(newOffset + limit);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!text.trim() || text.length < 5 || !isAuthenticated) {
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
          image: session.user.image,
          text,
        }),
      });

      if (!res.ok) throw new Error();
      const newComment = await res.json();
      setComments((prev) => [newComment, ...prev]);
      setText("");
      setStatus("success");
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-20 px-4 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Join the conversation
        </h2>

        {isAuthenticated ? (
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
        ) : (
          <p className="text-gray-400 text-center mb-12">
            Please log in to comment.
          </p>
        )}

        <ul className="space-y-6 mb-8">
          {comments.map((comment) => (
            <li
              key={comment.id}
              className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
            >
              <div className="flex items-center gap-4 mb-3">
                <img
                  src={comment.image || "/default-avatar.png"}
                  alt="User avatar"
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {comment.author}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(comment.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>
              <p className="text-gray-700 text-sm">{comment.text}</p>
            </li>
          ))}
        </ul>

        {hasMore && (
          <div className="flex justify-center">
            <button
              onClick={() => loadComments(offset)}
              className="px-6 py-3 text-sm bg-gray-200 hover:bg-gray-300 rounded-full transition"
            >
              Load more
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
