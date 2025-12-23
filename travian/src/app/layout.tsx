import type { Metadata } from "next";
import { Cairo, Changa } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  variable: "--font-cairo",
  subsets: ["arabic", "latin"],
  display: "swap",
});

const changa = Changa({
  variable: "--font-changa",
  subsets: ["arabic", "latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "ترافيان: إمبراطورية الحروب والتحالفات",
  description:
    "منصة استراتيجية شاملة لتخطيط وبناء إمبراطوريتك في عالم ترافيان مع مرئيات متناسقة وخرائط تكتيكية.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${cairo.variable} ${changa.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
