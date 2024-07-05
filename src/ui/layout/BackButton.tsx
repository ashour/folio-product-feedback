import Button, { ButtonProps } from "@/ui/Button";
import IconChevronLeft from "@/ui/icons/IconChevronLeft";

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
