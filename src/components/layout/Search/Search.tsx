'use client';

import clsx from 'clsx';

// Hooks
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (!query) {
      return;
    }

    router.push(query);
  };

  return (
    <form className="flex w-full bg-transparent" onSubmit={(e) => onSubmit(e)}>
      <input
        className="w-full bg-transparent p-4 text-lg font-medium text-neutral-800 placeholder:text-neutral-400 placeholder:antialiased focus:outline-none dark:text-neutral-200 placeholder:dark:text-neutral-600"
        placeholder="Input any number..."
        min={1}
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        type="number"
        name="search-bar"
        id="search-bar"
      />
      <button
        type="submit"
        className={clsx(
          'rounded-lg px-4 py-2 font-bold text-neutral-700 hover:text-neutral-500 dark:text-neutral-400 hover:dark:text-neutral-200',
          {
            ['pointer-events-none !text-neutral-400 dark:!text-neutral-600']: !query,
          }
        )}
      >
        Submit
      </button>
    </form>
  );
};

export default Search;
