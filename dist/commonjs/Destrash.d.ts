import { Destroy } from "./Destroy.js";
export { Destroy };
/**
 * Class for managing a list of objects with a `destroy` method.
 */
export declare class Destrash {
    /**
     * Protected array to store objects with a `destroy` method.
     */
    protected _list: (Destroy | {
        destroy: () => void | never;
    })[];
    /**
     * Adds an object to the list.
     * @param item Object with a `destroy` method.
     */
    set insert(item: Destroy | {
        destroy: () => void | never;
    });
    /**
     * Adds an object to the list.
     * @param item Object with a `destroy` method.
     */
    add(item: Destroy | {
        destroy: () => void | never;
    }): void;
    /**
     * Destroys all objects in the list by calling their `destroy` methods.
     */
    destroyAll(): void;
}
