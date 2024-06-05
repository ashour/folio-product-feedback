"use client";

import { useRouter } from "next/navigation";
import Button from "../_components/Button";
import IconChevronLeft from "../_components/icons/IconChevronLeft";

export default function BtnBack() {
  const router = useRouter();

  function backToPrevPage() {
    router.back();
  }

  return (
    <Button slim underline onClick={backToPrevPage}>
      <IconChevronLeft />
      <span className="text-body-3 font-bold text-slate-500">Go Back</span>
    </Button>
  );
}
