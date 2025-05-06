"use client";
import { useEffect, useState } from "react";

export function useComments(headlineId) {
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
      setComments((prev) => [...prev, ...newComments]);
      setOffset((prev) => prev + newComments.length);
    }

    setHasMore(newComments.length === limit);
  };

  useEffect(() => {
    loadMore(true);
  }, [headlineId]);

  return { comments, hasMore, loadMore, reload: () => loadMore(true) };
}
