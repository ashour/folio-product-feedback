import clsx from "clsx";
import BtnBack from "./BtnBack";

type SimpleLayoutProps = Readonly<{
  children: React.ReactNode;
  className?: string;
  backUrl?: string;
}>;

export default function SimpleLayout({
  children,
  className,
  backUrl,
}: SimpleLayoutProps) {
  return (
    <section className={clsx("p-6", className)}>
      <div className="mb-6 flex h-10 items-center">
        <BtnBack backUrl={backUrl} />
      </div>
      {children}
    </section>
  );
}
