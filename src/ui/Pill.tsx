import clsx from "clsx";

type PillProps = {
  children: React.ReactNode;
  active?: boolean;
  className?: string;
};

const colorVariants = {
  default: "bg-slate-100 text-slate-600",
  active: "bg-blue text-white",
};

export default function Pill({
  children,
  className,
  active = false,
}: PillProps) {
  return (
    <button
      className={clsx(
        "hover:bg-blue-100 flex w-max items-center gap-2 rounded-10px px-4 py-2 text-body-3 transition-colors",
        colorVariants[active ? "active" : "default"],
        className,
      )}
    >
      {children}
    </button>
  );
}
