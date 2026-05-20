// fsDemo.js
import { writeFile, appendFile, readFile } from 'fs/promises';

async function fileOperations() {
  try {
    await writeFile('test.txt', 'Hello, this is a test file.');
    console.log('Wrote to test.txt');

    await appendFile('test.txt', '\nThis is an appended line.');
    console.log('Appended to test.txt');

    const data = await readFile('test.txt', 'utf-8');
    console.log('Read from test.txt:', data);
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

fileOperations();
