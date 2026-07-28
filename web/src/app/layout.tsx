import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { Agentation } from "agentation";
import "./globals.css";

// Storyframe's Figma file uses "Google Sans", a proprietary font not
// available as a webfont. Plus Jakarta Sans is the closest open substitute
// (same geometric-grotesque proportions and weight range).
const sans = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Storyframe (prototype)",
  description: "UI-only prototype of the Storyframe product flow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-bg text-primary font-sans">
        {children}
        {process.env.NODE_ENV === "development" && <Agentation />}
      </body>
    </html>
  );
}
