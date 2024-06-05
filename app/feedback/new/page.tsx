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
      <main className="rounded-10px bg-white px-6 pb-6 pt-11">
        <h1 className="mb-6 text-h3 ">Create New Feedback</h1>

        <Form />
      </main>
    </SimpleLayout>
  );
}