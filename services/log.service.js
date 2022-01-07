import chalk from "chalk";
import { getIcon } from "./api.service.js";

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

const printWeather = (data) => {
  console.log(`
    ${chalk.bgGreen("SUCCESS")} Погода в городе ${data.name}
    ${getIcon(data.weather[0].icon)} ${data.weather[0].description}
    Температура: ${data.main.temp} (ощущается как ${data.main.feels_like})
    Влажность: ${data.main.humidity}
    Скорость ветра: ${data.wind.speed}
    `);
};

export { printSuccess, printError, printHelp, printWeather };
