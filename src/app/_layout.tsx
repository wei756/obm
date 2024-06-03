import { MenuProvider } from './ui/context';
import Header from './ui/header';

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MenuProvider>
      <Header />
      <main className="flex flex-col p-4 gap-2 items-stretch">{children}</main>
    </MenuProvider>
  );
}
