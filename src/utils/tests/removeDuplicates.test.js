import removeDuplicates from '../removeDuplicates';

describe('removeDuplicates', () => {
  it('Returns the correct result', () => {
    const initial = [{ id: 123 }, { id: 456 }, { id: 123 }];
    const expected = [{ id: 123 }, { id: 456 }];

    expect(removeDuplicates(initial)).toEqual(expected);
  });
});
