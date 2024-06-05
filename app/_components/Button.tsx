import clsx from "clsx";

type ButtonProps = {
  variant?: "purple" | "blue" | "slate" | "danger";
  as?: React.ElementType;
  underline?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
  variant,
  as,
  underline,
  children,
  className,
  ...props
}: ButtonProps) {
  const Component = as || "button";
  return (
    <Component
      className={clsx(
        {
          "text-button flex items-center justify-center gap-1 rounded-10px px-12 py-3 text-center":
            true,
          "bg-purple text-white": variant === "purple",
          "hover:bg-purple-hover": variant === "purple" && !underline,
          "bg-blue text-white ": variant === "blue",
          "hover:bg-blue-hover": variant === "blue" && !underline,
          "bg-slate-600 text-white": variant === "slate",
          "hover:bg-slate-600": variant === "slate" && !underline,
          "bg-danger text-white ": variant === "danger",
          "hover:bg-danger-hover": variant === "danger" && !underline,
          "hover:underline": underline,
        },
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
