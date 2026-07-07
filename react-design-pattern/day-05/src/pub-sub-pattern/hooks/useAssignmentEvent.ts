import { useEffect } from "react"
import type { NotificationType } from "../types/_practice"
import assignmentEventBus from "../lib/assignmentEventBus"

const useAssignmentEvent = (eventName: string, handler: (data: NotificationType) => void) => {
  useEffect(() => {
    const unsubscribe = assignmentEventBus.subscriber(eventName, handler)
    return () => unsubscribe()
  }, [eventName, handler])
}

export default useAssignmentEvent;
