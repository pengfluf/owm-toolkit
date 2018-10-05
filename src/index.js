import fetch from 'node-fetch';

import { BASE_URL } from './constants';

import getStepsFromDays from './utils/getStepsFromDays';
import getDaysFromHours from './utils/getDaysFromHours';
import removeDuplicates from './utils/removeDuplicates';

export class OWMToolkit {
  constructor(apiKey, units, lang) {
    // Make this private in the future
    this.$apiKey = apiKey;
    if (typeof this.$apiKey !== 'string') {
      throw new Error('API key must be specified.');
    }

    this.units = units || 'metric';
    this.lang = lang || 'en';
  }

  // URL templating with the specific endpoint
  $getUrl(endpoint) {
    return `${BASE_URL}${endpoint}?APPID=${
      this.$apiKey
    }&units=${this.units}&lang=${this.lang}`;
  }

  // Get current forecast
  getCurrent(id) {
    return fetch(
      `${this.$getUrl('/weather')}&id=${id}`,
    ).then(res => res.json());
  }

  // Get daily forecast with 3 hours step for 1-5 days
  getThreeHours(id, days = 5) {
    return fetch(
      `${this.$getUrl(
        '/forecast',
      )}&id=${id}&cnt=${getStepsFromDays(days)}`,
    )
      .then(res => res.json())
      .then(data => ({
        ...data,
        list: getDaysFromHours(data.list),
      }));
  }

  // Get cities that matched the provided query
  findCity(city) {
    return fetch(`${this.$getUrl('/find')}&q=${city}`)
      .then(res => res.json())
      .then(data => ({
        ...data,
        list: removeDuplicates(data.list),
      }));
  }
}
