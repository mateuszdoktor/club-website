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
    <section className="bg-white py-16 px-6 border-t border-neutral-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-black text-neutral-900 mb-12">
          JOIN THE CONVERSATION
        </h2>
        <CommentsForm
          headlineId={headlineId}
          onComment={handleOptimisticComment}
        />
        <CommentsList comments={comments} />
        {hasMore && (
          <button
            onClick={() => loadMore()}
            className="px-6 py-3 mt-8 w-full bg-white text-[#0055A4] font-medium rounded-xl border border-[#0055A4]/30 hover:bg-[#0055A4]/5 hover:border-[#0055A4]/50 transition-all duration-300"
          >
            LOAD MORE COMMENTS
          </button>
        )}
      </div>
    </section>
  );
}
