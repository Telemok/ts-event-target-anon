/**
 * Class for managing a one-time self-destructive action.
 */
export class Destroy {
    /**
     * The one-time action to be performed upon destruction.
     * @private
     */
    protected _action: () => void;

    /**
     * Flag indicating whether the destruction has occurred.
     * @private
     */
    protected _destroyed: boolean = false;

    /**
     * Creates an instance of Destroy with a one-time action.
     * @param action - The one-time action to be performed.
     */
    constructor(action: () => void) {
        this._action = action;
    }

    /**
     * Invokes the one-time action and marks the instance as destroyed.
     * @throws Will throw an error if destroy() is called more than once.
     */
    public destroy(): void | never {
        if (this._destroyed)
            throw new Error(`Can not destroy destroyed!`);

        this._destroyed = true;
        this._action();
    }

    /**
     * Checks whether destroy() has been called on the instance.
     * @returns True if destroy() has been called, false otherwise.
     */
    public isDestroyed(): boolean {
        return this._destroyed;
    }
}