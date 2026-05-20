// eventsDemo.js
import { EventEmitter } from 'events';

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Register a listener for the 'greet' event
myEmitter.on('greet', (name) => {
  console.log(`Hello, ${name}!`);
});

// Register a listener for the 'goodbye' event
myEmitter.on('goodbye', () => {
  console.log('Goodbye!');
});

// Emit the 'greet' event
myEmitter.emit('greet', 'Alice');

// Emit the 'goodbye' event
myEmitter.emit('goodbye');
