"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import { SessionProvider } from "next-auth/react";
import { AuthProvider } from "../context/AuthContext"; // استيراد AuthProvider

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo2.png" />
        <title>Studio Sonterra</title>
        <meta
          name="description"
          content="Studio Sonterra is a design and development studio."
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/* SessionProvider لتوفير جلسات next-auth */}
        <SessionProvider>
          {/* AuthProvider لتوفير حالة تسجيل الدخول الخاصة بك */}
          <AuthProvider>
            {children}
          </AuthProvider>
        </SessionProvider>
      </body>
    </html>
  );
}