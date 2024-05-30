import { HaksikTime, HaksikType } from '../lib/types';
import Menu from './menu';

export default function Menus({ date }: { date: Date }) {
  try {
    return (
      <>
        <div className="py-2 text-sm font-medium w-full text-center">아침</div>
        <div className="menu-cards">
          <Menu
            type={HaksikType.HAKSIK}
            date={date}
            time={HaksikTime.BREAKFAST}
          />
        </div>
        <div className="py-2 text-sm font-medium w-full text-center">점심</div>
        <div className="menu-cards">
          <Menu type={HaksikType.HAKSIK} date={date} time={HaksikTime.LUNCH} />
          <Menu type={HaksikType.GYOSIK} date={date} time={HaksikTime.LUNCH} />
        </div>
        <div className="py-2 text-sm font-medium w-full text-center">저녁</div>
        <div className="menu-cards">
          <Menu type={HaksikType.GYOSIK} date={date} time={HaksikTime.DINNER} />
        </div>
        <div className="menu-cards">
          <Menu type={HaksikType.BUNSIK} date={date} time={HaksikTime.ANY} />
        </div>
      </>
    );
  } catch (e) {
    return <div>식단 정보가 없습니다.</div>;
  }
}
