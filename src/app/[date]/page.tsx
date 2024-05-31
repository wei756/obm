import Menus from '../ui/menus';
import Settings from '../ui/settings';

export default function Page({ params }: { params: { date: string } }) {
  const date = new Date(params.date);
  return (
    <>
      <Menus date={date} />
      <Settings />
    </>
  );
}
