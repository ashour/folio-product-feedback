import Button from "@/app/_components/Button";
import IconDetective from "@/app/_components/icons/IconDetective";
import Link from "next/link";

export default function EmptyState() {
  return (
    <section className="flex min-h-[460px] items-center justify-center rounded-10px bg-white px-6 py-20">
      <div className="flex max-w-[410px] flex-col items-center justify-center text-center">
        <IconDetective />
        <h3 className="mb-4 text-h3">There is no feedback yet.</h3>
        <p className="mb-6 text-body-1 text-slate-500">
          Got a suggestion? Found a bug that needs to be squashed? We love
          hearing about new ideas to improve our app.
        </p>
        <Button variant="purple" as={Link} href="/feedback/new">
          + Add Feedback
        </Button>
      </div>
    </section>
  );
}
