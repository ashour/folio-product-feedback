import Button from "@/app/_components/Button";
import IconChevronUp from "@/app/_components/icons/IconChevronUp";
import IconLightBulb from "@/app/_components/icons/IconLightBulb";
import Link from "next/link";

export default function TopControlBar() {
  return (
    <section className="flex items-center justify-between bg-slate-600 px-6 py-2 md:rounded-10px md:px-3">
      <div className="flex items-center justify-between gap-9">
        <p className="relative -top-[2px] hidden md:flex md:items-center md:justify-between ">
          <IconLightBulb />
          <span className="ml-2 text-h3 text-white">999 suggestions</span>
        </p>
        <p className="flex items-center justify-between gap-2 text-body-3 text-white">
          <span>
            <span className="font-normal">Sort by : </span> Most Upvotes
          </span>
          <IconChevronUp className="-scale-y-100" stroke="#fff" />
        </p>
      </div>

      <Button variant="purple" as={Link} href="/feedback/new">
        + Add Feedback
      </Button>
    </section>
  );
}
