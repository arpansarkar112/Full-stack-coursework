// utils.js

export function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

export function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}
