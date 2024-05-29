import { ChevronRightIcon, LightBulbIcon } from '@heroicons/react/24/outline';
import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

export default function Header({ date }: { date: Date }) {
  const yesterday = new Date(date.getTime() - 24 * 60 * 60 * 1000);
  const tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000);

  return (
    <header className="flex flex-row justify-between p-8 pb-4">
      <h1 className="text-lg font-medium flex flex-row items-center gap-2">
        <LightBulbIcon className="size-6" />
        오밥무?
      </h1>
      <div className="flex flex-row gap-2 items-center">
        <Link href={`/${yesterday.toISOString().slice(0, 10)}`}>
          <ChevronLeftIcon className="size-4" />
        </Link>
        <span>{date.toISOString().slice(0, 10)}</span>
        <Link href={`/${tomorrow.toISOString().slice(0, 10)}`}>
          <ChevronRightIcon className="size-4" />
        </Link>
      </div>
    </header>
  );
}
