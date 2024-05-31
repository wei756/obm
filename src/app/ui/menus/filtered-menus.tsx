import { HaksikTime, HaksikType } from '@/app/lib/types';
import MenuSection from './filtered-menus/menu-section';

export interface Props {
  menus: {
    type: HaksikType;
    time: HaksikTime;
    element: JSX.Element;
  }[];
}

export default function FilteredMenus({ menus }: Props) {
  return (
    <>
      <MenuSection time={HaksikTime.BREAKFAST} menus={menus} />
      <MenuSection time={HaksikTime.LUNCH} menus={menus} />
      <MenuSection time={HaksikTime.DINNER} menus={menus} />
      <MenuSection time={HaksikTime.ANY} menus={menus} title="분식당" />
    </>
  );
}
