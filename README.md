# OpenWeatherMap Toolkit

Toolkit to reduce pain using OpenWeatherMap API.

## Why are there so few features?

It's because of OWM API free plan limitations.
This toolkit is mainly built for beginners doing the common weather application test tasks.

## Usage

All examples related to Saint-Petersburg, Russia. Its ID on OpenWeatherMap is **498817**.

For more details check out [API reference](docs/api-reference.md).

#### Initialize OWMToolkit instance
```javascript
const owm = new OWMToolkit('myApiKey');
```

#### Get current weather data
```javascript
const currentWeather = owm.getCurrent(498817);
```

#### Get 5 day / 3 hour forecast
```javascript
const threeHours = owm.getThreeHours(498817);
```

#### Find city
```javascript
const results = owm.findCity('Saint Petersburg, RU');
```
