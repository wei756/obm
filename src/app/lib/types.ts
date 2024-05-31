export type MenuInfo = {
  date: Date;
  menus: MenuItem[];
};

export type MenuItem = {
  menu: string[];
  time: [string, string][];
};

export enum HaksikType {
  HAKSIK = '학생식당',
  GYOSIK = '교직원식당',
  BUNSIK = '분식당',
  PUREUM = '푸름관',
  OREUM1 = '오름관1동',
  OREUM3 = '오름관3동',
}

export enum HaksikTime {
  BREAKFAST = '아침',
  LUNCH = '점심',
  DINNER = '저녁',
  ANY = '아무때나',
}

export const HaksikTimeOrder = {
  [HaksikType.HAKSIK]: {
    [HaksikTime.BREAKFAST]: 0,
    [HaksikTime.LUNCH]: 1,
    [HaksikTime.DINNER]: -1,
    [HaksikTime.ANY]: -1,
  },
  [HaksikType.GYOSIK]: {
    [HaksikTime.BREAKFAST]: -1,
    [HaksikTime.LUNCH]: 0,
    [HaksikTime.DINNER]: 1,
    [HaksikTime.ANY]: -1,
  },
  [HaksikType.BUNSIK]: {
    [HaksikTime.BREAKFAST]: -1,
    [HaksikTime.LUNCH]: -1,
    [HaksikTime.DINNER]: -1,
    [HaksikTime.ANY]: 0,
  },
  [HaksikType.PUREUM]: {
    [HaksikTime.BREAKFAST]: -1,
    [HaksikTime.LUNCH]: 0,
    [HaksikTime.DINNER]: 1,
    [HaksikTime.ANY]: -1,
  },
  [HaksikType.OREUM1]: {
    [HaksikTime.BREAKFAST]: -1,
    [HaksikTime.LUNCH]: 0,
    [HaksikTime.DINNER]: 1,
    [HaksikTime.ANY]: -1,
  },
  [HaksikType.OREUM3]: {
    [HaksikTime.BREAKFAST]: -1,
    [HaksikTime.LUNCH]: 0,
    [HaksikTime.DINNER]: 1,
    [HaksikTime.ANY]: -1,
  },
};
