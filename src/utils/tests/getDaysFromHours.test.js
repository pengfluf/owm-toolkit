import { initial, expected } from './data/threeHoursLists';
import getDaysFromHours from '../getDaysFromHours';

describe('getDaysFromHours', () => {
  it('Returns the correct result', () => {
    expect(getDaysFromHours(initial)).toEqual(expected);
  });
});
