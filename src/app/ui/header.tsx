import { LightBulbIcon } from '@heroicons/react/24/outline';
import TomorrowButton from './header/tomorrow-button';
import YesterdayButton from './header/yesterday-button';

export default function Header({ date }: { date: Date }) {
  return (
    <header className="flex flex-row justify-between p-8 pb-4">
      <h1 className="text-lg font-medium flex flex-row items-center gap-2">
        <LightBulbIcon className="size-6" />
        오밥무?
      </h1>
      <div className="flex flex-row gap-2 items-center">
        <YesterdayButton today={date} />
        <span>{date.toISOString().slice(0, 10)}</span>
        <TomorrowButton today={date} />
      </div>
    </header>
  );
}
