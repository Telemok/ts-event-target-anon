/* >npm test */
import {jest} from '@jest/globals'
import {Destrash} from '../dist/esnext/Destrash.js'

/* >npm run testCommonJs */
//const { Destrash } = require('../dist/commonjs/Destrash');

test('destroyAll should call destroy on each item', () => {
    const destrash = new Destrash();

    const mockDestroyFn1 = jest.fn();
    const mockDestroyFn2 = jest.fn();

    destrash.add({
        destroy: mockDestroyFn1,
    });

    destrash.add({
        destroy: mockDestroyFn2,
    });

    expect(mockDestroyFn1).not.toHaveBeenCalled();
    expect(mockDestroyFn2).not.toHaveBeenCalled();

    destrash.destroyAll();

    expect(mockDestroyFn1).toHaveBeenCalled();
    expect(mockDestroyFn2).toHaveBeenCalled();
    expect(destrash['_list']).toEqual([]);
});
