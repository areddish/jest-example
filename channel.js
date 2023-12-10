import { Collection } from "./discord";

export const someQueue = {
    first: () => null,
    push: (v) => console.log(`pushing ${v}`),
    length: 123
}

export const addTwo = () => {
    someQueue.push(1);
    someQueue.push(2);
    return someQueue.length;
}

export const myQueue = new Collection();

export const emptyQueue = () => {
    console.log(JSON.stringify(myQueue));
    console.log(JSON.stringify(myQueue.first));
    let obj = myQueue.first();

    // sort myQueue

    myQueue.delete(obj);
    return obj.guildId;
}