import {Destroy} from "./Destroy.js"
export {Destroy}
/**
 * Class for managing a list of objects with a `destroy` method.
 */
export class Destrash {
    /**
     * Protected array to store objects with a `destroy` method.
     */
    protected _list: (Destroy | { destroy: () => void|never })[] = [];

    /**
     * Adds an object to the list.
     * @param item Object with a `destroy` method.
     */
    public set insert(item: Destroy | { destroy: () => void|never }) {
        this._list.push(item);
    }

    /**
     * Adds an object to the list.
     * @param item Object with a `destroy` method.
     */
    public add(item: Destroy | { destroy: () => void|never }) {
        this._list.push(item);
    }

    /**
     * Destroys all objects in the list by calling their `destroy` methods.
     */
    public destroyAll(): void {
        for(let item of this._list.splice(0))
            item.destroy();
        // this._list.forEach((item) => {
        //     item.destroy();
        // });
        //this._list = [];
    }
}
