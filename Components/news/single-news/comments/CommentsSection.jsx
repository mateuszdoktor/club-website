"use client"
import { useRef } from "react";
import { Comments } from "./Comments";
import { CommentsForm } from "./CommentsForm";

export function CommentsSection({ headlineId }) {
  const commentsRef = useRef();

  const handleCommentAdded = () => {
    commentsRef.current?.reloadComments(); 
  };

  return (
    <section className="bg-white py-20 px-4 border-t border-gray-100">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-10">
          Join the conversation
        </h2>
        <CommentsForm
          headlineId={headlineId}
          onCommentAdded={handleCommentAdded}
        />
        <Comments headlineId={headlineId} ref={commentsRef} />
      </div>
    </section>
  );
}
