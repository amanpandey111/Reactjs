import { crossTabChannel } from "./broadCast";
import eventBus from "./eventBus";

crossTabChannel.onmessage = ({data}) => {
    const { eventName, payload } = data;
    eventBus.publish(eventName, payload, { broadCast: false });
}
