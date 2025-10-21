import type { Metadata } from "next";
import "./globals.css";
import AppLayout from "@/components/app-layout";
import "@fontsource/audiowide";

export const metadata: Metadata = {
  title: "Skill Ventures",
  description: "Skill Ventures Official Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <AppLayout>{children}</AppLayout>
      </body>
    </html>
  );
}
