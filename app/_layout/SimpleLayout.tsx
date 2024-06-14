"use client";

import clsx from "clsx";
import { useFormModalContext } from "../_context/FormModalContext";

type SimpleLayoutProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export default function SimpleLayout({
  children,
  className,
}: SimpleLayoutProps) {
  const { setIsOpen } = useFormModalContext();

  return <div className={clsx("p-6", className)}>{children}</div>;
}
