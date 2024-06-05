"use client";

import { useRouter } from "next/navigation";
import IconChevronLeft from "../_components/icons/IconChevronLeft";

export default function BtnBack() {
  const router = useRouter();

  function backToPrevPage() {
    router.back();
  }

  return (
    <button className="flex items-center gap-2" onClick={backToPrevPage}>
      <IconChevronLeft />
      <span className="text-body-3 font-bold">Go Back</span>
    </button>
  );
}
