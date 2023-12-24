"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Destroy = void 0;
/**
 * Class for managing a one-time self-destructive action.
 */
class Destroy {
    /**
     * The one-time action to be performed upon destruction.
     * @private
     */
    _action;
    /**
     * Flag indicating whether the destruction has occurred.
     * @private
     */
    _destroyed = false;
    /**
     * Creates an instance of Destroy with a one-time action.
     * @param action - The one-time action to be performed.
     */
    constructor(action) {
        this._action = action;
    }
    /**
     * Invokes the one-time action and marks the instance as destroyed.
     * @throws Will throw an error if destroy() is called more than once.
     */
    destroy() {
        if (this._destroyed)
            throw new Error(`Can not destroy destroyed!`);
        this._destroyed = true;
        this._action();
    }
    /**
     * Checks whether destroy() has been called on the instance.
     * @returns True if destroy() has been called, false otherwise.
     */
    isDestroyed() {
        return this._destroyed;
    }
}
exports.Destroy = Destroy;
//# sourceMappingURL=Destroy.js.map