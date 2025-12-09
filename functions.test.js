import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./functions.js";

// capitalize
test("capitalizes correctly", () => {
  expect(capitalize("big poppa")).toBe("Big poppa");
});

// reverseString
test("reverses string correctly", () => {
  expect(reverseString("abcdefg")).toBe("gfedcba");
});

// calculator
test("calculator subtracts correctly", () => {
  expect(calculator.subtract(21, 1)).toBe(20);
});
test("calculator divides correctly", () => {
  expect(calculator.divide(20, 5)).toBe(4);
});
test("calculator multiplies correctly", () => {
  expect(calculator.multiply(4, 5)).toBe(20);
});

// caesarCipher
test("caesarCipher encrypts 'lorem ipsum' correctly", () => {
  expect(caesarCipher("lorem ipsum", 2)).toBe("nqtgo kruwo");
});
test("caesarCipher wraps back to a, after z", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});
test("caesarCipher encrypts 'HeLLo wORLd' correctly", () => {
  expect(caesarCipher("HeLLo wORLd", 3)).toBe("KhOOr zRUOg");
});
test("caesarCipher keeps numbers, punctuation and special characters unchanged", () => {
  expect(caesarCipher(`1234567890-=[];'{}:"|<>?+_)(*&^%$#@!)`)).toBe(
    `1234567890-=[];'{}:"|<>?+_)(*&^%$#@!)`
  );
});

// analyzeArray
test("analyzeArray takes an array and returns an object with expected properties", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
