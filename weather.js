#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import {
  printHelp,
  printSuccess,
  printError,
  printWeather,
} from "./services/log.service.js";
import { saveKeyValue, TOKEN_DICTIONARY } from "./services/storage.service.js";
import { getWeather } from "./services/api.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    return printError("Токен не передан");
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.token, token);
    printSuccess("Токен сохранен");
  } catch (e) {
    printError(e.message);
  }
};

const saveCity = async (city) => {
  if (!city.length) {
    return printError("Город не передан");
  }
  try {
    await saveKeyValue(TOKEN_DICTIONARY.city, city);
    printSuccess("Город сохранен");
  } catch (e) {
    printError(e.message);
  }
};

const getForcast = async () => {
  try {
    const weather = await getWeather();
    printWeather(weather);
  } catch (e) {
    if (e?.response?.status === 404) {
      printError("Не верно указан город");
    } else if (e?.response?.status === 401) {
      printError("Не верно указан токен");
    } else {
      printError(e.message);
    }
  }
};

const initCLI = async () => {
  const args = getArgs(process.argv);

  if (args.h) {
    // show help
    printHelp();
  }

  if (args.s) {
    // save city
    return await saveCity(args.s);
  }

  if (args.t) {
    // save token
    return await saveToken(args.t);
  }

  await getForcast();
};

initCLI();
