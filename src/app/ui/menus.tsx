import { HaksikTime, HaksikType } from '../lib/types';
import Menu from './menu';
import FilteredMenus from './menus/filtered-menus';

export default function Menus({ date }: { date: Date }) {
  try {
    const menus = Object.values(HaksikType).flatMap((type) => {
      return Object.values(HaksikTime).map((time) => {
        return {
          type,
          time,
          element: (
            <Menu key={type + time} type={type} date={date} time={time} />
          ),
        };
      });
    });
    return (
      <FilteredMenus menus={menus} />
    );
  } catch (e) {
    return <div>식단 정보가 없습니다.</div>;
  }
}
