import { BASE_URL } from './constants';
import getStepsFromDays from './utils/getStepsFromDays';

export default class OWMToolkit {
  constructor(apiKey, units, lang) {
    this.apiKey = apiKey;
    if (typeof this.apiKey !== 'string') {
      throw new Error('API key must be specified.');
    }

    this.units = units || 'metric';
    this.lang = lang || 'en';
  }

  // URL templating with the specific endpoint
  $getUrl(endpoint) {
    return `${BASE_URL}${endpoint}?APPID=${
      this.apiKey
    }&units=${this.units}`;
  }

  // Get current forecast
  getCurrent(id) {
    return fetch(
      `${this.$getUrl('/weather')}&id=${id}`,
    ).then(res => res.json());
  }

  // Get daily forecast with 3 hours step for 1-5 days
  getThreeHours(id, days) {
    return fetch(
      `${this.$getUrl(
        '/forecast',
      )}&id=${id}&cnt=${getStepsFromDays(days)}`,
    ).then(res => res.json());
  }

  // Get daily weather forecast for 1-16 days
  getDaily(id, days) {
    return fetch(
      `${this.$getUrl('/forecast/daily')}&cnt=${days}`,
    ).then(res => res.json());
  }

  // Get cities that matched the provided query
  findCity(city) {
    return fetch(`${this.$getUrl('/find')}&q=${city}`).then(
      res => res.json(),
    );
  }
}
