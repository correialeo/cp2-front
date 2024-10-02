import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CP2 Front",
  description: "Checkpoint frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}
