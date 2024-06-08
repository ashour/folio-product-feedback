import Link from "next/link";
import Button from "../_components/Button";
import IconChevronLeft from "../_components/icons/IconChevronLeft";

export default function BtnBack({ backUrl = "/" }: { backUrl?: string }) {
  return (
    <Button variant="ghost" slim underline as={Link} href={backUrl}>
      <IconChevronLeft />
      <span className="text-body-3 font-bold text-slate-500">Go Back</span>
    </Button>
  );
}
