import { Destroy } from "./Destroy.js";
export { Destroy };
/**
 * Class for managing a list of objects with a `destroy` method.
 */
export class Destrash {
    /**
     * Protected array to store objects with a `destroy` method.
     */
    _list = [];
    /**
     * Adds an object to the list.
     * @param item Object with a `destroy` method.
     */
    set insert(item) {
        this._list.push(item);
    }
    /**
     * Adds an object to the list.
     * @param item Object with a `destroy` method.
     */
    add(item) {
        this._list.push(item);
    }
    /**
     * Destroys all objects in the list by calling their `destroy` methods.
     */
    destroyAll() {
        for (let item of this._list.splice(0))
            item.destroy();
        // this._list.forEach((item) => {
        //     item.destroy();
        // });
        //this._list = [];
    }
}
//# sourceMappingURL=Destrash.js.map