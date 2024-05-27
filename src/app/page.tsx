import { HaksikType, getHaksik } from './lib/api';
import MenuCard from './ui/menu-card';

export default async function Home() {
  const haksik = await getHaksik(new Date(), HaksikType.HAKSIK);
  const gyosik = await getHaksik(new Date(), HaksikType.GYOSIK);
  const bunsik = await getHaksik(new Date(), HaksikType.BUNSIK);

  return (
    <main className="flex flex-col p-4 gap-2 items-stretch">
      <MenuCard
        name="아침"
        time={haksik.menus[0].time}
        menu={haksik.menus[0].menu}
      />
      <div className="flex flex-row overflow-x-auto gap-2">
        <MenuCard
          name="학생식당 점심"
          time={haksik.menus[1].time}
          menu={haksik.menus[1].menu}
        />
        <MenuCard
          name="교직원식당 점심"
          time={gyosik.menus[0].time}
          menu={gyosik.menus[0].menu}
        />
      </div>
      <MenuCard
        name="교직원식당 저녁"
        time={gyosik.menus[1].time}
        menu={gyosik.menus[1].menu}
      />
      <MenuCard
        name="분식당"
        time={bunsik.menus[0].time}
        menu={bunsik.menus[0].menu}
      />
    </main>
  );
}
