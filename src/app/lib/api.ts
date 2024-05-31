import { HaksikType, MenuInfo } from './types';

export const getHaksik = async (
  date: Date,
  type: HaksikType,
): Promise<MenuInfo> => {
  const res = await fetch(
    `${process.env.URL}/api/haksik/${type}/${date.toISOString().split('T')[0]}`,
    { cache: 'force-cache', next: { revalidate: 3600 } },
  );
  if (!res.ok) {
    return {
      date: new Date(),
      menus: [
        {
          menu: [],
          time: [
            ['string', 'string'],
            ['string', 'string'],
          ],
        },
        {
          menu: [],
          time: [
            ['string', 'string'],
            ['string', 'string'],
          ],
        },
      ],
    };
    //throw new Error('Failed to fetch haksik' + date.toISOString() + type);
  }
  return res.json();
};
