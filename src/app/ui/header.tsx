import Link from 'next/link';
import { LightBulbIcon } from '@heroicons/react/24/outline';
import TomorrowButton from './header/tomorrow-button';
import YesterdayButton from './header/yesterday-button';

export default function Header({ date }: { date: Date }) {
  return (
    <header className="flex flex-row justify-between items-center p-2 border-b bg-white border-gray-200 sticky top-0">
      <h1 className="text-lg font-medium pl-4">
        <Link href="/" className="flex flex-row items-center gap-2">
          <LightBulbIcon className="size-6" />
          오밥무?
        </Link>
      </h1>
      <div className="flex flex-row gap-4 items-center p-4 rounded-[1.75rem]">
        <YesterdayButton today={date} />
        <span>{date.toISOString().slice(0, 10)}</span>
        <TomorrowButton today={date} />
      </div>
    </header>
  );
}
