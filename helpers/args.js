export const getArgs = (args) => {
  const res = {};
  const [_, file, ...rest] = args;

  rest.forEach((value, index, array) => {
    const key = value.substring(1);
    if (value.charAt(0) === "-") {
      if (index === array.length - 1) {
        res[key] = true;
      } else if (array[index + 1].charAt(0) !== "-") {
        res[key] = array[index + 1];
      } else {
        res[key] = true;
      }
    }
  });

  return res;
};
