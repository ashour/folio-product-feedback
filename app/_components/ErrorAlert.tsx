export default function ErrorAlert({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-5px bg-danger px-3 py-2 text-body-1 text-white">
      <strong>Error:</strong> {children}
    </div>
  );
}
