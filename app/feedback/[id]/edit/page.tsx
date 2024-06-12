import IconPen from "@/app/_components/icons/IconPen";
import SimpleLayout from "@/app/_layout/SimpleLayout";
import { Suspense } from "react";
import EditForm from "../../_components/EditForm";
import GradientIcon from "../../_components/GradientIcon";

export default async function EditFeedback({
  params,
  searchParams,
}: {
  params: { id: string };
  searchParams?: { [key: string]: string | undefined };
}) {
  return (
    <SimpleLayout
      className="mx-auto max-w-[540px]"
      backUrl={searchParams?.backTo}
    >
      <main className="relative rounded-10px bg-white px-6 pb-6 pt-11">
        <GradientIcon className="absolute -top-5">
          <IconPen className="relative bottom-[0.5px] start-[1px]" />
        </GradientIcon>

        <Suspense fallback={<div className="mb-6 text-center">Loading...</div>}>
          <EditForm id={params.id} cancelUrl={searchParams?.backTo} />
        </Suspense>
      </main>
    </SimpleLayout>
  );
}
