'use client';

import clsx from 'clsx';

// Hooks
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

// Components
import Link from 'next/link';

// Icons
import { IconArrowLeft, IconArrowRight } from '@tabler/icons';

interface IProps {
  page: number;
  pages: number;
}

const Pagination = ({ page, pages }: IProps) => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState<number>(page);

  let number = 0;

  const changePage = (action: 'increment' | 'decrement') => {
    if (action === 'increment') {
      setCurrentPage((prev) => (prev < pages ? prev + 1 : prev));
    }

    if (action === 'decrement') {
      setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev));
    }
  };

  useEffect(() => {
    router.replace(`/?page=${currentPage}`);
  }, [currentPage]);

  return (
    <div className="flex items-center justify-between gap-x-4 p-4 pb-0">
      <div
        className={clsx(
          'cursor-pointer rounded-full p-2 text-neutral-800 hover:bg-black/10 dark:text-neutral-200 hover:dark:bg-white/10',
          {
            ['pointer-events-none !text-neutral-400 dark:!text-neutral-700']: currentPage === 1,
          }
        )}
      >
        <IconArrowLeft onClick={() => changePage('decrement')} />
      </div>

      <div className="flex gap-x-4">
        {Array.from({ length: pages }).map((_, index) => {
          console.log(number + 1);

          return (
            <Link key={index} href={`/?page=${number + 1}`}>
              <span
                className={clsx(
                  'cursor-pointer rounded-full p-2 font-semibold text-neutral-800 hover:bg-black/10 dark:text-neutral-200 hover:dark:bg-white/10',
                  {
                    ['bg-indigo-800/25 dark:bg-indigo-500/25']: number + 1 === page,
                  }
                )}
              >
                {++number}
              </span>
            </Link>
          );
        })}
      </div>

      <div
        className={clsx(
          'cursor-pointer rounded-full p-2 text-neutral-800 hover:bg-black/10 dark:text-neutral-200 hover:dark:bg-white/10',
          {
            ['pointer-events-none !text-neutral-400 dark:!text-neutral-700']: currentPage === pages,
          }
        )}
      >
        <IconArrowRight onClick={() => changePage('increment')} />
      </div>
    </div>
  );
};

export default Pagination;
