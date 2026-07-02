
const listeners: any = new Map()

export const eventBus = {
  subscribe(eventName: any, handler: any) {
    if (!listeners.has(eventName, handler)) {
      listeners.set(eventName, new Set());
    }
    listeners.get(eventName).add(handler)
    return () => {
      listeners.get(eventName)?.delete(handler)
    }
  },
  publish(eventName: any, payload: any) {
    console.log(listeners)
    console.log(eventName, payload)
    listeners.get(eventName)?.forEach((handler: (arg0: any) => void) => {
      handler(payload)
    });
  }
}
console.log(listeners)