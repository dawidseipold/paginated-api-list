'use client';

import clsx from 'clsx';

// Hooks
import { useTheme } from '@wits/next-themes';
import { useEffect, useState } from 'react';

// Icons
import { IconDeviceDesktop, IconMoon, IconSun } from '@tabler/icons';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  }, []);

  if (loading) {
    return <div></div>;
  }

  return (
    <ul className="flex gap-x-4 rounded-full bg-white/75 px-4 py-2 dark:bg-black/75">
      <li onClick={() => setTheme('dark')}>
        <IconMoon
          size={28}
          className={clsx(
            'cursor-pointer text-neutral-400 hover:text-indigo-800/75 dark:text-neutral-500 hover:dark:text-indigo-500/50',
            {
              ['!text-indigo-500/75']: theme === 'dark',
            }
          )}
        />
      </li>

      <li onClick={() => setTheme('system')}>
        <IconDeviceDesktop
          size={28}
          className={clsx(
            'cursor-pointer text-neutral-400 hover:text-indigo-800/75 dark:text-neutral-500 hover:dark:text-indigo-500/50',
            {
              ['!text-indigo-500/75']: theme === 'system',
            }
          )}
        />
      </li>

      <li onClick={() => setTheme('light')}>
        <IconSun
          size={28}
          className={clsx(
            'cursor-pointer text-neutral-400 hover:text-indigo-800/75 dark:text-neutral-500 hover:dark:text-indigo-500/50',
            {
              ['!text-indigo-500/75']: theme === 'light',
            }
          )}
        />
      </li>
    </ul>
  );
};

export default ThemeSwitcher;
