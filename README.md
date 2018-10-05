# OpenWeatherMap Toolkit

Toolkit to reduce pain using OpenWeatherMap API.

## Why are there so few methods?

It's because of OWM API free plan limitations.
This toolkit is mainly built for beginners doing the common weather application test tasks.

## Usage

All examples related to Saint-Petersburg, Russia. Its ID on OpenWeatherMap is **498817**.

For more details check out [API reference](docs/api-reference.md).

#### Install dependency
```bash
npm install owm-toolkit --save
```

Or you can use [Yarn](https://yarnpkg.com) (which is faster):
```bash
yarn add owm-toolkit
```


#### Initialize OWMToolkit instance
```javascript
import { OWMToolkit } from 'owm-toolkit';

const owm = new OWMToolkit('myApiKey');
```
#### General usage of any method (examples below are without .then() and .catch())
```javascript
owm.SOME_METHOD(498817)
  .then(res => console.log(res))
  .catch(err => console.error(err));
```

#### Get current weather data
```javascript
owm.getCurrent(498817)
```

#### Get 5 day / 3 hour forecast
```javascript
owm.getThreeHours(498817)
```

#### Find city
```javascript
owm.findCity('Saint Petersburg, RU')
```
