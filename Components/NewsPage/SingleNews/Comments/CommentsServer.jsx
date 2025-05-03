import { commentService } from "@/lib/services/commentService";

export async function CommentsServer({ headlineId }) {
  const comments = await commentService.getPaginatedComments(
    headlineId,
    100,
    0
  );

  return (
    <ul className="space-y-6 mb-8">
      {comments.map((comment) => (
        <li
          key={comment.id}
          className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
        >
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
  );
}
