import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Robert Pławski – Freelance Software Developer",
  description:
    "Software developer z Opola, oferujący usługi freelance oraz współpracę na stałe, specjalizujący się w technologiach webowych. ",
  keywords: [
    "Robert Pławski",
    "software developer",
    "freelance developer",
    "web developer",
    "backend developer",
    "programista",
    "software engineer",
    "fullstack developer",
    "JavaScript",
    "Node.js",
    "React",
    "TypeScript",
    "Opole",
    "Opolskie",
    "Polska",
  ],
  authors: [{ name: "Robert Pławski" }],
  openGraph: {
    title: "Robert Pławski – Software Developer",
    description:
      "Software developer z Opola, specjalizujący się w technologiach webowych. Dostępny do współpracy i projektów freelance.",
    url: "https://robertplawski.pl/",
    siteName: "Robert Pławski - Portfolio",
    locale: "pl_PL",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pl">
      <meta name="darkreader-lock" />
      <body
        className={`font-sans ${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden `}
      >
        {children}
      </body>
    </html>
  );
}
