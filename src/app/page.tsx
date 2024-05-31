import { MenuProvider } from './ui/context';
import Header from './ui/header';
import Menus from './ui/menus';
import Settings from './ui/settings';

export const revalidate = 3600;

export default function MainPage() {
  const date = new Date();

  return (
    <MenuProvider>
      <Header date={date} />
      <main className="flex flex-col p-4 gap-2 items-stretch">
        <Menus date={date} />
        <Settings />
      </main>
    </MenuProvider>
  );
}
