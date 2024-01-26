import 'reflect-metadata';

import { Inter } from "next/font/google";
import "./globals.css";

import '@/@server/shared/container/index';
import { cn } from '@/lib/utils';
import ReduxProvider from '@/providers/ReduxProvider';
import { Metadata } from 'next';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quizplatform",
  description: "Generate by create next app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, "antialiased min-h-screen pt-16")}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
