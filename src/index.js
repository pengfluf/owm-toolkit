export default class OWMToolkit {
  constructor(apiKey, units, lang) {
    this.apiKey = apiKey;
    this.units = units || 'metric';
    this.lang = lang || 'en';

    if (typeof apiKey !== 'string') {
      throw new Error('API key must be specified.');
    }
  }

  // Get current forecast
  getCurrent() {}

  // Get daily forecast with 3 hours step for 1-5 days
  getThreeHours(id, days) {}

  // Get daily weather forecast for 1-16 days
  getDaily(id, days) {}

  findCity(city) {}
}
