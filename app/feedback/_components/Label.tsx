import clsx from "clsx";

type LabelProps = {
  children: React.ReactNode;
  component?: React.ElementType;
  className?: string;
};

export default function Label({
  children,
  component: Component = "label",
  className,
  ...props
}: LabelProps & React.LabelHTMLAttributes<HTMLLabelElement>) {
  return (
    <Component
      className={clsx(
        "block cursor-pointer text-body-2 font-bold text-slate-600",
        className,
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
