import '../src/styles/globals.css';

import clsx from 'clsx';

import { Inter } from '@next/font/google';

// Providers
import { ServerThemeProvider } from '@wits/next-themes';

// Components
import Search from '../src/components/layout/Search';
import Link from 'next/link';
import HomeButton from '../src/components/utlity/HomeButton';
import ThemeSwitcher from '../src/components/utlity/ThemeSwitcher/ThemeSwitcher';

// Types
interface IProps {
  children: React.ReactNode;
}

const inter = Inter({ subsets: ['latin'] });

const RootLayout = async ({ children }: IProps) => {
  return (
    <ServerThemeProvider attribute="class">
      <html lang="en">
        <head />

        <body
          className={clsx(
            'h-screen bg-gradient-to-t from-indigo-900/50 via-pink-900/25 to-white dark:from-indigo-900/25 dark:via-indigo-900/25 dark:to-black',
            inter.className
          )}
        >
          <div className="absolute inset-1/2 h-max w-full max-w-2xl -translate-x-1/2 -translate-y-1/2 rounded-2xl bg-white/40 shadow backdrop-blur-sm dark:bg-black/50 dark:backdrop-blur-lg">
            <header className="flex w-full items-center justify-between border-b-[1px] border-black/5 px-4 dark:border-white/5">
              <nav className="absolute bottom-[calc(100%+0.5rem)] right-0 flex w-full justify-between gap-x-2">
                <HomeButton />

                <ThemeSwitcher />
              </nav>
              <Search />
            </header>

            <main className="p-4">{children}</main>
          </div>

          <footer className="absolute bottom-4 w-full text-center text-sm text-neutral-800 drop-shadow dark:text-neutral-400">
            Created by{' '}
            <Link
              className="font-semibold hover:underline"
              target="_blank"
              href="https://github.com/dawidseipold"
            >
              Dawid Seipold
            </Link>
          </footer>
        </body>
      </html>
    </ServerThemeProvider>
  );
};

export default RootLayout;
