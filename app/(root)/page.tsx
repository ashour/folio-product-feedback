import { type Feedback } from "@prisma/client";
import Button from "../_components/Button";
import IconDetective from "../_components/icons/IconDetective";
import NavLayout from "../_layout/NavLayout";

export default async function Home() {
  let feedbackItems: Feedback[] = [];
  let error: string | undefined;

  try {
    // feedbackItems = await fetchFeedback();
  } catch (err) {
    error = (err as Error).message;
  }

  return (
    <NavLayout>
      <main className="mx-6 mt-8">
        {error && (
          <div className="rounded-5px bg-danger px-3 py-2 text-body-1 text-white">
            Error: {error}
          </div>
        )}

        {feedbackItems.length === 0 && (
          <section className="flex min-h-[460px] flex-col items-center justify-center rounded-10px bg-white px-6 py-20 text-center">
            <IconDetective />
            <h3 className="mb-4 text-h3">There is no feedback yet.</h3>
            <p className="mb-6 text-body-1 text-slate-500">
              Got a suggestion? Found a bug that needs to be squashed? We love
              hearing about new ideas to improve our app.
            </p>
            <Button variant="purple">Add Feedback</Button>
          </section>
        )}
      </main>
    </NavLayout>
  );
}
