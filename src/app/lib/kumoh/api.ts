import parse from 'node-html-parser';
import { HTMLElement } from 'node-html-parser';
import { HaksikType, MenuInfo, MenuItem } from '../types';

export const getHaksik = async (
  date: Date,
  type: HaksikType,
): Promise<MenuInfo> => {
  const baseUrl = {
    [HaksikType.HAKSIK]: 'https://www.kumoh.ac.kr/ko',
    [HaksikType.GYOSIK]: 'https://www.kumoh.ac.kr/ko',
    [HaksikType.BUNSIK]: 'https://www.kumoh.ac.kr/ko',
    [HaksikType.PUREUM]: 'https://dorm.kumoh.ac.kr/dorm',
    [HaksikType.OREUM1]: 'https://dorm.kumoh.ac.kr/dorm',
    [HaksikType.OREUM3]: 'https://dorm.kumoh.ac.kr/dorm',
  };
  const sikType = {
    [HaksikType.HAKSIK]: 'restaurant01',
    [HaksikType.GYOSIK]: 'restaurant02',
    [HaksikType.BUNSIK]: 'restaurant04',
    [HaksikType.PUREUM]: 'restaurant_menu01',
    [HaksikType.OREUM1]: 'restaurant_menu02',
    [HaksikType.OREUM3]: 'restaurant_menu03',
  };

  const dayOffset = (date.getDay() + 6) % 7;

  const newDate = new Date(date.getTime() - dayOffset * 24 * 60 * 60 * 1000);

  const res = await fetch(
    `${baseUrl[type]}/${sikType[type]}.do?mode=menuList&srDt=${newDate
      .toISOString()
      .slice(0, 10)}`,
    { cache: 'force-cache', next: { revalidate: 3600 } },
  ).then((res) => res.text());
  const content = parse(res);

  const table = content.querySelector('table.smu-table');

  const today = table?.querySelectorAll('thead > tr > th').findIndex((th) => {
    return th.rawText.includes(`.${('0' + date.getDate()).slice(-2)})`);
  });

  if (today === undefined || today === -1) {
    throw new Error('급식 정보가 없습니다.');
  }

  const menuLi = table?.querySelectorAll(
    `tbody > tr > td:nth-child(${today + 1}) > ul`,
  );

  return {
    date,
    menus: menuLi?.map(parseMenu) ?? [],
  };
};

const parseMenu = (el: HTMLElement): MenuItem => {
  const timeRegex = /^\d{1,2}:\d{1,2}~\d{1,2}:\d{1,2}$/;

  const menuLi = el.querySelectorAll('li');

  const times =
    menuLi
      ?.filter((li) => li.rawText.trim().match(timeRegex))
      .map((li) => li.rawText.trim().split('~', 2) as [string, string]) ?? [];

  const menus =
    menuLi
      ?.filter((li) => !li.rawText.trim().match(timeRegex))
      .filter((li) => li.rawText !== '*재학생만 해당') ?? [];

  return {
    menu: menus.map((li) => li.rawText.replaceAll('&amp;', '&')),
    time: times,
  };
};
