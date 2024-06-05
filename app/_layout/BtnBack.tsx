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
    <Button className="px-0" underline onClick={backToPrevPage}>
      <IconChevronLeft />
      Go Back
    </Button>
  );
}
