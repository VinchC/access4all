/* eslint-disable react/no-children-prop */
import Head from "@/components/Head";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head />
      <body className="bodyClass">{children}</body>
    </html>
  );
}
