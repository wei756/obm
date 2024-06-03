'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import { HaksikTime, HaksikType } from '../lib/types';
import useStorage from '../lib/hooks/useStorage';

export type Values = {
  readonly displaySikdang: Record<HaksikType, boolean>;
  readonly displayTime: Record<HaksikTime, boolean>;
};

export type Actions = {
  readonly updateDisplaySikdang: (type: HaksikType, value: boolean) => void;
  readonly updateDisplayTime: (time: HaksikTime, value: boolean) => void;
};

const MenuValueContext = createContext<Values>({
  displaySikdang: {
    [HaksikType.HAKSIK]: true,
    [HaksikType.GYOSIK]: true,
    [HaksikType.BUNSIK]: true,
    [HaksikType.PUREUM]: true,
    [HaksikType.OREUM1]: true,
    [HaksikType.OREUM3]: true,
  },
  displayTime: {
    [HaksikTime.BREAKFAST]: true,
    [HaksikTime.LUNCH]: true,
    [HaksikTime.DINNER]: true,
    [HaksikTime.ANY]: true,
  },
});

const MenuActionContext = createContext<Actions>({
  updateDisplaySikdang: (type: HaksikType, value: boolean) => {},
  updateDisplayTime: (time: HaksikTime, value: boolean) => {},
});

type Props = {
  readonly children: React.ReactNode;
};

export function MenuProvider(props: Props): React.ReactNode {
  const [displaySikdang, setDisplaySikdang] = useStorage<
    Record<HaksikType, boolean>
  >('haksik.displaySikdang', {
    [HaksikType.HAKSIK]: true,
    [HaksikType.GYOSIK]: true,
    [HaksikType.BUNSIK]: true,
    [HaksikType.PUREUM]: true,
    [HaksikType.OREUM1]: true,
    [HaksikType.OREUM3]: true,
  });
  const [displayTime, setDisplayTime] = useStorage<Record<HaksikTime, boolean>>(
    'haksik.displayTime',
    {
      [HaksikTime.BREAKFAST]: true,
      [HaksikTime.LUNCH]: true,
      [HaksikTime.DINNER]: true,
      [HaksikTime.ANY]: true,
    },
  );

  const updateDisplaySikdang = (type: HaksikType, value: boolean) => {
    setDisplaySikdang((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const updateDisplayTime = (time: HaksikTime, value: boolean) => {
    setDisplayTime((prev) => ({
      ...prev,
      [time]: value,
    }));
  };

  const actions: Actions = useMemo(
    () => ({
      updateDisplaySikdang,
      updateDisplayTime,
    }),
    [
      updateDisplaySikdang,
      setDisplaySikdang,
      displaySikdang,
      updateDisplayTime,
      setDisplayTime,
      displayTime,
    ],
  );

  return (
    <MenuActionContext.Provider value={actions}>
      <MenuValueContext.Provider
        value={{
          displaySikdang,
          displayTime,
        }}
      >
        {props.children}
      </MenuValueContext.Provider>
    </MenuActionContext.Provider>
  );
}

export function useMenuValues() {
  const value = useContext(MenuValueContext);
  if (!value) {
    throw new Error('useMenuValues should be used within MenuProvider');
  }
  return value;
}

export function useMenuActions() {
  const value = useContext(MenuActionContext);
  if (!value) {
    throw new Error('useMenuActions should be used within MenuProvider');
  }
  return value;
}
