import { Feedback } from "@prisma/client";
import Pill from "./Pill";
import IconChatBubble from "./icons/IconChatBubble";
import IconChevronUp from "./icons/IconChevronUp";

export default function FeedbackItem({ feedback }: { feedback: Feedback }) {
  return (
    <article className="rounded-10px bg-white p-4">
      <h2 className="mb-[9px] text-body-3 font-bold tracking-[-0.18px]">
        {feedback.title}
      </h2>

      <p className="mb-2 text-body-3 font-normal text-slate-500">
        {feedback.details}
      </p>

      <div className="mb-4">
        <Pill>
          <span className="text-blue">{feedback.category}</span>
        </Pill>
      </div>

      <div className="flex items-center justify-between">
        <Pill>
          <IconChevronUp /> 999
        </Pill>

        <div className="flex items-center gap-1">
          <IconChatBubble />
          <span className="text-body-3 font-bold">4</span>
        </div>
      </div>
    </article>
  );
}
