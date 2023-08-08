import { merge } from '../merge';
import { expect } from 'chai';

describe('merge', () => {
    it('should merge two sorted arrays', () => {
        const arr1 = [1, 3, 5];
        const arr2 = [2, 4, 6];
        const merged = merge(arr1, arr2);
        expect(merged).to.deep.equal([1, 2, 3, 4, 5, 6]);
    });
});
