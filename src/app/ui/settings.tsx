'use client';

import {
  CheckIcon,
  Cog6ToothIcon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { useState } from 'react';
import { HaksikTime, HaksikType } from '../lib/types';
import { useMenuActions, useMenuValues } from './context';
import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';

export default function Settings() {
  const { displaySikdang, displayTime } = useMenuValues();
  const { updateDisplaySikdang, updateDisplayTime } = useMenuActions();
  const [opened, setOpened] = useState(false);

  const timeOptions = Object.values(HaksikTime)
    .filter((val) => val != HaksikTime.ANY)
    .map((time) => (
      <ToggleButton
        key={time}
        label={time}
        value={displayTime[time]}
        onClick={(value) => updateDisplayTime(time, value)}
      />
    ));

  const sikdangOptions = Object.values(HaksikType).map((type) => (
    <ToggleButton
      key={type}
      label={type}
      value={displaySikdang[type]}
      onClick={(value) => updateDisplaySikdang(type, value)}
    />
  ));

  const options = [
    ...timeOptions,
    <div className="px-4">
      <div className="w-full h-px bg-gray-200"></div>
    </div>,
    sikdangOptions,
  ];

  return (
    <div className="Settings fixed bottom-4 right-4">
      <div className={clsx('size-[3.25rem] transition-all', { 'p-2': opened })}>
        <motion.button
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="flex justify-center items-center size-full bg-maincolor rounded-full text-white main-shadow"
          onClick={() => setOpened(!opened)}
        >
          <AnimatePresence>
            {!opened ? (
              <motion.span
                key="closed"
                initial={{ opacity: 0, rotate: 180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 180 }}
                transition={{ duration: 0.15 }}
                className="absolute top-[1/2-3] left-[1/2-3]"
              >
                <Cog6ToothIcon className="size-6" />
              </motion.span>
            ) : (
              <motion.span
                key="opened"
                initial={{ opacity: 0, rotate: -180 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -180 }}
                transition={{ duration: 0.15 }}
                className="absolute top-[1/2-3] left-[1/2-3]"
              >
                <XMarkIcon className="size-[1.125rem]" />
              </motion.span>
            )}
          </AnimatePresence>
        </motion.button>
      </div>
      <AnimatePresence>
        {opened && (
          <motion.div
            className="fixed left-0 top-0 size-full z-40"
            onMouseDown={() => setOpened(false)}
            onTouchStart={() => setOpened(false)}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          ></motion.div>
        )}
      </AnimatePresence>
      <AnimatePresence>
        {opened && (
          <motion.div
            className="absolute bottom-full right-0 p-2 z-50"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.15 }}
          >
            <ul className="flex flex-col main-shadow rounded-2xl py-2 bg-white">
              {options}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function ToggleButton({
  label,
  value,
  onClick,
}: {
  label: string;
  value: boolean;
  onClick: (value: boolean) => void;
}) {
  return (
    <li>
      <button
        className="flex items-center w-max px-4 py-2 gap-4 active:bg-gray-100 transition-colors"
        onClick={() => onClick(!value)}
      >
        <span className="w-[5rem] text-left text-sm">{label}</span>
        <CheckIcon
          className={clsx('size-6 text-maincolor', {
            'opacity-0': !value,
          })}
        />
      </button>
    </li>
  );
}
