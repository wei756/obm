import { getHaksik, HaksikType } from '../lib/api';
import Header from '../ui/header';
import Menus from '../ui/menus';

export default function Home({ params }: { params: { date: string } }) {
  const date = new Date(params.date);
  return (
    <>
      <Header date={date} />
      <main className="flex flex-col p-4 gap-2 items-stretch">
        <Menus date={date} />
      </main>
    </>
  );
}
