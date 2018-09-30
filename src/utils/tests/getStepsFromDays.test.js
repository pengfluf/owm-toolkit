import getStepsFromDays from '../getStepsFromDays';

describe('getStepsFromDays', () => {
  const defaultStep = 3;
  const customStep = 6;

  describe('Default step argument without explicit providing', () => {
    it('Calculates remaining daily steps correctly', () => {
      expect(getStepsFromDays(1)).toBeLessThanOrEqual(
        24 / defaultStep,
      );
    });

    it('Calculates full day steps correctly', () => {
      const remaining = getStepsFromDays(1);
      const full = getStepsFromDays(2) - remaining;

      expect(full).toEqual(24 / defaultStep);
    });
  });

  describe('Custom step argument with explicit providing', () => {
    it('Calculates remaining daily steps correctly', () => {
      expect(
        getStepsFromDays(1, customStep),
      ).toBeLessThanOrEqual(24 / customStep);
    });

    it('Calculates full day steps correctly', () => {
      const remaining = getStepsFromDays(1, customStep);
      const full =
        getStepsFromDays(2, customStep) - remaining;

      expect(full).toEqual(24 / customStep);
    });
  });
});
