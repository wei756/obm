import { getHaksik, HaksikType } from '../lib/api';
import MenuCard from './menu-card';

export default async function Menus({ date }: { date: Date }) {
  try {
    const haksik = await getHaksik(date, HaksikType.HAKSIK);
    const gyosik = await getHaksik(date, HaksikType.GYOSIK);
    const bunsik = await getHaksik(date, HaksikType.BUNSIK);
    return (
      <>
        <div className="py-2 text-sm font-medium w-full text-center">아침</div>
        <div className="flex flex-row overflow-x-auto gap-2 w-full">
          <MenuCard
            name="학생식당"
            time={haksik.menus[0].time}
            menu={haksik.menus[0].menu}
          />
        </div>
        <div className="py-2 text-sm font-medium w-full text-center">점심</div>
        <div className="flex flex-row overflow-x-auto gap-2 w-full">
          <MenuCard
            name="학생식당"
            time={haksik.menus[1].time}
            menu={haksik.menus[1].menu}
          />
          <MenuCard
            name="교직원식당"
            time={gyosik.menus[0].time}
            menu={gyosik.menus[0].menu}
          />
        </div>
        <div className="py-2 text-sm font-medium w-full text-center">저녁</div>
        <div className="flex flex-row overflow-x-auto gap-2 w-full">
          <MenuCard
            name="교직원식당"
            time={gyosik.menus[1].time}
            menu={gyosik.menus[1].menu}
          />
        </div>
        <div className="flex flex-row overflow-x-auto gap-2 w-full">
          <MenuCard
            name="분식당"
            time={bunsik.menus[0].time}
            menu={bunsik.menus[0].menu}
          />
        </div>
      </>
    );
  } catch (e) {
    return <div>식단 정보가 없습니다.</div>;
  }
}
