'use client';

import { HaksikTime, HaksikTimeOrder, HaksikType } from '@/app/lib/types';
import { useMenuValues } from '../../context';
import { useEffect, useState } from 'react';
import MenuCard from '../../menu-card';

export interface Props {
  time: HaksikTime;
  title?: string;
  menus: {
    type: HaksikType;
    time: HaksikTime;
    element: JSX.Element;
  }[];
}
export default function MenuSection(props: Props) {
  const { displaySikdang } = useMenuValues();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  const getMenu = (type: HaksikType, time: HaksikTime) => {
    return props.menus.find((menu) => menu.type === type && menu.time === time)
      ?.element;
  };

  const openedSikdangAt = (time: HaksikTime) => {
    return Object.values(HaksikType).filter(
      (type) => HaksikTimeOrder[type][time] !== -1 && displaySikdang[type],
    );
  };

  const showAt = (time: HaksikTime) => {
    return openedSikdangAt(time).length > 0;
  };

  const menusAt = (time: HaksikTime) => {
    return openedSikdangAt(time).map((type) => getMenu(type, time));
  };

  if (!mounted) {
    return (
      <>
        <SectionHeader>{props.title ?? props.time}</SectionHeader>
        <div className="menu-cards">
          <MenuCard name="로딩중..." menu={[]} />
        </div>
      </>
    );
  }

  return (
    showAt(props.time) && (
      <>
        <SectionHeader>{props.title ?? props.time}</SectionHeader>
        <div className="menu-cards">{menusAt(props.time)}</div>
      </>
    )
  );
}

export function SectionHeader({ children }: { children: React.ReactNode }) {
  return <div className="section-time">{children}</div>;
}
