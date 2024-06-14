"use client";

import clsx from "clsx";
import { useFormModalContext } from "../(root)/_context/FormModalContext";
import BtnBack from "./BtnBack";

type SimpleLayoutProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export default function SimpleLayout({
  children,
  className,
}: SimpleLayoutProps) {
  const { setIsOpen } = useFormModalContext();

  return (
    <section className={clsx("p-6", className)}>
      <div className="mb-9 flex h-10 items-center">
        <BtnBack onClick={() => setIsOpen(false)} />
      </div>
      {children}
    </section>
  );
}
