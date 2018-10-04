# API reference

## Constructor

#### new OWMToolkit(*apiKey[, units[, lang]]*)
**apiKey** – API key

**units** (optional, 'metric' by default) – units format. Can be metric (°C), imperial (°F) or standard (K).

**lang** (optional, 'en' by default) – language **for the description field**. See available languages [here](langs.md).

## Methods

All methods are related to the OWMToolkit instance, e.g. OWMToolkit.getCurrent(*id*).

#### getCurrent(*id*)

Get current weather data.

**id** – city ID

---

#### getThreeHours(*id[, days]*)

Get 5 day / 3 hour forecast.

**id** – city ID

**days** (optional, 5 by default) – forecast days from 1 to 5

---

#### findCity(*city*)

Find a city by the provided query. For more accurate search try to specify not only the city, but also the country code, e.g. `Saint Petersburg, RU`.

If you don't specify the country code, you just get all the results from all countries.

**city** – city query
