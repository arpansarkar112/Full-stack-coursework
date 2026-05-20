// pathDemo.js
import path from 'path';
import { fileURLToPath } from 'url';

// __filename and __dirname equivalents for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const filePath = path.join(__dirname, 'public', 'index.html');

console.log('Constructed File Path:', filePath);
console.log('__filename equivalent:', __filename);
console.log('__dirname equivalent:', __dirname);
