import Nav from "./Nav";

export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:pt-14 lg:mx-auto lg:flex lg:max-w-5xl lg:justify-stretch lg:gap-6 lg:px-6">
      <section className="max-md:h-[72px] md:mb-10 lg:min-w-64">
        <Nav />
      </section>
      <section className="md:mx-[5.21%] lg:mx-0 lg:flex-1">
        <section className="h-14 bg-slate-600"></section>
        {children}
      </section>
    </div>
  );
}
