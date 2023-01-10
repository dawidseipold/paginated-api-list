'use client';

import clsx from 'clsx';

// Hooks
import { usePathname } from 'next/navigation';

// Components
import Link from 'next/link';

// Icons
import { IconHome2 } from '@tabler/icons';

const HomeButton = () => {
  const path = usePathname();

  return (
    <Link className="group rounded-full p-2" href="/">
      <IconHome2
        size={28}
        className={clsx(
          'text-neutral-400 group-hover:text-indigo-800/75 dark:text-neutral-500 group-hover:dark:text-indigo-500/50',
          {
            ['!text-indigo-500/75 group-hover:!text-indigo-700/75']: path === '/',
          }
        )}
      />
    </Link>
  );
};

export default HomeButton;
