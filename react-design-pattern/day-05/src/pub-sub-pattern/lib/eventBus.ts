import type { ProductType } from "../types/_practice"
import { crossTabChannel } from "./broadCast"

const listeners = new Map()

const eventBus = {
  subscribe(eventName: string, handler: (data: ProductType) => void) {
    if(!listeners.has(eventName)) {
      listeners.set(eventName, new Set())
    }
    listeners.get(eventName)?.add(handler)
    return () => {
      listeners.get(eventName)?.delete(handler)
    }
  },
  publish(eventName: string, payload: ProductType, { broadCast= true } = {}) {
    console.log(payload)
    listeners.get(eventName)?.forEach((handler: (data: ProductType) => void) => {
      handler(payload)
    })
    if(broadCast) {
      crossTabChannel.postMessage({ eventName, payload })
    }
  }
}  

export default eventBus;
