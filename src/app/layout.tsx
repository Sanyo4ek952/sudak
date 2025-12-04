import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Container } from "@/components/layout/container";

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
  title: "Sudoq Guide — тёплый турпортал Судака",
  description: "Маршруты, места и уютное жильё для путешествия по Судаку (Крым)",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="flex min-h-screen flex-col">
          <Header />
          <main className="flex-1 py-8 md:py-12">
            <Container>
              <div className="main-shell p-6 md:p-8 lg:p-10">{children}</div>
            </Container>
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
