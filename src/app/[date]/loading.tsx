import MenuCard from '../ui/menu-card';

export default function Loading() {
  return (
    <>
      <div className="py-2 text-sm font-medium w-full text-center">아침</div>
      <div className="menu-cards">
        <MenuCardSkeleton />
      </div>
      <div className="py-2 text-sm font-medium w-full text-center">점심</div>
      <div className="menu-cards">
        <MenuCardSkeleton />
      </div>
      <div className="py-2 text-sm font-medium w-full text-center">저녁</div>
      <div className="menu-cards">
        <MenuCardSkeleton />
      </div>
      <div className="py-2 text-sm font-medium w-full text-center">분식당</div>
      <div className="menu-cards">
        <MenuCardSkeleton />
      </div>
    </>
  );
}

function MenuCardSkeleton() {
  return <MenuCard name="로딩중..." menu={[]} />;
}
