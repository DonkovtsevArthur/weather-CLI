#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { printHelp, printSuccess, printError } from "./services/log.service.js";
import { saveKeyValue } from "./services/storage.service.js";

const saveToken = async (token) => {
  if (!token.length) {
    return printError("Токен не передан");
  }
  try {
    await saveKeyValue("token", token);
    printSuccess("Токен сохранен");
  } catch (e) {
    printError(e.message);
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
  }

  if (args.t) {
    // save token
    return await saveToken(args.t);
  }
};

initCLI();
