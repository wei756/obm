import Header from './ui/header';
import Menus from './ui/menus';

export const revalidate = 3600;

export default function MainPage() {
  const date = new Date();

  return (
    <>
      <Header date={date} />
      <main className="flex flex-col p-4 gap-2 items-stretch">
        <Menus date={date} />
      </main>
    </>
  );
}
