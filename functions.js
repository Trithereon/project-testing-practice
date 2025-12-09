#!/usr/bin/env node

export function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export function reverseString(str) {
  return str.split("").reverse().join("");
}

export const calculator = {
  subtract: (num1, num2) => {
    return num1 - num2;
  },
  divide: (num1, num2) => {
    return num1 / num2;
  },
  multiply: (num1, num2) => {
    return num1 * num2;
  },
};

export function caesarCipher(string, shiftFactor) {
  let encryptedStr = "";
  for (const char of string) {
    const charCode = char.charCodeAt(0);
    if (charCode >= 65 && charCode <= 90) {
      let newCharCode = charCode + shiftFactor;
      if (newCharCode > 90) {
        newCharCode = newCharCode - 26;
      }
      encryptedStr += String.fromCharCode(newCharCode);
    } else if (charCode >= 97 && charCode <= 122) {
      let newCharCode = charCode + shiftFactor;
      if (newCharCode > 122) {
        newCharCode = newCharCode - 26;
      }
      encryptedStr += String.fromCharCode(newCharCode);
    } else encryptedStr += char;
  }
  return encryptedStr;
}

export function analyzeArray(arr) {
  const avg = arr.reduce((acc, current) => acc + current, 0) / arr.length;
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const len = arr.length;
  return { average: avg, min: min, max: max, length: len };
}
