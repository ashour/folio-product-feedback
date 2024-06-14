"use client";

import { Feedback } from "@prisma/client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Pill from "./Pill";
import IconChatBubble from "./icons/IconChatBubble";
import IconChevronUp from "./icons/IconChevronUp";

export default function FeedbackItem({
  feedbackItem,
}: {
  feedbackItem: Feedback;
}) {
  const router = useRouter();
  const pathname = usePathname();

  const isFeedbackDetailsPage = pathname == `/feedback/${feedbackItem.id}`;

  function goToFeedbackDetails() {
    router.push(`/feedback/${feedbackItem.id}`);
  }

  return (
    <article
      className={clsx({
        "group grid grid-cols-2 gap-4 rounded-10px bg-white p-6 md:grid-cols-[max-content_auto_max-content] md:gap-6 md:px-8 md:py-7":
          true,
        "cursor-pointer": !isFeedbackDetailsPage,
      })}
      onClick={isFeedbackDetailsPage ? () => {} : goToFeedbackDetails}
    >
      <div className="col-span-2 md:order-2 md:col-span-1">
        <h2
          className={clsx({
            "mb-[9px] text-body-3 font-bold tracking-[-0.18px] md:mb-1 md:text-h3":
              true,
            "group-hover:text-blue": !isFeedbackDetailsPage,
          })}
        >
          {isFeedbackDetailsPage ? (
            feedbackItem.title
          ) : (
            <Link href={`/feedback/${feedbackItem.id}`}>
              {feedbackItem.title}
            </Link>
          )}
        </h2>
        <p className="mb-2 text-body-3 font-normal text-slate-500 md:mb-3 md:text-body-1">
          {feedbackItem.details}
        </p>
        <div>
          <Pill>
            <span className="text-blue">{feedbackItem.category}</span>
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
