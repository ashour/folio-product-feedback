import type { Metadata } from "next";
import { Jost } from "next/font/google";
import Nav from "./_components/layout/Nav";
import "./globals.css";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });

export const metadata: Metadata = {
  title: "Feedback | Habitaur",
  description: "A Next.js demo for collecting feedback from users.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`bg-slate-50 text-slate-600 ${jost.className}`}>
        <div className="md:pt-14 lg:mx-auto lg:flex lg:max-w-5xl lg:justify-stretch lg:gap-6 lg:px-6">
          <div className="md:mb-10 lg:min-w-64">
            <Nav />
          </div>
          <div className="md:mx-[5.21%] lg:mx-0  lg:flex-1">{children}</div>
        </div>
      </body>
    </html>
  );
}
