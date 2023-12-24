"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destrash = exports.Destroy = void 0;
const Destroy_js_1 = require("./Destroy.js");
Object.defineProperty(exports, "Destroy", { enumerable: true, get: function () { return Destroy_js_1.Destroy; } });
/**
 * Class for managing a list of objects with a `destroy` method.
 */
class Destrash {
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
exports.Destrash = Destrash;
//# sourceMappingURL=Destrash.js.map