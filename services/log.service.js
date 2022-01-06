import chalk from "chalk";

const printError = (error) => {
  console.log(`${chalk.bgRed("ERROR")} ${error}`);
};

const printSuccess = (msg) => {
  console.log(`${chalk.bgGreen("SUCCESS")} ${msg}`);
};

const printHelp = () => {
  console.log(`${chalk.bgCyan("HELP")}
  'Без параметров - вывод погоды
  -s [CITY] для установки города
  -h для вывода помощи
  -t [API_KEY] для сохранения токена
  `);
};

export { printSuccess, printError, printHelp };
