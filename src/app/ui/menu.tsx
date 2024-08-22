import { Suspense } from 'react';
import { getHaksik } from '../lib/api';
import { HaksikTime, HaksikTimeOrder, HaksikType } from '../lib/types';
import MenuCard from './menu-card';

export interface Props {
  date: Date;
  type: HaksikType;
  time: HaksikTime;
}
export default async function MenuContainer(props: Props) {
  return (
    <Suspense fallback={<MenuCard name={props.type} menu={['로딩중...']} />}>
      <Menu {...props} />
    </Suspense>
  );
}

async function Menu(props: Props) {
  const haksik = await getHaksik(props.date, props.type);

  const menuOrder = HaksikTimeOrder[props.type][props.time];
  if (menuOrder === -1 || haksik.menus.length === 0 || !haksik.menus[menuOrder]) {
    return <MenuCard name={props.type} menu={['식단 정보가 없습니다.']} />;
  }
  return (
    <MenuCard
      name={props.type}
      time={haksik.menus[menuOrder].time}
      menu={haksik.menus[menuOrder].menu}
    />
  );
}
