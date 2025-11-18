import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./footer/page";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ajay Kumar | Full Stack Developer Portfolio",
  description:
    "Portfolio of Ajay Kumar, a Full Stack Developer skilled in MERN Stack, JavaScript, React, Next.js, MySQL, and modern web development. Explore projects, experience, skills, and contact information.",
  keywords: [
    "Ajay Kumar",
    "Full Stack Developer",
    "MERN Developer",
    "React Developer",
    "Next.js Developer",
    "Web Developer Portfolio",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
  ],
  authors: [{ name: "Ajay Kumar" }],
  creator: "Ajay Kumar",
  publisher: "Ajay Kumar",
  openGraph: {
    title: "Ajay Kumar | Full Stack Developer Portfolio",
    description:
      "Showcasing Ajay Kumar's skills, experience, and projects in modern full-stack development.",
    url: "https://your-portfolio-url.com",
    siteName: "Ajay Kumar Portfolio",
    images: [
      {
        url: "/og-image.png", 
        width: 1200,
        height: 630,
        alt: "Ajay Kumar Portfolio Preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
