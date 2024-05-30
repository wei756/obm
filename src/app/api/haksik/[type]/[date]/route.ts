import { getHaksik } from '@/app/lib/kumoh/api';
import { HaksikType } from '@/app/lib/types';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(
  request: NextRequest,
  { params }: { params: { type: string; date: string } },
) {
  const date = new Date(params.date);
  if (isNaN(date.getTime())) {
    return NextResponse.json('Invalid date', { status: 400 });
  }

  if (!Object.values(HaksikType).includes(params.type as HaksikType)) {
    return NextResponse.json('Invalid type', { status: 400 });
  }

  const haksik = await getHaksik(date, params.type as HaksikType);

  return NextResponse.json(haksik, { status: 200 });
}
