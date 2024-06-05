import clsx from "clsx";

type ButtonProps = {
  variant?: "purple" | "blue" | "slate" | "danger";
  as?: React.ElementType;
  underline?: boolean;
  slim?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

export default function Button({
  variant,
  as = "button",
  underline = false,
  slim = false,
  children,
  className,
  ...props
}: ButtonProps) {
  const Component = as;
  return (
    <Component
      className={clsx(
        {
          "flex items-center justify-center gap-1 rounded-10px py-3 text-center text-button":
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
          "px-6": !slim,
          "px-0": slim,
        },
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
