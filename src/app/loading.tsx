import MenuCard from './ui/menu-card';
import { SectionHeader } from './ui/menus/filtered-menus/menu-section';

export default function Loading() {
  return (
    <>
      <SectionHeader>아침</SectionHeader>
      <div className="menu-cards">
        <MenuCardSkeleton />
      </div>
      <SectionHeader>점심</SectionHeader>
      <div className="menu-cards">
        <MenuCardSkeleton />
      </div>
      <SectionHeader>저녁</SectionHeader>
      <div className="menu-cards">
        <MenuCardSkeleton />
      </div>
      <SectionHeader>분식당</SectionHeader>
      <div className="menu-cards">
        <MenuCardSkeleton />
      </div>
    </>
  );
}

function MenuCardSkeleton() {
  return <MenuCard name="로딩중..." menu={[]} />;
}
