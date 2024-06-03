import Layout from './_layout';
import Menus from './ui/menus';
import Settings from './ui/settings';

export const revalidate = 3600;

export default function MainPage({
  searchParams,
}: {
  searchParams: { date: string };
}) {
  const date = new Date(searchParams.date || Date.now());
  return (
    <Layout>
      <Menus date={date} />
      <Settings />
    </Layout>
  );
}
