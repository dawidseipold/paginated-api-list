'use client';

// Components
import * as Dialog from '@radix-ui/react-dialog';
import { IconX } from '@tabler/icons';

// Types
import type { Element } from '../../../types/api';

interface IProps {
  data: any;
}

const Table = ({ data }: IProps) => {
  const elements: Element[] = Array.isArray(data) ? data : [data];

  const setOpacity = (hex: string, alpha: number) =>
    `${hex}${Math.floor(alpha * 255)
      .toString(16)
      .padStart(2, '0')}`;

  return (
    <div className="flex flex-col gap-y-4">
      <div className="grid w-full grid-cols-6 gap-x-4 px-4 font-bold tracking-wide">
        <span className="col-span-1">ID</span>
        <span className="col-span-3">Name</span>
        <span className="col-span-2">Year</span>
      </div>

      <ul className="flex flex-col gap-y-2">
        {elements.map((element) => (
          <Dialog.Root key={element.id}>
            <Dialog.Trigger>
              <li
                className="grid w-full cursor-pointer grid-cols-6 gap-x-4 rounded-lg from-white/10 to-white/10 p-4 text-left hover:bg-gradient-to-r"
                style={{ backgroundColor: setOpacity(element.color, 0.25) }}
              >
                <span className="col-span-1">{element.id}</span>
                <span className="col-span-3">{element.name}</span>
                <span className="col-span-2">{element.year}</span>
              </li>
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className="fixed h-screen w-screen bg-black/50" />

              <Dialog.Content className="absolute inset-1/2 h-max w-full max-w-lg -translate-x-1/2 -translate-y-1/2 rounded-xl bg-white/75 p-4 shadow-xl backdrop-blur dark:bg-black/75">
                <div className="flex items-center gap-x-4">
                  <span
                    className="flex h-16 w-16 rounded-lg"
                    style={{ backgroundColor: element.color }}
                  />

                  <div className="flex flex-col">
                    <h2 className="text-lg font-bold capitalize text-neutral-800 antialiased dark:text-neutral-200">
                      {element.name}
                    </h2>

                    <span className="text-neutral-800 dark:text-neutral-600">
                      {element.color} / {element.pantone_value}
                    </span>
                  </div>

                  <span className="ml-auto mr-16 font-semibold text-neutral-800 antialiased dark:text-neutral-200">
                    {element.year}
                  </span>

                  <Dialog.Close className="absolute top-2 right-2 self-start p-2 text-neutral-500 dark:text-neutral-700">
                    <IconX />
                  </Dialog.Close>
                </div>
              </Dialog.Content>
            </Dialog.Portal>
          </Dialog.Root>
        ))}
      </ul>
    </div>
  );
};

export default Table;
