import { getKeyValue, TOKEN_DICTIONARY } from "./storage.service.js";

import axios from "axios";

const getWeather = async () => {
  const city = process.env.CITY ?? (await getKeyValue(TOKEN_DICTIONARY.city));
  if (!city) {
    throw new Error("Не передан город, задайте его через команду -s [CITY]");
  }

  const token =
    process.env.TOKEN ?? (await getKeyValue(TOKEN_DICTIONARY.token));
  if (!token) {
    throw new Error(
      "Не задан ключ API, задайте его через команду -t [API_KEY] - https://home.openweathermap.org/api_keys"
    );
  }

  const { data } = await axios.get(
    "https://api.openweathermap.org/data/2.5/weather",
    {
      params: {
        q: city,
        appid: token,
        lang: "ru",
        units: "metric",
      },
    }
  );

  return data;
};

const getIcon = (icon) => {
  switch (icon) {
    case "01d":
      return "🌞";
    case "01n":
      return "🌑";
    case "02d":
    case "02n":
      return "🌤";
    case "03d":
    case "03n":
      return "🌥️";
    case "04d":
    case "04n":
      return "☁️";
    case "09d":
    case "09n":
      return "🌧️";
    case "10d":
    case "10n":
      return "🌦";
    case "11d":
    case "11n":
      return "🌩️";
    case "13d":
    case "13n":
      return "❄️";
    case "50d":
    case "50n":
      return "🌫️️";
    default:
      return "No icon available for current weather condition.";
  }
};

export { getWeather, getIcon };
