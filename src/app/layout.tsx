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
    "Robert Pławski – doświadczony software developer z Opola, oferujący usługi freelance oraz współpracę na stałe. Specjalizuję się w tworzeniu nowoczesnych aplikacji webowych i backendowych.",
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
      "Freelance software developer z Opola, specjalizujący się w web i backend. Dostępny do współpracy i projektów freelance.",
    url: "https://robertplawski.pl/",
    siteName: "Robert Pławski - Portfolio",
    images: [
      {
        url: "https://robertplawski.pl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Robert Pławski - software developer",
      },
    ],
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
