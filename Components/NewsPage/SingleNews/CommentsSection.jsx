"use client"
import { useSession } from "next-auth/react";
import { useState, useEffect } from "react";

export function CommentsSection({ headlineId }) {
  const { data: session } = useSession();
  const [comments, setComments] = useState([]);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const isAuthenticated = !!session?.user;

  useEffect(() => {
    async function fetchComments() {
      try {
        const res = await fetch(`/api/comments?headlineId=${headlineId}`);
        const data = await res.json();
        setComments(data);
      } catch (err) {
        console.error(err);
      }
    }

    fetchComments();
  }, [headlineId]);

  async function handleSubmit(e) {
    e.preventDefault();
    setError(null);
    setSuccess(false);

    if (!text.trim() || text.trim().length < 5) {
      setError("Comment must be at least 5 characters long.");
      return;
    }

    if (!session?.user) {
      setError("You must be logged in to comment.");
      return;
    }

    setLoading(true);

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

      if (!res.ok) {
        throw new Error("Failed to add comment");
      }

      const newComment = await res.json();
      setComments((prev) => [...prev, newComment]);
      setText("");
      setSuccess(true);
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold mb-6">Comments</h2>

      {isAuthenticated ? (
        <form onSubmit={handleSubmit} className="mb-8">
          <textarea
            className="w-full p-4 border rounded-lg mb-2"
            placeholder="Write your comment..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            rows={4}
            disabled={loading}
          />
          <div className="flex items-center space-x-4">
            <button
              type="submit"
              className="px-6 py-2 bg-blue-600 text-white rounded-lg disabled:opacity-50"
              disabled={loading}
            >
              {loading ? "Adding..." : "Add Comment"}
            </button>
            {error && <div className="text-red-500">{error}</div>}
            {success && <div className="text-green-500">Comment added!</div>}
          </div>
        </form>
      ) : (
        <p className="text-gray-500 mb-6">You must be logged in to comment.</p>
      )}

      {comments.length === 0 ? (
        <div className="text-gray-500">No comments yet. Be the first!</div>
      ) : (
        <ul className="space-y-4">
          {comments.map((comment) => (
            <li key={comment.id} className="border p-4 rounded-lg shadow">
              <div className="font-semibold">{comment.author}</div>
              <div className="text-gray-600 text-sm mb-2">
                {new Date(comment.createdAt).toLocaleString()}
              </div>
              <div>{comment.text}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
