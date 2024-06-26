'use client';

import { useEffect, useState } from 'react';

class LocalStorage {
  getItem(key: string) {
    if (typeof window === 'undefined') {
      return undefined;
    }
    const item = localStorage.getItem(key);

    if (item === null) return undefined;

    if (item === 'null') return null;
    if (item === 'undefined') return undefined;

    try {
      return JSON.parse(item);
    } catch {
      /**/
    }

    return item;
  }
  setItem<T>(key: string, value: T) {
    if (value === undefined) {
      localStorage?.removeItem(key);
    } else {
      localStorage?.setItem(key, JSON.stringify(value));
    }
  }
}

const persistentStorage = new LocalStorage();

export default function useStorage<T>(key: string, initialValue?: T) {
  const [value, setValue] = useState<T>(() => {
    if (typeof window === 'undefined') {
      return initialValue;
    }
    const storageValue = persistentStorage.getItem(key);

    if (
      typeof initialValue === 'object' &&
      !Array.isArray(initialValue) &&
      initialValue !== null
    ) {
      return {
        ...initialValue,
        ...storageValue,
      };
    } else if (
      (typeof initialValue === 'object' &&
        Array.isArray(initialValue) &&
        !(storageValue?.length > 0)) ||
      (typeof initialValue === 'string' && !storageValue && storageValue !== '')
    ) {
      return initialValue;
    } else {
      return storageValue;
    }
  });

  useEffect(() => {
    persistentStorage.setItem<T>(key, value);
  }, [key, value]);

  return [value, setValue] as const;
}
