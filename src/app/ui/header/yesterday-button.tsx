'use client';

import { ChevronLeftIcon } from '@heroicons/react/24/outline';
import { sendGAEvent } from '@next/third-parties/google';
import Link from 'next/link';

export default function YesterdayButton({ today }: { today: Date }) {
  const yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000);
  return (
    <Link
      href={`/${yesterday.toISOString().slice(0, 10)}`}
      onClick={() =>
        sendGAEvent({ event: 'buttonClicked', value: 'goto-yesterday' })
      }
    >
      <ChevronLeftIcon className="size-4" />
    </Link>
  );
}
