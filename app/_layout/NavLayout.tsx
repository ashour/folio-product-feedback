import Nav from "./Nav";

export default function NavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:pt-14 lg:mx-auto lg:flex lg:max-w-5xl lg:justify-stretch lg:gap-6 lg:px-6">
      <div className="md:mb-10 lg:min-w-64">
        <Nav />
      </div>
      <div className="md:mx-[5.21%] lg:mx-0 lg:flex-1">{children}</div>
    </div>
  );
}
