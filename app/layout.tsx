import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hartfolio",
  description: "Ha young's porfolio, Hartfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className="antialiased font-Pretendard-Light">{children}</body>
    </html>
  );
}
