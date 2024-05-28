import Header from '../ui/header';

export default function Layout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: { date: string };
}) {
  const date = new Date(params.date);
  return (
    <>
      <Header date={date} />
      <main className="flex flex-col p-4 gap-2 items-stretch">{children}</main>
    </>
  );
}
