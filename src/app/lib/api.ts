import { HaksikType, MenuInfo } from './types';

export const getHaksik = async (
  date: Date,
  type: HaksikType,
): Promise<MenuInfo> => {
  const res = await fetch(
    `/api/haksik/${type}/${date.toISOString().split('T')[0]}`,
    { cache: 'force-cache', next: { revalidate: 3600 } },
  );
  if (!res.ok) {
    throw new Error('Failed to fetch haksik' + date.toISOString() + type);
  }
  return res.json();
};
