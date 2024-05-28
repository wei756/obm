import { getHaksik, HaksikType } from '../lib/api';
import Menus from '../ui/menus';

export default function Page({ params }: { params: { date: string } }) {
  const date = new Date(params.date);
  return <Menus date={date} />;
}
