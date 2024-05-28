import Link from 'next/link';

export default function Header({ date }: { date: Date }) {
  const yesterday = new Date(date.getTime() - 24 * 60 * 60 * 1000);
  const tomorrow = new Date(date.getTime() + 24 * 60 * 60 * 1000);
  return (
    <header className="flex flex-row justify-between p-8 pb-4">
      <h1 className="text-lg font-medium">오밥무?</h1>
      <div className="flex flex-row gap-2">
        <Link href={`/${yesterday.toISOString().slice(0, 10)}`}>◀</Link>
        <span>{date.toISOString().slice(0, 10)}</span>
        <Link href={`/${tomorrow.toISOString().slice(0, 10)}`}>▶</Link>
      </div>
    </header>
  );
}
