import { useEffect } from "react";
import { eventBus } from "../lib/eventBus";

export function useEvent(eventName: unknown, handler: unknown) {
  useEffect(() => {
    const unsubscribe = eventBus.subscribe(eventName, handler)
    return () => unsubscribe();
  }, [eventName, handler])
}