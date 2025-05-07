import { merge } from './merge';

describe('merge', () => {
  it('merges ascending + descending + ascending', () => {
    expect(merge([1, 3], [5, 4, 2], [6, 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  it('works with one element in each array', () => {
    expect(merge([1], [3], [2])).toEqual([1, 2, 3]);
  });

  it('works with empty middle array', () => {
    expect(merge([0, 2], [], [3, 5])).toEqual([0, 2, 3, 5]);
  });

  it('works with only middle array', () => {
    expect(merge([], [3, 2, 1], [])).toEqual([1, 2, 3]);
  });

  it('handles all empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
  });

  it('handles negative and positive numbers', () => {
    expect(merge([-10, -5, 0], [5, 3, 1, -1], [2, 4, 6]))
      .toEqual([-10, -5, -1, 0, 1, 2, 3, 4, 5, 6]);
  });

  it('handles duplicate values across arrays', () => {
    expect(merge([1, 2, 3], [5, 3, 2], [3, 4]))
      .toEqual([1, 2, 2, 3, 3, 3, 4, 5]);
  });

  it('works with large numbers', () => {
    expect(merge([100000, 200000], [300000, 100000], [400000]))
      .toEqual([100000, 100000, 200000, 300000, 400000]);
  });

  it('handles only large descending array', () => {
    expect(merge([], [1000000, 900000, 800000, 700000], []))
      .toEqual([700000, 800000, 900000, 1000000]);
  });

  it('works with very large values', () => {
    expect(merge([1, 500000000], [1000000000, 750000000], [1250000000, 1500000000]))
      .toEqual([1, 500000000, 750000000, 1000000000, 1250000000, 1500000000]);
  });
});
