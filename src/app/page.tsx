import Header from './ui/header';
import Menus from './ui/menus';

export default function Home() {
  return (
    <>
      <Header date={new Date()} />
      <main className="flex flex-col p-4 gap-2 items-stretch">
        <Menus date={new Date()} />
      </main>
    </>
  );
}
