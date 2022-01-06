#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";
import { printHelp } from "./service/log.service.js";

const initCLI = () => {
  console.log("started");

  const args = getArgs(process.argv);

  console.log(args);
  if (args.h) {
    // show help
    printHelp();
  }

  if (args.s) {
    // save city
  }

  if (args.t) {
    // save token
  }
};

initCLI();
