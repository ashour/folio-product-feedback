import IconPlusSign from "@/app/_components/icons/IconPlusSign";
import SimpleLayout from "@/app/_layout/SimpleLayout";
import { title } from "@/app/_lib/formatting";
import { Metadata } from "next";
import Form from "../_components/Form";

export const metadata: Metadata = {
  title: title("Add feedback"),
  description: "A Next.js demo for collecting feedback from users.",
};

export default function NewFeedback() {
  return (
    <SimpleLayout>
      <main className="relative rounded-10px bg-white px-6 pb-6 pt-11">
        <div className="bg-brand-gradient absolute -top-5 flex h-10 w-10 items-center justify-center rounded-full">
          <div className="flex h-7 w-7 items-center justify-center">
            <IconPlusSign />
          </div>
        </div>
        <h1 className="mb-6 text-h3 ">Create New Feedback</h1>

        <Form />
      </main>
    </SimpleLayout>
  );
}
