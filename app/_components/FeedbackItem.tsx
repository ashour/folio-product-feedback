"use client";

import { Feedback } from "@prisma/client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Pill from "./Pill";
import IconChatBubble from "./icons/IconChatBubble";
import IconChevronUp from "./icons/IconChevronUp";

export default function FeedbackItem({ feedback }: { feedback: Feedback }) {
  const router = useRouter();

  function goToFeedbackDetails() {
    router.push(`/feedback/${feedback.id}`);
  }

  return (
    <article
      className="group grid cursor-pointer grid-cols-2 gap-4 rounded-10px bg-white p-4 md:grid-cols-[max-content_auto_max-content] md:gap-6 md:px-8 md:py-7"
      onClick={goToFeedbackDetails}
    >
      <div className="col-span-2 md:order-2 md:col-span-1">
        <h2 className="mb-[9px] text-body-3 font-bold tracking-[-0.18px] group-hover:text-blue md:mb-1 md:text-h3">
          <Link href={`/feedback/${feedback.id}`}>{feedback.title}</Link>
        </h2>
        <p className="mb-2 text-body-3 font-normal text-slate-500 md:mb-3 md:text-body-1">
          {feedback.details}
        </p>
        <div>
          <Pill>
            <span className="text-blue">{feedback.category}</span>
          </Pill>
        </div>
      </div>

      <div className="md:order-1 md:pe-[15px]">
        <Pill className="md:flex-col md:justify-center md:gap-[2px] md:px-2 md:pb-2 md:pt-3">
          <IconChevronUp /> 999
        </Pill>
      </div>

      <div className="flex items-center gap-1 justify-self-end md:order-3 md:self-center">
        <IconChatBubble />
        <span className="text-body-3 font-bold md:text-body-1">4</span>
      </div>
    </article>
  );
}
