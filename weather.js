#!/usr/bin/env node

import { getArgs } from "./helpers/args.js";

const initCLI = () => {
  console.log("started");

  const args = getArgs(process.argv);

  console.log(args);
  if (args.h) {
    // show help
    console.log("help");
  }

  if (args.s) {
    // save city
  }

  if (args.t) {
    // save token
  }
};

initCLI();
