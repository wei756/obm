'use client';

import { ChevronRightIcon } from '@heroicons/react/24/outline';
import { sendGAEvent } from '@next/third-parties/google';
import Link from 'next/link';

export default function TomorrowButton({ today }: { today: Date }) {
  const tomorrow = new Date(today.getTime() + 24 * 60 * 60 * 1000);
  return (
    <Link
      href={`/${tomorrow.toISOString().slice(0, 10)}`}
      onClick={() =>
        sendGAEvent({ event: 'buttonClicked', value: 'goto-tomorrow' })
      }
    >
      <ChevronRightIcon className="size-4" />
    </Link>
  );
}
