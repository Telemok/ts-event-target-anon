/* >npm test */
import {jest} from '@jest/globals'
import {Destroy} from '../dist/esnext/Destroy.js'

/* >npm run testCommonJs */
//const { Destroy } = require('../dist/commonjs/Destroy');


describe('Destroy class', () => {

    const destroyableInstance = new Destroy(() => {});

    test('isDestroyed() returns false after the first destroy()', () => {
        expect(destroyableInstance.isDestroyed()).toBe(false);
    });

    test('destroy() does not throw on the first call', () => {
        expect(() => destroyableInstance.destroy()).not.toThrow();
    });

    test('isDestroyed() returns true after the second destroy()', () => {
        expect(destroyableInstance.isDestroyed()).toBe(true);
    });

    test('destroy() throws on the second call', () => {
        expect(() => destroyableInstance.destroy()).toThrow();
    });

});