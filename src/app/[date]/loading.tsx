export default function Loading() {
  return (
    <>
      <div className="py-2 text-sm font-medium w-full text-center">아침</div>
      <MenuCardSkeleton />
      <div className="py-2 text-sm font-medium w-full text-center">점심</div>
      <div className="flex flex-row overflow-x-auto gap-2">
        <MenuCardSkeleton />
        <MenuCardSkeleton />
      </div>
      <div className="py-2 text-sm font-medium w-full text-center">저녁</div>
      <MenuCardSkeleton />
    </>
  );
}

function MenuCardSkeleton() {
  return (
    <div className="menu-card flex flex-col gap-4 p-4 bg-gray-200 rounded-2xl grow h-48">
      <div className="flex flex-row gap-2">
        <span className="text-sm font-medium w-max">로딩중...</span>
      </div>
      <ul className="flex flex-col gap-1"></ul>
    </div>
  );
}
