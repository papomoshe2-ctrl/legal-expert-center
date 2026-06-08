import type { Metadata } from "next";
import { Heebo, Inter } from "next/font/google";
import "./globals.css";

const heebo = Heebo({
  subsets: ["hebrew", "latin"],
  variable: "--font-heebo",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "המרכז לחוות דעת משפטיות ומומחים בישראל",
  description:
    "המרכז המוביל לחוות דעת קרימינולוגיות ומשפטיות בישראל. סתיו אווה פפו, קרימינולוגית קלינית בכירה.",
  keywords:
    "חוות דעת משפטית, קרימינולוגיה קלינית, הפחתת עונש, הערכת מסוכנות, תוכנית שיקום",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="he"
      dir="rtl"
      className={`${heebo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-heebo">{children}</body>
    </html>
  );
}
