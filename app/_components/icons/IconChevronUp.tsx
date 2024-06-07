export default function IconChevronUp({
  stroke = "#4661E6",
  className,
}: {
  stroke?: string;
  className?: string;
}) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M2 8L6 4L10 8" stroke={stroke} strokeWidth="2" />
    </svg>
  );
}
