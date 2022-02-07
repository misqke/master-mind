import { colors } from "./colors";

export const generateCode = (options) => {
  const colorList = colors.slice(0, options.colors);
  const code = [];
  const codeColors = [];
  for (let i = 0; i < options.codeLength; i++) {
    const index = Math.floor(Math.random() * colorList.length);
    code.push(colorList[index]);
    codeColors.push(colorList[index].color);
  }
  return { code, codeColors };
};

export const checkGuess = (guess, code) => {
  let exact = [];
  let close = [];
  let newGuess = [];
  let newCodeColors = [];
  code.code.forEach((color, i) => {
    if (color === guess[i]) {
      exact.push(1);
    } else {
      newGuess.push(guess[i]);
      newCodeColors.push(code.codeColors[i]);
    }
  });
  newGuess.forEach((guess, i) => {
    if (newCodeColors.includes(guess.color)) {
      const index = newCodeColors.indexOf(guess.color);
      newCodeColors.splice(index, 1);
      close.push(1);
    }
  });
  return { exact, close };
};
