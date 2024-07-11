import Image from "next/image";
import { BaseCommentSchema } from "./comment-schemas";

export default function CommentItem({
  comment,
}: {
  comment: BaseCommentSchema;
}) {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className="h-[40px] w-[40px]">
            <Image
              src={comment.author.avatar}
              alt={comment.author.fullName}
              width={40}
              height={40}
              className="rounded-full"
            />
          </div>
          <div>
            <h4 className="text-body-3 font-bold -tracking-[0.18px] text-slate-600">
              {comment.author.fullName}
            </h4>
            <p className="text-body-4 text-slate-500">
              @{comment.author.username}
            </p>
          </div>
        </div>

        <button className="text-body-3 text-blue">Reply</button>
      </div>

      <p className="mt-4 text-body-4 text-slate-500">{comment.content}</p>
    </div>
  );
}
