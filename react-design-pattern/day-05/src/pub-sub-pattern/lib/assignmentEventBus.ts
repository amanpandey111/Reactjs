import type { NotificationType } from "../types/_practice"

const myMap = new Map()

const assignmentEventBus = {
  subscriber: (eventName: string, handler: (data: NotificationType) => void) => {
    if (!myMap.has(eventName)) {
      myMap.set(eventName, new Set())
    }
    myMap.get(eventName)?.add(handler)
    return () => {
      myMap.get(eventName)?.delete(handler)
    }
  },
  publisher: (eventName: string, notification: NotificationType) => {
    console.log(myMap)
    myMap.get(eventName)?.forEach((handler: (data: NotificationType) => void) => {
      handler(notification)
    })
  }
}

export default assignmentEventBus;
