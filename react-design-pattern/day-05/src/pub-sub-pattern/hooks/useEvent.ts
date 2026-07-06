import eventBus from '../lib/eventBus';
import { useEffect } from 'react';
import type { ProductType } from '../types/_practice';

export function useEvent(eventName: string, handler: (data: ProductType) => void) {
  useEffect(() => {
    const unSubscribe = eventBus.subscribe(eventName, handler)
    return () => unSubscribe();
  }, [eventName, handler])
}

