import clsx from "clsx";

export default function HelpText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={clsx("text-body-2 text-slate-500", className)}>{children}</p>
  );
}
