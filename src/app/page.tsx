'use client';

import { useState } from 'react';
import Header from './ui/header';
import Menus from './ui/menus';

export default function MainPage() {
  const [date] = useState(new Date());

  return (
    <>
      <Header date={date} />
      <main className="flex flex-col p-4 gap-2 items-stretch">
        <Menus date={date} />
      </main>
    </>
  );
}
