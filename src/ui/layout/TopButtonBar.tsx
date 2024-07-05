"use client";

import Button from "@/ui/Button";
import BackButton from "@/ui/layout/BackButton";
import { useModalContext } from "@/ui/modals/ModalContext";
import Link from "next/link";

export default function TopButtonBar({
  displayEditButton,
}: {
  displayEditButton: boolean;
}) {
  const { setIsModalOpen } = useModalContext();

  return (
    <div className="mb-6 flex h-10 items-center justify-between">
      <BackButton as={Link} href="/" />
      {displayEditButton && (
        <Button variant="blue" onClick={() => setIsModalOpen(true)}>
          Edit Feedback
        </Button>
      )}
    </div>
  );
}
