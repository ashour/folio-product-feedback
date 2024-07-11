import { CommentSchema } from "./comment-schemas";
import CommentItem from "./CommentItem";

export default function CommentList({
  comments,
}: {
  comments: CommentSchema[];
}) {
  return (
    <section className="rounded-10px bg-white p-6">
      <h3 className="mb-6 text-h3">{comments.length} Comments</h3>

      <div className="grid grid-cols-1 gap-6 divide-y divide-slate-300/25">
        {comments.map((comment) => (
          <div key={comment.id} className="pt-6 first:pt-0">
            <CommentItem comment={comment} />

            {comment.replies.length > 0 && (
              <div className="ms-6 mt-6">
                {comment.replies.map((reply) => (
                  <CommentItem key={reply.id} comment={reply} />
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
