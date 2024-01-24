import 'reflect-metadata';

import { Inter } from "next/font/google";
import "./globals.css";

import '@/@server/shared/container/index';
import ReduxProvider from '@/providers/ReduxProvider';

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
