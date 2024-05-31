'use client';

import { createContext, useContext, useMemo, useState } from 'react';
import { HaksikType } from '../lib/types';
import useStorage from '../lib/hooks/useStorage';

export type Values = {
  readonly displaySikdang: Record<HaksikType, boolean>;
};

export type Actions = {
  readonly updateDisplaySikdang: (type: HaksikType, value: boolean) => void;
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
});

const MenuActionContext = createContext<Actions>({
  updateDisplaySikdang: (type: HaksikType, value: boolean) => {},
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

  const updateDisplaySikdang = (type: HaksikType, value: boolean) => {
    console.log('updateDisplaySikdang', type, value);
    setDisplaySikdang((prev) => ({
      ...prev,
      [type]: value,
    }));
  };

  const actions: Actions = useMemo(
    () => ({
      updateDisplaySikdang,
    }),
    [updateDisplaySikdang, setDisplaySikdang, displaySikdang],
  );

  return (
    <MenuActionContext.Provider value={actions}>
      <MenuValueContext.Provider
        value={{
          displaySikdang,
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
