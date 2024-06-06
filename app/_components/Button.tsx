import clsx from "clsx";

type ButtonProps = {
  variant: "purple" | "blue" | "slate" | "danger" | "ghost";
  as?: React.ElementType;
  underline?: boolean;
  slim?: boolean;
  className?: string;
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

const colorVariants = {
  ghost: {
    default: "bg-transparent text-slate-500",
    hover: "hover:bg-transparent",
  },
  purple: {
    default: "bg-purple text-white",
    hover: "hover:bg-purple-hover",
  },
  blue: {
    default: "bg-blue text-white",
    hover: "hover:bg-blue-hover",
  },
  slate: {
    default: "bg-slate-600 text-white",
    hover: "hover:bg-slate-hover",
  },
  danger: {
    default: "bg-danger text-white",
    hover: "hover:bg-danger-hover",
  },
};

export default function Button({
  variant,
  as = "button",
  underline = false,
  slim = false,
  children,
  className,
  disabled,
  ...props
}: ButtonProps) {
  const Component = as;
  return (
    <Component
      className={clsx(
        {
          "flex items-center justify-center gap-1 rounded-10px py-3 text-center text-button":
            true,
          [colorVariants[variant]["default"]]: !disabled,
          [colorVariants[variant]["hover"]]: !underline,
          "bg-slate-100 text-slate-500": disabled,
          "hover:underline": underline && !disabled,
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
