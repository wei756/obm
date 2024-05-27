import parse from 'node-html-parser';
import { HTMLElement } from 'node-html-parser';
import { MenuInfo, MenuItem } from './types';

export enum HaksikType {
  HAKSIK = '학생식',
  GYOSIK = '교직원식당',
  BUNSIK = '분식당',
}

export const getHaksik = async (
  date: Date,
  type: HaksikType,
): Promise<MenuInfo> => {
  const sikType = {
    [HaksikType.HAKSIK]: 'restaurant01',
    [HaksikType.GYOSIK]: 'restaurant02',
    [HaksikType.BUNSIK]: 'restaurant03',
  };
  const res = await fetch(
    `https://www.kumoh.ac.kr/ko/${sikType[type]}.do?mode=menuList&srDt=${date
      .toISOString()
      .slice(0, 10)}`,
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
    menu: menus.map((li) => li.rawText),
    time: times,
  };
};
