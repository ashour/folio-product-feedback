"use client";

import Button from "@/app/_components/Button";
import { useModalContext } from "@/app/_context/ModalContext";
import BackButton from "@/app/_layout/BackButton";
import Link from "next/link";

export default function TopButtonBar() {
  const { setIsModalOpen } = useModalContext();

  return (
    <div className="mb-6 flex h-10 items-center justify-between">
      <BackButton as={Link} href="/" />
      <Button variant="blue" onClick={() => setIsModalOpen(true)}>
        Edit Feedback
      </Button>
    </div>
  );
}
