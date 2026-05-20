// index.js

import { generateRandomNumber, celsiusToFahrenheit } from './utils.js';
import { getPosts } from './postController.js';

console.log('Random Number:', generateRandomNumber());
console.log('Celsius to Fahrenheit (0°C):', celsiusToFahrenheit(0));

console.log('Posts:', getPosts());
