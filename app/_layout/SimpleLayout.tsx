export default function SimpleLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="md:pt-14 lg:mx-auto">{children}</div>;
}
