import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from "@/components/theme-provider";
import { AsideMenu } from '@/components/aside-menu';
import { HeaderMobile } from '@/components/header-mobile';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'SafeSpace',
  description: 'Lugar seguro no ambiente de trabalho',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} flex min-h-screen w-full`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <AsideMenu />
          <div className='flex flex-col w-full'>
            <HeaderMobile />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}