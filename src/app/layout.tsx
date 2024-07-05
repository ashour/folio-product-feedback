import { title } from "@/formatting";
import type { Metadata } from "next";
import { Jost } from "next/font/google";

import "@/app/globals.css";
import ToastContainer from "@/ui/layout/ToastContainer";

const jost = Jost({ subsets: ["latin"], variable: "--font-jost" });

export const metadata: Metadata = {
  title: title("Feedback"),
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
        <ToastContainer />
        {children}
      </body>
    </html>
  );
}
