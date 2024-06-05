export default function IconChevronLeft({ stroke }: { stroke?: string }) {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M8 10L4 6L8 2"
        strokeWidth="2"
        stroke={stroke ? stroke : "#4661E6"}
      />
    </svg>
  );
}
