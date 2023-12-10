export class Collection {
    constructor() {
        console.log("Collection")
        this.items = [];
    }

    first() {
        console.log("fff")
        if (this.items.length > 0) {
            return this.items[0];
        }
        return null;
    }

    delete(obj) {
        // this.items.delete(obj);
    }
}