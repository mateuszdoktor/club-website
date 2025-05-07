"use client";

import { useComments } from "@/hooks/useComments";
import { CommentsList } from "./CommentsList";
import { CommentsForm } from "./CommentsForm";

export function CommentsSection({ headlineId }) {
  const { comments, hasMore, loadMore, reload } = useComments(headlineId);

  const handleOptimisticComment = (comment) => {
    comments.unshift(comment);
  };

  return (
    <section className="bg-white py-20 px-4 border-t border-gray-100">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        Join the conversation
      </h2>
      <CommentsForm
        headlineId={headlineId}
        onComment={handleOptimisticComment}
      />
      <CommentsList comments={comments} />
      {hasMore && (
        <button
          onClick={() => loadMore()}
          className="px-5 py-2 mt-4 bg-white text-gray-800 font-medium text-sm rounded-lg border border-gray-300 shadow-sm transition-all duration-200 hover:bg-gray-100 hover:shadow-md hover:scale-105 focus:outline-none focus:ring-2 focus:ring-gray-400 active:scale-100"
        >
          Load more comments
        </button>
      )}
    </section>
  );
}
