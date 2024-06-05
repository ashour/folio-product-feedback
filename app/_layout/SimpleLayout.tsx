import BtnBack from "./BtnBack";

export default function SimpleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <section className="p-6">
      <div className="mb-6 flex h-10 items-center">
        <BtnBack />
      </div>
      {children}
    </section>
  );
}
