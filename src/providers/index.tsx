'use client';

import { type ThemeProviderProps } from 'next-themes/dist/types';

import NextSessionProvider from '@/providers/NextSessionProvider';
import NextThemesProvider from '@/providers/NextThemesProvider';
import ReactQueryProvider from '@/providers/ReactQueryProvider';
import ReduxProvider from '@/providers/ReduxProvider';

const Providers = ({ children }: ThemeProviderProps) => {
  return (
    <ReduxProvider>
      <ReactQueryProvider>
        <NextThemesProvider>
          <NextSessionProvider>{children}</NextSessionProvider>
        </NextThemesProvider>
      </ReactQueryProvider>
    </ReduxProvider>
  );
};

export default Providers;
