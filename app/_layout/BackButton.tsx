import Button, { ButtonProps } from "../_components/Button";
import IconChevronLeft from "../_components/icons/IconChevronLeft";

export default function BackButton(
  props: Omit<ButtonProps, "children" | "variant" | "slim" | "underline">,
) {
  return (
    <Button variant="ghost" slim underline {...props}>
      <IconChevronLeft />
      <span className="text-body-3 font-bold text-slate-500">Go Back</span>
    </Button>
  );
}
