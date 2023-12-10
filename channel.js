import { Collection } from "./discord";

const myQueue = new Collection();

export const emptyQueue = () => {
    let obj = myQueue.first();

    // sort myQueue

    myQueue.delete(obj);
    return obj.guildId;
}
