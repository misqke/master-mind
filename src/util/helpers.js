import { colors } from "./colors";

export const generateCode = () => {
  const code = [];
  const codeColors = [];
  for (let i = 0; i < 4; i++) {
    const index = Math.floor(Math.random() * colors.length);
    code.push(colors[index]);
    codeColors.push(colors[index].color);
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
