import IconPlusSign from "@/app/_components/icons/IconPlusSign";
import clsx from "clsx";

export default function GradientIcon({ className }: { className?: string }) {
  return (
    <div
      className={clsx(
        "bg-brand-gradient flex h-10 w-10 items-center justify-center rounded-full",
        className,
      )}
    >
      <div className="flex h-7 w-7 items-center justify-center">
        <IconPlusSign />
      </div>
    </div>
  );
}
