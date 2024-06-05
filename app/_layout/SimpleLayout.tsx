import clsx from "clsx";
import BtnBack from "./BtnBack";

export default function SimpleLayout({
  children,
  className,
}: Readonly<{
  children: React.ReactNode;
  className?: string;
}>) {
  return (
    <section className={clsx("p-6", className)}>
      <div className="mb-6 flex h-10 items-center">
        <BtnBack />
      </div>
      {children}
    </section>
  );
}
