/* >npm test */
import {jest} from '@jest/globals'
import {EventTargetAnon} from '../dist/esnext/EventTargetAnon.js'

/* >npm run testCommonJs */
//const { EventTargetAnon } = require('../dist/commonjs/EventTargetAnon');

class MyClass extends EventTargetAnon
{

}
let myInstance =  new MyClass();

describe('EventTargetAnon class', () => {

    const subscribableInstance = new EventTargetAnon(() => {});
    const subscription = subscribableInstance.addEventListener('change',()=>{

    });


    test('should call the event handler when an event is dispatched', () => {
        const mockEventHandler = jest.fn();

        /* Act */
        const subscription = subscribableInstance.addEventListener('customEvent', mockEventHandler);
        subscribableInstance.dispatchEvent(new Event('customEvent'));

        /* Assert */
        expect(mockEventHandler).toHaveBeenCalled();

    });

    test('should not call the event handler when an event is dispatched after destroyed', () => {
        const mockEventHandler = jest.fn();

        /* Act */
        const subscription = subscribableInstance.addEventListener('customEvent', mockEventHandler);
        subscription.destroy();
        subscribableInstance.dispatchEvent(new Event('customEvent'));

        /* Assert */
        expect(mockEventHandler).not.toHaveBeenCalled();

    });

    test('isDestroy() returns false after the first destroy()', () => {
        expect(subscription.isDestroyed()).toBe(false);
    });

    test('destroy() does not throw on the first call', () => {
        expect(() => subscription.destroy()).not.toThrow();
    });

    test('isDestroyed() returns true after the second destroy()', () => {
        expect(subscription.isDestroyed()).toBe(true);
    });

    test('destroy() throws on the second call', () => {
        expect(() => subscription.destroy()).toThrow();
    });

});