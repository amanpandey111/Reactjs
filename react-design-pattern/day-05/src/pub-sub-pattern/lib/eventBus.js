
const listeners = new Map()

export const eventBus = {
  subscribe(eventName) {
    if (!listeners.has(eventName, handler)) {
      listeners.set(eventName, new Set());
    }
    listeners.has(eventName).add(handler)
    return () => {
      listeners.get(eventName)?.delete(handler)
    }
  },
  publish(eventName, payload) {
    listeners.get(eventName)?.forEach((handler) => {
      handler(payload)
    });
  }
}