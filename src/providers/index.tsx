"use client";
import {
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";
import ReduxProvider from "./ReduxProvider";
const queryClient = new QueryClient();

const Providers = ({ children }: ThemeProviderProps) => {
  return (
    <ReduxProvider>
      <QueryClientProvider client={queryClient}>
        <NextThemesProvider attribute="class" defaultTheme="system" enableSystem>
          <SessionProvider>{children}</SessionProvider>
        </NextThemesProvider>
      </QueryClientProvider>
    </ReduxProvider>
  );
};

export default Providers;
