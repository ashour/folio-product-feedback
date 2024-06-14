"use client";

import clsx from "clsx";

type SimpleLayoutProps = Readonly<{
  children: React.ReactNode;
  className?: string;
}>;

export default function SimpleLayout({
  children,
  className,
}: SimpleLayoutProps) {
  return <div className={clsx("p-6", className)}>{children}</div>;
}
