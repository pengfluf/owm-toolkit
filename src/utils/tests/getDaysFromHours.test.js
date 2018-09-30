import { initial, expected } from './data/lists';
import getDaysFromHours from '../getDaysFromHours';

describe('getDaysFromHours', () => {
  it('Returns the correct result', () => {
    expect(getDaysFromHours(initial)).toEqual(expected);
  });
});
