import { auth } from "@/auth/authService";
import CommentForm from "@/comments/CommentForm";
import CommentList from "@/comments/CommentList";
import EditFeedbackForm from "@/feedback/form/EditFeedbackForm";
import { feedback } from "@/feedback/services/feedbackService";
import FeedbackItem from "@/feedback/single/FeedbackItem";
import GradientIcon from "@/ui/icons/GradientIcon";
import IconPen from "@/ui/icons/IconPen";
import SimpleLayout from "@/ui/layout/SimpleLayout";
import TopButtonBar from "@/ui/layout/TopButtonBar";
import FormModal from "@/ui/modals/FormModal";
import { ModalStateProvider } from "@/ui/modals/ModalContext";
import { notFound } from "next/navigation";

export default async function SingleFeedbackPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const feedbackItem = await feedback().findById(id);

  if (!feedbackItem) {
    notFound();
  }

  const user = await auth().currentUser();
  const displayEditButton = feedbackItem.authorId === user.id;

  return (
    <SimpleLayout className="mx-auto max-w-[689px] lg:max-w-[730px]">
      <ModalStateProvider>
        <TopButtonBar displayEditButton={displayEditButton} />

        <FormModal
          form={
            <>
              <GradientIcon className="absolute -top-5">
                <IconPen className="relative bottom-[0.5px] start-[1px]" />
              </GradientIcon>
              <EditFeedbackForm feedbackItem={feedbackItem} />
            </>
          }
        >
          <main className="flex flex-col gap-6">
            <FeedbackItem feedbackItem={feedbackItem} />
            <CommentList
              comments={[
                {
                  id: "1",
                  content:
                    "Also, please allow styles to be applied based on system preferences. I would love to be able to browse Frontend Mentor in the evening after my device’s dark mode turns on without the bright background it currently has.",
                  authorId: "1",
                  author: {
                    id: "1",
                    username: "hexagon.bestagon",
                    fullName: "Elijah Moss",
                    avatar: "/users/hexagon.bestagon.jpg",
                  },
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  feedbackId: "1",
                  replies: [],
                },
                {
                  id: "2",
                  content:
                    "Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.",
                  authorId: "2",
                  author: {
                    id: "2",
                    username: "hummingbird1",
                    fullName: "James Skinner",
                    avatar: "/users/hummingbird1.jpg",
                  },
                  createdAt: new Date(),
                  updatedAt: new Date(),
                  feedbackId: "1",
                  replies: [
                    {
                      id: "3",
                      content:
                        '@hummingbird1 While waiting for dark mode, there are browser extensions that will also do the job. Search for "dark theme” followed by your browser. There might be a need to turn off the extension for sites with naturally black backgrounds though.',
                      authorId: "3",
                      author: {
                        id: "3",
                        username: "annev1990",
                        fullName: "Anne Valentine",
                        avatar: "/users/annev1990.jpg",
                      },
                      createdAt: new Date(),
                      updatedAt: new Date(),
                      feedbackId: "1",
                    },
                  ],
                },
              ]}
            />
            <CommentForm feedbackId={id} />
          </main>
        </FormModal>
      </ModalStateProvider>
    </SimpleLayout>
  );
}
