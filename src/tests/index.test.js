import OWMToolkit from '..';
import { BASE_URL } from '../constants';

describe('OWMToolkit', () => {
  const apiKey = process.env.API_KEY;
  // Saint-Petersburg, RU, took from OpenWeatherMap
  const cityID = 498817;

  const owm = new OWMToolkit(apiKey);

  describe('constructor', () => {
    it("Throws an error when API key isn't specified", () => {
      expect(() => new OWMToolkit()).toThrowError();
    });

    it('Sets api key correctly', () => {
      expect(owm.$apiKey).toEqual(apiKey);
    });

    it('Sets default units correctly', () => {
      expect(owm.units).toEqual('metric');
    });

    it('Sets default language correctly', () => {
      expect(owm.lang).toEqual('en');
    });
  });

  describe('$getUrl', () => {
    it('Returns the correct result', () => {
      const endpoint = '/weather';
      const expected = `${BASE_URL}${endpoint}?APPID=${
        owm.$apiKey
      }&units=${owm.units}`;
      expect(owm.$getUrl(endpoint)).toEqual(expected);
    });
  });

  describe('getCurrent', () => {
    it('Returns the correct result', async () => {
      const response = await owm.getCurrent(cityID);
      expect(response.id).toBe(cityID);
    });
  });

  describe('getThreeHours', () => {
    it("Returns the correct result when days aren't specified", async () => {
      const response = await owm.getThreeHours(cityID);
      expect(response.city.id).toBe(cityID);
    });

    it('Returns the correct result when days are specified', async () => {
      const response = await owm.getThreeHours(cityID, 1);
      expect(response.city.id).toBe(cityID);
    });
  });

  describe('findCity', () => {
    it('Returns the correct result', async () => {
      const response = await owm.findCity(
        'Saint Petersburg, RU',
      );
      expect(response.list[0].id).toBe(cityID);
    });
  });
});
