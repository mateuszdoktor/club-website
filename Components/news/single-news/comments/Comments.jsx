"use client";
import { useEffect, useImperativeHandle, useState, forwardRef } from "react";

export const Comments = forwardRef(function Comments({ headlineId }, ref) {
  const [comments, setComments] = useState([]);
  const [offset, setOffset] = useState(0);
  const [hasMore, setHasMore] = useState(true);
  const limit = 5;

  const loadMore = async (reset = false) => {
    const newOffset = reset ? 0 : offset;
    const res = await fetch(
      `/api/comments?headlineId=${headlineId}&limit=${limit}&offset=${newOffset}`
    );
    const newComments = await res.json();

    if (reset) {
      setComments(newComments);
      setOffset(newComments.length);
    } else {
      setComments((prev) => {
        const seen = new Set(prev.map((c) => c.id));
        const uniqueNew = newComments.filter((c) => !seen.has(c.id));
        return [...prev, ...uniqueNew];
      });
      setOffset((prev) => prev + newComments.length);
    }

    if (newComments.length === 0) {
      setHasMore(false);
    } else {
      setHasMore(true);
    }
  };

  useImperativeHandle(ref, () => ({
    reloadComments: () => loadMore(true),
  }));

  useEffect(() => {
    loadMore(true); 
  }, [headlineId]);

  return (
    <>
      <ul className="space-y-6 mb-8">
        {comments.map((comment) => (
          <li key={comment.id} className="bg-gray-50 ...">
            <div className="flex items-center gap-4 mb-3">
              <img
                src={comment.user.image ?? "/default-avatar.png"}
                alt="User avatar"
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-semibold text-gray-800">
                  {comment.user.name}
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
        <button onClick={() => loadMore()} className="px-4 py-2 mt-4 ...">
          Load more comments
        </button>
      )}
    </>
  );
});
