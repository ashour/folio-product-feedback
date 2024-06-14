import Button from "../_components/Button";
import IconChevronLeft from "../_components/icons/IconChevronLeft";

export default function BtnBack({ onClick }: { onClick?: () => void }) {
  return (
    <Button variant="ghost" slim underline onClick={onClick}>
      <IconChevronLeft />
      <span className="text-body-3 font-bold text-slate-500">Go Back</span>
    </Button>
  );
}
