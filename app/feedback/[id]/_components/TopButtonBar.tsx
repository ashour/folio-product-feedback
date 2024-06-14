"use client";

import Button from "@/app/_components/Button";
import { useModalContext } from "@/app/_context/FormModalContext";
import BackButton from "@/app/_layout/BackButton";
import Link from "next/link";

export default function TopButtonBar() {
  const { setIsOpen } = useModalContext();

  return (
    <div className="mb-6 flex h-10 items-center justify-between">
      <BackButton as={Link} href="/" />
      <Button variant="blue" onClick={() => setIsOpen(true)}>
        Edit Feedback
      </Button>
    </div>
  );
}
