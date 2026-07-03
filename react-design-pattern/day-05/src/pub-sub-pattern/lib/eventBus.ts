const listeners = new Map()

const eventBus = {
  subscribe(eventName: string, handler) {
    if(!listeners.has(eventName)) {
      listeners.set(eventName, new Set())
    }
    listeners.get(eventName)?.add(handler)
    return () => {
      listeners.get(eventName)?.delete(handler)
    }
  },
  publish(eventName: string, payload) {
    listeners.get(eventName)?.forEach((handler) => {
      handler(payload)
    })
  }
}

export default eventBus;
